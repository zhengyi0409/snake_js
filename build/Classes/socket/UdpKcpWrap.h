#pragma once
#include "ikcp.h"
#include "UDPSocketClient.h"
#include "cocos2d.h"

class CUdpKcpWrap : public cocos2d::Node
{
public:
	CUdpKcpWrap(void);
	~CUdpKcpWrap(void);

	static CUdpKcpWrap *instance();
public:
	void init(IUINT32 sessionid, int usrid, UDPSocketClient *udpHandle);
	void close();
	void quest(int cmd, int subCmd, int srcUid,int desUid, const char * data, int len, const char * ip, int port);
	void update(float dt);
	
	static int sendbuff(const char *buf, int len, IKCPCB *kcp, void *user);

private:
	ikcpcb * m_kcpHandle;
	UDPSocketClient *m_udpHandle;

	bool m_bScheduling;

public:
	int m_iCurConv;
	bool m_bIsUseKcp;
};

