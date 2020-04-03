//
//  PublicMsgHandler.h
//  landlords
//
//  Created by tian_su on 13-12-31.
//
//

#ifndef __landlords__PublicMsgHandler__
#define __landlords__PublicMsgHandler__

#include "cocos2d.h"
#include "cocos-ext.h"
#include "PSSocket.h"

#include "pthreadcc/WrapMutex.h"

class RequestPkg;
class ResponsePkg;

class PublicMsgHandler:public cocos2d::Node
{
private:
	cocos2d::Vector<ResponsePkg*> _eventQuene;
	cocos2d::Vector<RequestPkg*> _sendQuene;
	long long m_lastTime; // 上次发包时间
public:
	PublicMsgHandler();
	~PublicMsgHandler();
	virtual void update(float fDelta);
	void addEvent(ResponsePkg * netPackage);
	
	void addSend(RequestPkg * netPackage);
	int getRequestCount();
	RequestPkg * getSend();
	void setLastTime(long long lastTime);
	long long getLastTime();
	void clean();
};

#endif /* defined(__landlords__PublicMsgHandler__) */
