//
//  UDPMsgHandler.h
//  landlords
//
//  Created by tian_su on 13-12-31.
//
//

#ifndef __landlords__UDPMsgHandler__
#define __landlords__UDPMsgHandler__

#include "cocos2d.h"
#include "cocos-ext.h"

class UdpResponsePkg;

class RequestPkg;

class UDPMsgHandler:public cocos2d::Ref
{
private:
	cocos2d::Vector<UdpResponsePkg*> _eventQuene;
	cocos2d::Vector<RequestPkg*> _sendQuene;
   
public:
    UDPMsgHandler();
    ~UDPMsgHandler();
    void addEvent(UdpResponsePkg * netPackage);
	int getResponseCount();
	UdpResponsePkg * getRecv();
    
    void addSend(RequestPkg * netPackage);
    int getRequestCount();
    RequestPkg * getSend();
    
    void clean();
};

#endif /* defined(__landlords__UDPMsgHandler__) */
