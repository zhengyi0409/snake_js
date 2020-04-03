//
//  PublicMsgHandler.cpp
//  landlords
//
//  Created by tian_su on 13-12-31.
//
//

#include "PublicMsgHandler.h"
#include "RequestPkg.h"
#include "ResponsePkg.h"
#include "PSAppUtils.h"
using namespace std;

class PublicMsgHandlerMutex
{
public:
	PublicMsgHandlerMutex()
	{
		WrapMutex::init(wrapMutexKey4PublicSendMsg);
		WrapMutex::init(wrapMutexKey4PublicRecvMsg);
	}
};
PublicMsgHandlerMutex g_PublicMsgHandlerMutex;

PublicMsgHandler::PublicMsgHandler()
:_eventQuene(NULL),_sendQuene(NULL),m_lastTime(0)
{
    /*_eventQuene = CCArray::createWithCapacity(100);
    _eventQuene->retain();
    _sendQuene = CCArray::createWithCapacity(10);
    _sendQuene->retain();*/
    this->onEnter();
    this->onEnterTransitionDidFinish();
    this->scheduleUpdate();
}

PublicMsgHandler::~PublicMsgHandler()
{
    //this->unscheduleUpdate();
    /*delete _eventQuene; _eventQuene = NULL;
	delete _sendQuene; _sendQuene = NULL;*/
	_eventQuene.clear();
	_sendQuene.clear();
}

void PublicMsgHandler::update(float fDelta)
{
    if (_eventQuene.size()>0) {
        int _queneCount = 1;
		int cur = _eventQuene.size();
        if(cur > 1000){
            _queneCount = 100;
        }else if(cur > 400){
            _queneCount = 40;
        }else if(cur > 200){
            _queneCount = 20;
        }else if (cur > 50){
            _queneCount = 10;
        }else if (cur > 5){
            _queneCount = 3;
        }
        for(int i=0;i<_queneCount;i++){
			ResponsePkg * package = NULL;
			if (_eventQuene.size()>0)
			{
				WrapMutex temp(wrapMutexKey4PublicRecvMsg);
				package=_eventQuene.at(0);
				_eventQuene.erase(0);
			}
            if(package){
                packet * pkg = package->pkg();
                PSAppUtils::getInstance()->socketResponse(pkg->cmd, pkg->subCmd, pkg->srcUid, (const char*)package->data(),package->length());
                package->release();
            }
            
        }
    }
    
}

void PublicMsgHandler::addEvent(ResponsePkg * netPackage)
{
    WrapMutex temp(wrapMutexKey4PublicRecvMsg);
	_eventQuene.pushBack(netPackage);
}

void PublicMsgHandler::addSend(RequestPkg * netPackage)
{
	WrapMutex temp(wrapMutexKey4PublicSendMsg);
	_sendQuene.pushBack(netPackage);
}


int PublicMsgHandler::getRequestCount()
{
    /*if (_sendQuene) {
        return _sendQuene->count();
    }
    return 0;*/
	return _sendQuene.size();
}

RequestPkg * PublicMsgHandler::getSend()
{
	RequestPkg * package = NULL;

	{
	    WrapMutex temp(wrapMutexKey4PublicSendMsg);
    
		int cnt = _sendQuene.size();
	    if (cnt > 0)
	    {
	        package=_sendQuene.at(0);
			_sendQuene.erase(0);
	    }
	}
    return package;
}

void PublicMsgHandler::setLastTime(long long lastTime)
{
	m_lastTime = lastTime;
}

long long PublicMsgHandler::getLastTime()
{
	return m_lastTime;
}

void PublicMsgHandler::clean()
{
	WrapMutex temp(wrapMutexKey4PublicSendMsg);
	WrapMutex temp2(wrapMutexKey4PublicRecvMsg);

    _eventQuene.clear();
    _sendQuene.clear();
	m_lastTime = 0;
}

