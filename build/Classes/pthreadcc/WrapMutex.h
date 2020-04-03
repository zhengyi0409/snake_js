#ifndef __WRAP_MUTEX__
#define __WRAP_MUTEX__

static const int wrapMutexKey4PublicSendMsg = 1;
static const int wrapMutexKey4PublicRecvMsg = 2;
static const int wrapMutexKey4UdpSendMsg = 3;
static const int wrapMutexKey4UdpRecvMsg = 4;

static const int wrapMutexKey4TSockHandler = 5;
static const int wrapMutexKey4NetWorkMgr = 6;
static const int wrapMutexKey4AndroidMsdk = 7;
static const int wrapMutexKey4VersionUpdate = 8;
static const int wrapMutexKey4EventManage = 9;
static const int wrapMutexKey4IpCheckThread = 10;//¼ì²âipÊÇ·ñ¿É´ïµÄ¶àÏß³ÌËø
static const int wrapMutexKey4Tdl = 11;

class WrapMutex
{
public:

	WrapMutex();
	WrapMutex(int key);
	~WrapMutex();

	static bool init(int key);

private:

	int wrapKey;

};

#endif
