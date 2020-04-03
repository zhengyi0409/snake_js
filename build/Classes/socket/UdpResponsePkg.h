//
//  Response.h
//  landlords
//
//  Created by tian_su on 14-1-10.
//
//

#pragma once

#include "cocos2d.h"
#include "cocos-ext.h"

class UdpResponsePkg:public cocos2d::Ref
{
    const char * _data;
    int _len;
public:
    UdpResponsePkg(const char * data, int len);
	~UdpResponsePkg();
    
    inline const char * data(){return _data;};
    inline int length(){return _len;};
};
