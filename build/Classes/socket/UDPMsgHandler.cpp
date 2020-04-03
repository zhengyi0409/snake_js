//
//  UDPMsgHandler.cpp
//  landlords
//
//  Created by tian_su on 13-12-31.
//
//

#include "UDPMsgHandler.h"
#include "RequestPkg.h"
#include "UdpResponsePkg.h"
using namespace std;
#include "pthreadcc/WrapMutex.h"

class UDPMsgHandlerMutex
{
public:
	UDPMsgHandlerMutex()
	{
		WrapMutex::init(wrapMutexKey4UdpSendMsg);
		WrapMutex::init(wrapMutexKey4UdpRecvMsg);
	}
};
UDPMsgHandlerMutex g_UDPMsgHandlerMutex;

UDPMsgHandler::UDPMsgHandler()
:_eventQuene(NULL),_sendQuene(NULL)
{
    /*_eventQuene = CCArray::createWithCapacity(100);
    _eventQuene->retain();
    _sendQuene = CCArray::createWithCapacity(100);
    _sendQuene->retain();*/
	//m_pScheduler->scheduleUpdateForTarget(this, -1, !m_bRunning);//优先级比逻辑快一点，可以加快一点表现
}

UDPMsgHandler::~UDPMsgHandler()
{
    //this->unscheduleUpdate();
    /*delete _eventQuene; _eventQuene = NULL;
    delete _sendQuene; _sendQuene = NULL;*/
	_eventQuene.clear();
	_sendQuene.clear();
}

void UDPMsgHandler::addEvent(UdpResponsePkg * netPackage)
{
	WrapMutex temp(wrapMutexKey4UdpRecvMsg);
	_eventQuene.pushBack(netPackage);
}

int UDPMsgHandler::getResponseCount()
{
	return _eventQuene.size();
}

UdpResponsePkg * UDPMsgHandler::getRecv()
{
	if (_eventQuene.size() <= 0)
	{
		return NULL;
	}
	WrapMutex temp(wrapMutexKey4UdpRecvMsg);

	UdpResponsePkg * package= _eventQuene.at(0);
	_eventQuene.erase(0);
	return package;
}

void UDPMsgHandler::addSend(RequestPkg * netPackage)
{
	WrapMutex temp(wrapMutexKey4UdpSendMsg);
    _sendQuene.pushBack(netPackage);
}


int UDPMsgHandler::getRequestCount()
{
    /*if (_sendQuene) {
        return _sendQuene->count();
    }
	return 0;*/
	return _sendQuene.size();
}

RequestPkg * UDPMsgHandler::getSend()
{
    WrapMutex temp(wrapMutexKey4UdpSendMsg);
    
    RequestPkg * package = NULL;
    int cnt = _sendQuene.size();
    if (cnt > 0)
    {
        package=_sendQuene.at(0);
        _sendQuene.erase(0);
    }
    return package;
}

void UDPMsgHandler::clean()
{
	WrapMutex temp(wrapMutexKey4UdpSendMsg);
	WrapMutex temp2(wrapMutexKey4UdpRecvMsg);

    _eventQuene.clear();
    _sendQuene.clear();
}
