//
//  SocketClient.h
//  landlords
//
//  Created by tian_su on 13-12-14.
//
//

#ifndef landlords_UDPSocketClient_h
#define landlords_UDPSocketClient_h

#include "ipv6.h"

#include "ExtensionMacros.h"
#include "PSSocket.h"
#include "RequestPkg.h"

using namespace std;

class UDPMsgHandler;

class UDPSocketClient : public cocos2d::Ref  {
public:
    static UDPMsgHandler * uMsgHandler;
private:
    unsigned long long _uid;
    
    packet _tmp;

	unsigned short m_port;
	char m_ip[1024];
	static int m_socket;
	static IPAdress_46 m_addrSrv;

#if defined(_WIN32) || defined(_WIN64)
	HANDLE sh;
	HANDLE rh;
#else
	pthread_t pthead_send;
	pthread_t pthead_rec;
#endif
	//static SOCKADDR_IN addrSrv;
public:
    UDPSocketClient();
    ~UDPSocketClient();
    
    void init(const char *ip, unsigned short port);
    void setUid(unsigned long long uid);
	unsigned long long getUid();
	static threadfunc_t STDPREFIX reciveData(threadparam_t a_pszArg);
	static threadfunc_t STDPREFIX sendData(threadparam_t a_pszArg);
	static int sendtoServer(int sock, RequestPkg *netPkg);
    static void socketError(int code);
    void heartbeat(float t);
    //void quest(int cmd, int subCmd, int srcUid,int desUid, char * data, int len, char * ip, int port);

	RequestPkg * GetRequestPkg(int cmd, int subCmd, int srcUid,int desUid, const char * data, int len, const char * ip, int port);
	void SendRequestPkg(int cmd, int subCmd, int srcUid,int desUid, const char * data, int len, const char * ip, int port);

	//直接发送buff，不考虑包头的问题。提供给kcp用，避免重发包的时候，信息变化
	void sendBuf_Direct(char *buff, int len);

    void Logined();
    void Logouted();
    int setUDPInit();
	void Logout();
    bool isConnect();
    bool mConnet;
};

#endif
