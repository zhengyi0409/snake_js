#include "UdpKcpWrap.h"
#include "RequestPkg.h"
#include "UdpResponsePkg.h"
#include "ResponsePkg.h"
#include "UdpKcpWrap.h"
#include "UDPMsgHandler.h"
#include "PSAppUtils.h"

using namespace cocos2d;

CUdpKcpWrap::CUdpKcpWrap(void)
{
	m_kcpHandle = NULL;
	m_udpHandle = NULL;

	//CCLOG("zhengyi--------------------------------- CUdpKcpWrap");

	_scheduler->scheduleUpdate(this, -1, true);//优先级比逻辑快一点，可以加快一点表现

	m_bScheduling = false;

	m_iCurConv = -1;
	m_bIsUseKcp = false;
}


CUdpKcpWrap::~CUdpKcpWrap(void)
{
}

CUdpKcpWrap *CUdpKcpWrap::instance()
{
	static CUdpKcpWrap * _inst = NULL;
	if (_inst == NULL)
	{
		_inst = new CUdpKcpWrap();
	}

	return _inst;
}

void CUdpKcpWrap::init(IUINT32 sessionid, int usrid, UDPSocketClient *_udpHandle)
{
	if (!m_bScheduling)
	{
		Director::getInstance()->getScheduler()->resumeTarget(this);
		m_bScheduling = true;
	}

	m_udpHandle = _udpHandle;

	if (m_kcpHandle)
	{
		ikcp_release(m_kcpHandle);
	}

	m_kcpHandle = ikcp_create(m_iCurConv, &usrid);

	m_kcpHandle->output = CUdpKcpWrap::sendbuff;

	// 配置窗口大小：平均延迟200ms，每20ms发送一个包，
	// 而考虑到丢包重发，设置最大收发窗口为128
	ikcp_wndsize(m_kcpHandle, 128, 128);

	// 启动快速模式
	ikcp_nodelay(m_kcpHandle, 1, 10, 2, 1);
	m_kcpHandle->rx_minrto = 10;
	m_kcpHandle->fastresend = 1;
}

void CUdpKcpWrap::close()
{
	if (m_kcpHandle)
	{
		ikcp_release(m_kcpHandle);
		m_kcpHandle = NULL;
	}

	Director::getInstance()->getScheduler()->pauseTarget(this);
	m_bScheduling = false;
	m_iCurConv = -1;
}

int CUdpKcpWrap::sendbuff(const char *buf, int len, IKCPCB *kcp, void *user)
{
	instance()->m_udpHandle->sendBuf_Direct((char*)buf, len);
	return 0;
}

void CUdpKcpWrap::quest(int cmd, int subCmd, int srcUid,int desUid, const char * data, int len, const char * ip, int port)
{
	if (!m_bIsUseKcp)
	{
		m_udpHandle->SendRequestPkg(cmd, subCmd, srcUid, desUid, data, len, ip, port);
	}
	else
	{
		//不直接发送，由kcp发送
		RequestPkg *pkg = m_udpHandle->GetRequestPkg(cmd, subCmd, srcUid, desUid, data, len, ip, port);
		ikcp_send(m_kcpHandle, (const char*)pkg->data(), pkg->length());
		pkg->release();
	}
}

void CUdpKcpWrap::update(float dt)
{
	//CCLOG("zhengyi--------------------------------- CUdpKcpWrap::update");

	if (m_kcpHandle == NULL  ||  m_udpHandle == NULL)
	{
		return;
	}

	//ikcp_check(m_kcpHandle, (GetCurTime()&0xffffffff));
	ikcp_update(m_kcpHandle, (GetCurTime()&0xffffffff));

	UDPMsgHandler * msgHandler = m_udpHandle->uMsgHandler;
	if (msgHandler->getResponseCount() > 0)
	{
		int count = min(msgHandler->getResponseCount(), 50);
		for (int i = 0; i < count; i++)
		{
			UdpResponsePkg *pkg = msgHandler->getRecv();

			if (m_bIsUseKcp)
			{
				ikcp_input(m_kcpHandle, (const char*)pkg->data(), pkg->length());
			}
			else
			{
				ResponsePkg pkg2((void*)pkg->data(), pkg->length());
				packet * pkg3 = pkg2.pkg();
				PSAppUtils::getInstance()->udpSocketResponse(pkg3->cmd, pkg3->subCmd, pkg3->srcUid, (const char*)pkg2.data(),pkg2.length());
			}
			pkg->release();
		}
	}

	char recvBuff[1024];
	int count = 0;
	while (m_bIsUseKcp  &&  count++ < 50)//限次
	{
		int recvLen = ikcp_recv(m_kcpHandle, recvBuff, 1024);
		if (recvLen < 0)
		{
			break;
		}

		ResponsePkg pkg2(recvBuff, recvLen);
		packet * pkg3 = pkg2.pkg();
		PSAppUtils::getInstance()->udpSocketResponse(pkg3->cmd, pkg3->subCmd, pkg3->srcUid, (const char*)pkg2.data(),pkg2.length());
	}
}
