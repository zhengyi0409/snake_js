/****************************************************************************
Copyright (c) 2010-2013 cocos2d-x.org

http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/

#include "PSAppUtils.h"
#include <stdlib.h>
#include <stdio.h>
#include <iostream>

#include "socket/SocketClient.h"
#include "socket/UDPSocketClient.h"
#include "socket/PublicMsgHandler.h"
#include "socket/UdpKcpWrap.h"

#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"

//#include "../cocos2d-x/cocos/base/base64.h"

using namespace cocos2d;
using namespace std;
using namespace se;

PSAppUtils* PSAppUtils::s_sharedAppUtils = NULL;

PSAppUtils* PSAppUtils::getInstance()
{
	if (s_sharedAppUtils == NULL)
	{
		s_sharedAppUtils = new PSAppUtils();
		s_sharedAppUtils->init();
	}
	return s_sharedAppUtils;
}

void PSAppUtils::purgeAppUtils()
{
    CC_SAFE_DELETE(s_sharedAppUtils);
}

PSAppUtils::PSAppUtils()
:sockerClient(NULL)
,udpsocket(NULL)
{
}

PSAppUtils::~PSAppUtils()
{
	if (sockerClient) {
		delete sockerClient;
		sockerClient = NULL;
	}
	if (udpsocket){
		delete udpsocket;
		udpsocket = NULL;
	}

}

bool PSAppUtils::init()
{
	string path = UserDefault::getInstance()->getXMLFilePath();
	//CCLOG("PSAppUtils::init------------------------------------ path -> %s", path.c_str());
    UserDefault * userDefault = UserDefault::getInstance();
    loginTimes = userDefault->getIntegerForKey("loginTimes", 0);
    userDefault->setIntegerForKey("loginTimes", loginTimes+1);
    return true;
}

void PSAppUtils::socketRequest(int cmd, int subCmd, int srcUid, int desUid, const char * data, int len, const char * ip, int port)
{
	//CCLOG("PSAppUtils::socketRequest--cmd -> %x subCmd -> %d  time -> %f", cmd, subCmd, this->getCurrentTime());
    switch (cmd)
    {

        case CMD_USER_LOGIN:
            if(sockerClient){
                sockerClient->Logouted();
				delete sockerClient;
                sockerClient = NULL;
            }
            if (NULL == sockerClient)
            {
                sockerClient = new SocketClient();
                sockerClient->init();
                sockerClient->Login(ip, port);
            }

            break;
        case CMD_SOCKET_CLOSE:
            if (sockerClient)
            {
                sockerClient->Logouted();
				delete sockerClient;
				sockerClient = NULL;
            }
            return;
            break;
		case CMD_SOCKET_SETUID:
            if (sockerClient)
            {
				//sockerClient->setUid(srcUid);
            }
            return;
			break;
		case CMD_USER_HEARTBEAT:
			desUid = 0x8;
			break;
        default:
			sockerClient->setUid(srcUid);
            break;
    }
    if (sockerClient)
    {
        sockerClient->quest(cmd, subCmd, desUid, data, len);
    }
	
}

void PSAppUtils::socketRequestPB(int cmd, int subCmd, int srcUid, int desUid, cocos2d::Data data)
{
	//CCLOG("PSAppUtils::socketRequest--cmd -> %x subCmd -> %d  time -> %f", cmd, subCmd, this->getCurrentTime());
	switch (cmd)
	{
	case CMD_SOCKET_CLOSE:
		if (sockerClient)
		{
			sockerClient->Logouted();
			delete sockerClient;
			sockerClient = NULL;
		}
		return;
		break;
	case CMD_SOCKET_SETUID:
		if (sockerClient)
		{
			//sockerClient->setUid(srcUid);
		}
		return;
		break;
	case CMD_USER_HEARTBEAT:
		desUid = 0x8;
		break;
	default:
		sockerClient->setUid(srcUid);
		break;
	}
	if (sockerClient)
	{
		auto buff = data.getBytes();
		sockerClient->quest(cmd, subCmd, desUid, (const char*)buff, data.getSize());
	}
}

void PSAppUtils::socketRequestPB2(int cmd, int subCmd, int srcUid, int desUid, cocos2d::Data data, const char * ip, int port)
{
	//CCLOG("PSAppUtils::socketRequest--cmd -> %x subCmd -> %d  time -> %f", cmd, subCmd, this->getCurrentTime());
	switch (cmd)
	{

	case CMD_PLF_LOGIN_REQ:
		if (sockerClient) {
			sockerClient->Logouted();
			delete sockerClient;
			sockerClient = NULL;
		}
		if (NULL == sockerClient)
		{
			sockerClient = new SocketClient();
			sockerClient->init();
			sockerClient->Login(ip, port);
		}

		break;
	case CMD_PLF_LOGOUT_REQ:
		if (sockerClient)
		{
			sockerClient->Logouted();
			delete sockerClient;
			sockerClient = NULL;
		}
		return;
		break;
	case CMD_SOCKET_SETUID:
		if (sockerClient)
		{
			//sockerClient->setUid(srcUid);
		}
		return;
		break;
	case CMD_PLF_HEARTBEST_REQ:
		desUid = 0x8;
		break;

	default:
		sockerClient->setUid(srcUid);
		break;
	}
	if (sockerClient)
	{
		auto buff = data.getBytes();
		sockerClient->quest(cmd, subCmd, desUid, (const char*)buff, data.getSize());
	}
}

void PSAppUtils::socketResponse(int cmd, int subCmd, int srcUid, const char * data, int datalen)
{
	//CCLOG("PSAppUtils::socketResponse--cmd -> %x subCmd -> %d time -> %f", cmd, subCmd, this->getCurrentTime());
    switch (cmd) {
        case CMD_USER_LOGIN_ACK:
            if (sockerClient)
            {
                sockerClient->Logined();
				resetSocketLastTime();
            }
            relogin = 0;
            break;
        case CMD_USER_LOGOUT_ACK:
            relogin = 1;
            break;
        case CMD_USER_HEARTBEAT_ACK:
			{
				resetSocketLastTime();
			}
            break;
        case CMD_SOCKET_CLOSE:
            if (sockerClient)
            {
                sockerClient->Logouted();
				delete sockerClient;
                sockerClient = NULL;
            }
            return;
            break;
        default:
            break;
    }

	if (socketCb) {
		auto buff = cocos2d::Data();
		buff.copy((unsigned char*)data, datalen);
		socketCb(cmd, subCmd, srcUid, buff);
	}
}

void PSAppUtils::udpReset()
{
    if(udpsocket!=NULL){
        udpsocket->Logouted();
        udpsocket = NULL;
    }
}

void PSAppUtils::udpSocketRequest(int cmd, int subCmd, int srcUid, int desUid, const char * data, int datalen, const char * ip, int port)
{
    //CCLOG("C++ --------------------------------------------- udpSocketRequest cmd -> %x", cmd);
    switch (cmd)
    {
        case CMD_SYNC_REG:
            if (NULL == udpsocket)
            {
                udpsocket = new UDPSocketClient();
                udpsocket->init(ip, port);
				udpsocket->setUDPInit();
                udpsocket->setUid(srcUid);
            }
			CUdpKcpWrap::instance()->init(0x11223344, 1, udpsocket);
            break;
		case CMD_SOCCER_REG_REQ:
			if (NULL == udpsocket)
			{
				CCLOG("C++ --------------------------------------------- new udpsocket cmd -> %x", cmd);
				udpsocket = new UDPSocketClient();
				udpsocket->init(ip, port);
				udpsocket->setUDPInit();
				udpsocket->setUid(srcUid);
			}

			CCLOG("C++ --------------------------------------------- udpsocket init cmd -> %x", cmd);
			CUdpKcpWrap::instance()->init(0x11223344, 1, udpsocket);
			break;
        case CMD_USER_LOGOUT:
            data = NULL;
            break;
        case CMD_ROOM_LOGIN:
			udpsocket->setUid(srcUid);
            break;
        case CMD_SOCKET_CLOSE:
            if (udpsocket)
            {
                udpsocket->Logouted();

            }
			CUdpKcpWrap::instance()->close();
            return;
            break;
		case CMD_SOCKET_SETUID:
            if (sockerClient)
            {
				udpsocket->setUid(srcUid);
            }
            return;
			break;
        default:
            break;
    }
    if (udpsocket  &&  datalen > 0)
    {
		CCLOG("C++ --------------------------------------------- udpsocket quest cmd -> %x ip -> %s port -> %d", cmd,ip,port);
		CUdpKcpWrap::instance()->quest(cmd, subCmd, srcUid,desUid, data, datalen, ip, port);
    }
}

void PSAppUtils::udpSocketRequestPB(int cmd, int subCmd, int srcUid, int desUid, cocos2d::Data data)
{
	//CCLOG("udp cmd -> %x", cmd);
	switch (cmd)
	{
	case CMD_ROOM_LOGIN:
		udpsocket->setUid(srcUid);
		break;
	case CMD_SOCKET_CLOSE:
		if (udpsocket)
		{
			udpsocket->Logouted();

		}
		CUdpKcpWrap::instance()->close();
		return;
		break;
	case CMD_SOCKET_SETUID:
		if (sockerClient)
		{
			udpsocket->setUid(srcUid);
		}
		return;
		break;
	default:
		break;
	}
	if (udpsocket)
	{
		CUdpKcpWrap::instance()->quest(cmd, subCmd, srcUid, desUid, (const char*)data.getBytes(), data.getSize(), 0, 0);
	}
}

void PSAppUtils::udpSocketResponse(int cmd, int subCmd, int srcUid, const char * data, int datalen)
{
	CCLOG("PSAppUtils::udpSocketResponse--cmd -> %x  time -> %f", cmd, this->getCurrentTime());
    switch (cmd) {
        case CMD_USER_LOGIN_ACK:
            if (udpsocket)
            {
                udpsocket->Logined();
            }
            break;
        case CMD_USER_LOGOUT_ACK:
            break;
        case CMD_USER_HEARTBEAT_ACK:
            return;
            break;
        case CMD_SOCKET_CLOSE:
            if (udpsocket)
            {
                udpsocket->Logouted();
                udpsocket = NULL;
            }
            return;
            break;

        default:
            break;
    }

	if (cmd == CMD_SOCCER_REG_REP) {
		if (udpSocketCb) {
			data = "cmd_soccer_reg_req";
			auto buff = cocos2d::Data();
			buff.copy((unsigned char*)data,50);
			udpSocketCb(cmd, subCmd, srcUid, buff);
		}
	}
	else {
		if (udpSocketCb) {
			auto buff = cocos2d::Data();
			buff.copy((unsigned char*)data, datalen);
			udpSocketCb(cmd, subCmd, srcUid, buff);
		}
	}
}

double PSAppUtils::getCurrentTime()
{

	struct timeval tv;
	gettimeofday(&tv,NULL);
	int millisecond =  tv.tv_usec;
	return millisecond;
}

bool PSAppUtils::isSocketConnect()
{
    if(sockerClient == NULL) return false;
    return sockerClient->isConnect();
}

//¼ì²âÍøÂç¸Ä±ä
void PSAppUtils::netStateChange(int state)
{
    //CCLOG("----netStateChange----");
	string jsCallStr = StringUtils::format("netStateChange(%d);", state);
	AutoHandleScope hs;
	ScriptEngine::getInstance()->evalString(jsCallStr.c_str());
}

void PSAppUtils::socketStateChange(int state)
{
	//CCLOG("----socketStateChange----");
	string jsCallStr = StringUtils::format("socketStateChange(%d);", state);
	AutoHandleScope hs;
	ScriptEngine::getInstance()->evalString(jsCallStr.c_str());
}

void PSAppUtils::resetSocketLastTime()
{
	if (sockerClient)
	{
		struct timeval tv;
		gettimeofday(&tv, NULL);
		long long nowSecond = tv.tv_sec;
		if (sockerClient->getMsgHandler())
		{
			sockerClient->getMsgHandler()->setLastTime(nowSecond);
		}
	}
}

void PSAppUtils::setSocketResponseCb(const std::function<void(int, int, int, cocos2d::Data)>& cb)
{
	socketCb = cb;
}

void PSAppUtils::setUdpSocketResponseCb(const std::function<void(int, int, int, cocos2d::Data)>& cb)
{
	udpSocketCb = cb;
}