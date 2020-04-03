//
//  SocketClient.cpp
//  
//
//  .
//
//

#include "UDPSocketClient.h"
#include "UDPMsgHandler.h"
#include "ResponsePkg.h"
#include "UdpResponsePkg.h"

using namespace cocos2d;
using namespace std;

static int seq=0;

UDPMsgHandler * UDPSocketClient::uMsgHandler = NULL;
int UDPSocketClient::m_socket = 0;
IPAdress_46 UDPSocketClient::m_addrSrv;

UDPSocketClient::UDPSocketClient():_uid(0)
{
#ifdef WIN32 || WIN64
#else
	pthead_rec = 0;
	pthead_send = 0;
#endif // WIN32 || WIN64
}

UDPSocketClient::~UDPSocketClient()
{
#ifdef WIN32 || WIN64
	closesocket(m_socket);
#else
	close(m_socket);
#endif // WIN32 || WIN64
}

bool UDPSocketClient::isConnect()
{
    return m_socket != 0;
}

int UDPSocketClient::setUDPInit()
{
    uMsgHandler->clean();
    if (m_socket != 0)
    {
#ifdef WIN32 || WIN64
		closesocket(m_socket);
#else
		close(m_socket);
#endif // WIN32 || WIN64
		m_socket = 0;
    }

	setUid(0);

	m_addrSrv.Init(m_ip, m_port);

	if (m_addrSrv.IsIpV6())
	{
		m_socket = socket(AF_INET6, SOCK_DGRAM, 0);
		sockaddr_in6 addrSrv;
		addrSrv.sin6_addr = in6addr_any;
		addrSrv.sin6_family=AF_INET6;
		addrSrv.sin6_port=0;
		//assert (connect(m_socket,(sockaddr *)&addrSrv, sizeof(sockaddr_in6)) != 0);
	}
	else
	{
		m_socket = socket(AF_INET, SOCK_DGRAM, 0);
		sockaddr_in addrSrv;
		addrSrv.sin_addr.s_addr=INADDR_ANY;
		addrSrv.sin_family=AF_INET;
		addrSrv.sin_port=0;
		//assert (connect(m_socket, (sockaddr *)&addrSrv, sizeof(sockaddr_in)) != 0);
	}


#if defined(_WIN32) || defined(_WIN64)
	UINT id;
	sh = (HANDLE)::_beginthreadex(NULL, 0, UDPSocketClient::sendData, NULL, 0, &id);
	rh = (HANDLE)::_beginthreadex(NULL, 0, UDPSocketClient::reciveData, NULL, 0, &id);
	if (!sh || !rh)
	{
		socketError(CMD_SOCKET_C_ERROR);
		return -1;
	}
#else
	int ret1 = pthread_create(&pthead_send,NULL, sendData,this);
	int ret2 = pthread_create(&pthead_rec,NULL, reciveData,this);
	if (ret1 != 0  ||  ret2 != 0)
	{
		socketError(CMD_SOCKET_C_ERROR);
		return -1;
	}
#endif
	return 0;
}


int UDPSocketClient::sendtoServer(int sock,RequestPkg *netPkg)
{
	int ret = 0;
	if (m_addrSrv.IsIpV6())
	{
		sendto(sock,(const char *)netPkg->data(),netPkg->length(),0,(sockaddr *)&m_addrSrv.addr6,sizeof(m_addrSrv.addr6));
	}
	else
	{
		sendto(sock, (const char *)netPkg->data(), netPkg->length(), 0, (sockaddr *)&m_addrSrv.addr, sizeof(m_addrSrv.addr));
	}

	return ret;

}

//void UDPSocketClient::quest(int cmd, int subCmd, int srcUid,int desUid, char * data, int len, char * ip, int port)
//{
//    packet a;
//    a.ver = _tmp.ver;
//    a.seq = ntohs(seq++);
//    a.cmd = ntohs(cmd);
//    a.subCmd = ntohs(subCmd);
//	a.srcUid = _ntohll(srcUid);
//    a.desUid = _ntohll(desUid);
//    
//    RequestPkg * netPkg = new RequestPkg(&a, data, len, 0);
//    uMsgHandler->addSend(netPkg);
//}

RequestPkg * UDPSocketClient::GetRequestPkg(int cmd, int subCmd, int srcUid,int desUid, const char * data, int len, const char * ip, int port)
{
	packet a;
	a.ver = _tmp.ver;
	a.seq = ntohs(seq++);
	a.cmd = ntohs(cmd);
	a.subCmd = ntohs(subCmd);
	a.srcUid = _ntohll(srcUid);
	a.desUid = _ntohll(desUid);

	RequestPkg * netPkg = new RequestPkg(&a, data, len, 0);
	return netPkg;
}

