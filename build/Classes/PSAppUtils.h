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
#ifndef __PS_APPUTILS_H__
#define __PS_APPUTILS_H__

#include <functional>
#include "cocos2d.h"

class SocketClient;
class UDPSocketClient;

class PSAppUtils
{
public:

    /**
     *  Gets the instance of CCFileUtils.
     */
	static PSAppUtils* getInstance();

	/**
	*  Destroys the instance of CCFileUtils.
	*/
	static void purgeAppUtils();

    /**
     *  The destructor of CCFileUtils.
     */
    virtual ~PSAppUtils();

    void socketRequest(int cmd, int subCmd, int srcUid, int desUid, const char * data, int len, const char * ip, int port);
	void socketRequestPB(int cmd, int subCmd, int srcUid, int desUid, cocos2d::Data data);
	void socketRequestPB2(int cmd, int subCmd, int srcUid, int desUid, cocos2d::Data data, const char * ip, int port);
    void socketResponse(int cmd, int subCmd, int srcUid, const char * data, int datalen);

	void udpSocketRequest(int cmd, int subCmd, int srcUid, int desUid, const char * data, int datalen, const char * ip, int port);
	void udpSocketRequestPB(int cmd, int subCmd, int srcUid, int desUid, cocos2d::Data data);
	void udpSocketResponse(int cmd, int subCmd, int srcUid, const char * data, int datalen);
    void udpReset();

	double getCurrentTime();
	bool isSocketConnect();
	void resetSocketLastTime();

    void netStateChange(int state);
    void socketStateChange(int state);

	void setSocketResponseCb(const std::function<void(int, int, int, cocos2d::Data)>& cb);
	void setUdpSocketResponseCb(const std::function<void(int, int, int, cocos2d::Data)>& cb);

protected:
    /**
     *  The default constructor.
     */
    PSAppUtils();

    /**
     *  Initializes the instance of CCFileUtils. It will set m_searchPathArray and m_searchResolutionsOrderArray to default values.
     *
     *  @note When you are porting Cocos2d-x to a new platform, you may need to take care of this method.
     *        You could assign a default value to m_strDefaultResRootPath in the subclass of CCFileUtils(e.g. CCFileUtilsAndroid). Then invoke the CCFileUtils::init().
     *  @return true if successed, otherwise it returns false.
     *
     */
    virtual bool init();

    /**
     *  The singleton pointer of PSAppUtils.
     */
    static PSAppUtils* s_sharedAppUtils;

    int relogin;
    int loginTimes;

    SocketClient * sockerClient;
	UDPSocketClient * udpsocket;

	std::function<void(int, int, int, cocos2d::Data)> socketCb;
	std::function<void(int, int, int, cocos2d::Data)> udpSocketCb;
};

#endif    // __CC_FILEUTILS_H__
