//
//  SocketClient.cpp
//  landlords
//
//  Created by tian_su on 13-12-14.
//
//

#include "SocketClient.h"
#include "PublicMsgHandler.h"
#include "RequestPkg.h"
#include "ResponsePkg.h"
#include "PSAppUtils.h"

#define MAX_RECV_SIZE 51200

using namespace cocos2d;
using namespace std;

static int seq=0;

PublicMsgHandler * SocketClient::pMsgHandler = NULL;

int SocketClient::signel = 0;

int SocketClient::m_socket;
IPAdress_46 SocketClient::m_addrSrv;

SocketClient::SocketClient()
:_uid(0)
,mConnet(false)
{
#if defined(_WIN32) || defined(_WIN64)
#else
	pthead_rec = 0;
    pthead_send = 0;
#endif
}

SocketClient::~SocketClient()
{
    if (m_socket) {
#ifdef WIN32 || WIN64
		closesocket(m_socket);
#else
		close(m_socket);
#endif // WIN32 || WIN64
        m_socket = 0;
    }

	Director::getInstance()->getScheduler()->unschedule(
		schedule_selector(SocketClient::heartbeat), this);

    if (pMsgHandler) {
		pMsgHandler->unscheduleUpdate();
		pMsgHandler->release();
        pMsgHandler = NULL;
    }
}

void SocketClient::quest(int cmd, int subCmd, int desUid, const char * data, int datalen, int listener)
{
    packet *a = new packet;
    a->ver = _tmp.ver;
    a->seq = ntohs(seq++);
    a->cmd = ntohs(cmd);
    a->subCmd = ntohs(subCmd);
    a->srcUid = _tmp.srcUid;
    a->desUid = _ntohll(desUid);

    RequestPkg * netPkg = new RequestPkg(a, data, datalen, listener);
    pMsgHandler->addSend(netPkg);
    /*
    if (m_socket)
	{
		int ret = send(m_socket, (const char*)netPkg->data(), netPkg->length(), 0);
		if (ret != netPkg->length())
		{
			assert(0);
		}
	}
	else
	{
		//assert(0);
	}
     */
    //netPkg->release();
    delete a;
}

void SocketClient::heartbeat(float t)
{
    if (pMsgHandler->getRequestCount() > 0)
        return;
	// 在这里添加计时，超过5秒断开网络
	struct timeval tt;
	gettimeofday(&tt, NULL);
	long long now = tt.tv_sec;
	long long lastTime = pMsgHandler->getLastTime();
	//CCLog("-----heartbeat----now:%lld-lastTime:%lld",now,lastTime);
	if (now - lastTime >= 5)
	{
		PSAppUtils::getInstance()->socketStateChange(0);
	}else{
		PSAppUtils::getInstance()->socketStateChange(1);
	}
    quest(CMD_USER_HEARTBEAT, 0, 0, 0, NULL);
}

void SocketClient::socketError(int code) {
    if (m_socket != NULL)
    {
#ifdef WIN32 || WIN64
		closesocket(m_socket);
#else
		close(m_socket);
#endif // WIN32 || WIN64
        m_socket = 0;
    }
}

void SocketClient::Login(const char* _ip, int _port)
{
    CCLOG("Login");

    UserDefault * userDefault = UserDefault::getInstance();
    string ip = _ip;
    int port = _port;

	m_addrSrv.Init(_ip, _port);

	int ret = 0;
	if (m_addrSrv.IsIpV6())
	{
		m_socket = socket(AF_INET6, SOCK_STREAM, 0);

		ret = connect(m_socket,(sockaddr *)&m_addrSrv.addr6, sizeof(sockaddr_in6));
	}
	else
	{
		m_socket = socket(AF_INET, SOCK_STREAM, 0);

		ret = connect(m_socket,(sockaddr *)&m_addrSrv.addr, sizeof(sockaddr_in));
	}

	if (ret != 0)
	{
		socketError(CMD_SOCKET_C_ERROR);
		return;
	}
    signel = 0;

#if defined(_WIN32) || defined(_WIN64)
	UINT id;
	rh = (HANDLE)::_beginthreadex(NULL, 0, reciveData, NULL, 0, &id);
	if (!rh)
	{
		socketError(CMD_SOCKET_C_ERROR);
	}
	wh = (HANDLE)::_beginthreadex(NULL, 0, sendData, NULL, 0, &id);
	if (!wh)
	{
		socketError(CMD_SOCKET_C_ERROR);
	}
#else
    int ret1 = pthread_create(&pthead_send,NULL, sendData,this);
    int ret2 = pthread_create(&pthead_rec,NULL, reciveData,this);
    if (ret1 != 0  ||  ret2 != 0)
	{
		socketError(CMD_SOCKET_C_ERROR);
	}
#endif
}

void SocketClient::Logined()
{
    Director::getInstance()->getScheduler()->schedule(
                schedule_selector(SocketClient::heartbeat), this, 2, false);
}