void UDPSocketClient::SendRequestPkg(int cmd, int subCmd, int srcUid,int desUid, const char * data, int len, const char * ip, int port)
{
	RequestPkg *pkg = GetRequestPkg(cmd, subCmd, srcUid, desUid, data, len, ip, port);
	uMsgHandler->addSend(pkg);
}

void UDPSocketClient::sendBuf_Direct(char *buff, int len)
{
	RequestPkg *netPkg = new RequestPkg(buff, len);
	uMsgHandler->addSend(netPkg);
}

void UDPSocketClient::heartbeat(float t)
{
}

void UDPSocketClient::Logined()
{
}

void UDPSocketClient::Logout()
{
}

void UDPSocketClient::Logouted()
{
	setUid(0);
#ifdef WIN32 || WIN64
	closesocket(m_socket);
#else
	close(m_socket);
#endif // WIN32 || WIN64
	m_socket = 0;

#if defined(_WIN32) || defined(_WIN64)
	CloseHandle(rh);rh=0;
	CloseHandle(sh);sh=0;
#elif (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
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
#endif
}

void UDPSocketClient::init(const char *ip, unsigned short port)
{
	strcpy(m_ip, ip);
	m_port = port;
    _tmp.ver = ntohs(UPS_LL_VERSION);
    uMsgHandler = new UDPMsgHandler();

}

void UDPSocketClient::setUid(unsigned long long uid)
{
    _uid = uid;
    _tmp.srcUid = _ntohll(_uid);
}

unsigned long long UDPSocketClient::getUid()
{
	return _uid;
}

void UDPSocketClient::socketError(int code) {
    /*packet a;
    a.cmd = code;
    ResponsePkg * netPkg1 = new ResponsePkg(a, NULL, 0);
    uMsgHandler->addEvent(netPkg1);*/
}

void handle_quit2(int signo)
{
#ifdef WIN32 || WIN64
#else
	pthread_exit(0);
#endif // WIN32 || WIN64
}

threadfunc_t STDPREFIX UDPSocketClient::reciveData(threadparam_t a_pszArg)
{
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
	struct sigaction actions;
	memset(&actions, 0, sizeof(actions)); 
	sigemptyset(&actions.sa_mask);
	actions.sa_flags = 0; 
	actions.sa_handler = handle_quit2;
	sigaction(SIGUSR2,&actions,NULL);
#endif

	bool loop = true;
    while (loop)
    {
		//udp不需要分包，所以接收比较简单
        int tag = 0;
        static char *pcRecvBuf = new char[PS_MAX_RECV_SIZE];
		int iBytesRec;
		if (m_addrSrv.IsIpV6())
		{
			socklen_t sinlen = sizeof(m_addrSrv.addr6);
			iBytesRec = recvfrom(m_socket, pcRecvBuf, PS_MAX_RECV_SIZE, 0,(struct sockaddr*)&m_addrSrv.addr6,&sinlen);
		}
		else
		{
			socklen_t sinlen = sizeof(m_addrSrv.addr);
			iBytesRec = recvfrom(m_socket, pcRecvBuf, PS_MAX_RECV_SIZE, 0,(struct sockaddr*)&(m_addrSrv.addr),&sinlen);
		}
		if (iBytesRec <= 0)
		{
			/*packet a;
			a.cmd = CMD_SOCKET_R_ERROR_OTH;
			ResponsePkg * netPkg1 = new ResponsePkg(a, NULL, 0);
			uMsgHandler->addEvent(netPkg1);*/
			break;
		}
            
		UdpResponsePkg *pkg = new UdpResponsePkg(pcRecvBuf, iBytesRec);
		uMsgHandler->addEvent(pkg);
    }
#ifdef WIN32 || WIN64
	closesocket(m_socket);
#else
	close(m_socket);
#endif // WIN32 || WIN64
	m_socket = 0;
	return 0;
}

threadfunc_t STDPREFIX UDPSocketClient::sendData(threadparam_t a_pszArg)
{
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
	struct sigaction actions;
	memset(&actions, 0, sizeof(actions)); 
	sigemptyset(&actions.sa_mask);
	actions.sa_flags = 0; 
	actions.sa_handler = handle_quit2;
	sigaction(SIGUSR2,&actions,NULL);
#endif

	bool loop = true;
	while (loop) {
		RequestPkg * netPkg = uMsgHandler->getSend();
        if (netPkg == NULL)
        {
#ifdef WIN32 || WIN64
			Sleep(1);
#else
			usleep(1000);
#endif
            continue;
        }
		//send(m_socket, (const char *)netPkg->data(), netPkg->length(), 0);
		//cout<<"sendto"<<endl;
		//CCLOG("C++ --------------------------------------------- sendtoServer");

		sendtoServer(m_socket,netPkg);
		
        netPkg->release();
    }
	return 0;
}

