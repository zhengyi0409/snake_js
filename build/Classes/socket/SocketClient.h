//
//  SocketClient.h
//  landlords
//
//  Created by tian_su on 13-12-14.
//
//

#ifndef landlords_SocketClient_h
#define landlords_SocketClient_h

#include "ipv6.h"

#include "ExtensionMacros.h"
#include "PSSocket.h"

using namespace std;

class PublicMsgHandler;

class SocketClient : public cocos2d::Ref {
    
    static int m_socket;
    static IPAdress_46 m_addrSrv;

#if defined(_WIN32) || defined(_WIN64)
	HANDLE rh;
	HANDLE wh;
#else
	pthread_t pthead_rec;
    pthread_t pthead_send;
#endif

    static PublicMsgHandler * pMsgHandler;
    
    unsigned long long _uid;
    
    packet _tmp;
    
    static int signel;
public:
    SocketClient();
    ~SocketClient();
    
    void init();
    void setUid(unsigned long long uid);
    unsigned long long getUid();
	static threadfunc_t STDPREFIX reciveData(threadparam_t a_pszArg);
    static threadfunc_t STDPREFIX sendData(threadparam_t a_pszArg);
    static void socketError(int code);
    void heartbeat(float t);
    void quest(int cmd, int subCmd, int desUid, const char * data, int datalen, int listener=0);
    void Logined();
    void Logouted();
    void Login(const char *_ip, int _port);
    void Logout();
    bool isConnect();
    
    bool mConnet;

	PublicMsgHandler* getMsgHandler();
};

#endif