void SocketClient::Logout()
{
    CCLOG("Logout");

	Director::getInstance()->getScheduler()->unschedule(
		schedule_selector(SocketClient::heartbeat), this);
}

void SocketClient::Logouted()
{
    CCLOG("Logouted");
    //signel = -1;
    setUid(0);

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
	if (pthead_rec != 0)
	{
		pthread_kill(pthead_rec, SIGUSR2);
		pthead_rec = 0;
	}
    if (pthead_send != 0)
    {
        pthread_kill(pthead_send, SIGUSR2);
        pthead_send = 0;
    }
#elif (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
	if (pthead_rec != 0)
	{
		pthread_cancel(pthead_rec);
		pthead_rec = 0;
	}
    if (pthead_send != 0)
    {
        pthread_cancel(pthead_send);
        pthead_send = 0;
    }
#else
	TerminateThread(rh, 0);
	TerminateThread(wh, 0);
#endif
    pMsgHandler->clean();

	socketError(0);
}

void SocketClient::init()
{
    _tmp.ver = ntohs(UPS_LL_VERSION);
	int xx = sizeof(PublicMsgHandler);
    pMsgHandler = new PublicMsgHandler();
	pMsgHandler->retain();
}

bool SocketClient::isConnect()
{
    return m_socket != NULL;
}

void SocketClient::setUid(unsigned long long uid)
{
    _uid = uid;
    _tmp.srcUid = _ntohll(_uid);
}

unsigned long long SocketClient::getUid()
{
    return _uid;
}

void handle_quit(int signo)
{
#ifdef WIN32 || WIN64
#else
	pthread_exit(0);
#endif // WIN32 || WIN64
}

threadfunc_t STDPREFIX SocketClient::reciveData(threadparam_t a_pszArg)
{
    #if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
        struct sigaction actions;
        memset(&actions, 0, sizeof(actions));
        sigemptyset(&actions.sa_mask);
        actions.sa_flags = 0;
        actions.sa_handler = handle_quit;
        sigaction(SIGUSR2,&actions,NULL);
    #endif

	char pcRecvBuf[MAX_RECV_SIZE];
	int iRecvLen = 0;

    while (signel == 0)
    {
        if (m_socket == NULL)
        {
#ifdef WIN32 || WIN64
			Sleep(1);
#else
			usleep(1000);
#endif
            continue;
        }

        int iBytesRec = 0;
        if (m_socket) iBytesRec = recv(m_socket, pcRecvBuf+iRecvLen, MAX_RECV_SIZE-iRecvLen, 0);
		if (iBytesRec <= 0)
		{
			socketError(CMD_SOCKET_CLOSE);
			break;
		}

		iRecvLen += iBytesRec;

		int iTempPos = 0;
        do
        {
			if (iRecvLen < sizeof(packet))
			{
				break;
			}
            packet a;
            memcpy(&a, pcRecvBuf, sizeof(packet));
            a.len = htonl(a.len);
            a.cmd = htons(a.cmd);

            if (a.len > MAX_RECV_SIZE)
            {
                CCLOG("Exceed the maximum length!!!!!!!");
                iRecvLen = 0;
                break;
            }
            if (a.len > iRecvLen) {
                break;
            }

            ResponsePkg * netPkg1 = new ResponsePkg(pcRecvBuf, a.len);
            pMsgHandler->addEvent(netPkg1);

			memmove(pcRecvBuf, pcRecvBuf+a.len, iRecvLen-a.len);
			iRecvLen -= a.len;
        }while (1);
    }
	CCLOG("退出线程 2");
    return NULL;
}

threadfunc_t STDPREFIX SocketClient::sendData(threadparam_t a_pszArg)
{
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    struct sigaction actions;
    memset(&actions, 0, sizeof(actions));
    sigemptyset(&actions.sa_mask);
    actions.sa_flags = 0;
    actions.sa_handler = handle_quit;
    sigaction(SIGUSR2,&actions,NULL);
#endif

    bool loop = true;
    while (loop) {
		if (pMsgHandler == NULL)
		{
			break;
		}
        RequestPkg * netPkg = pMsgHandler->getSend();
        if (netPkg == NULL)
        {
#ifdef WIN32 || WIN64
            Sleep(1);
#else
            usleep(1000);
#endif
            continue;
        }
        if (m_socket)
        {
            int ret = send(m_socket, (const char*)netPkg->data(), netPkg->length(), 0);
            //CCLog("--------netpkg length , %d",netPkg->length());
            if (ret <= 0)
            {
                //assert(0);
                socketError(CMD_SOCKET_CLOSE);
                break;
            }
            netPkg->release();
        }


    }
    return 0;
}

PublicMsgHandler* SocketClient::getMsgHandler()
{
	if (pMsgHandler)
	{
		return pMsgHandler;
	}
	return NULL;
}

