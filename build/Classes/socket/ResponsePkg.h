//
//  Response.h
//  landlords
//
//  Created by tian_su on 14-1-10.
//
//

#ifndef __landlords__Response__
#define __landlords__Response__

#include "cocos2d.h"
#include "cocos-ext.h"
#include "PSSocket.h"

class ResponsePkg:public cocos2d::Ref
{
    packet _pkg;
    void * _data;
    int _len;
    int _tag;
public:
    ResponsePkg(void * data, int len, int tag=0);
	ResponsePkg(void * data, int len, int tag,int flag,int tt);
	ResponsePkg(const packet &pkg, void * data, int len, int tag=0);
    ~ResponsePkg();
    
    inline packet * pkg(){return &_pkg;};
    inline void * data(){return _data;};
    inline int length(){return _len;};
    inline int tag(){return _tag;};
};

#endif /* defined(__landlords__Response__) */
