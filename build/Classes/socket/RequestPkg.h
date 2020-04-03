//
//  NetPackage.h
//  landlords
//
//  Created by tian_su on 13-12-31.
//
//

#ifndef __landlords__NetPackage__
#define __landlords__NetPackage__

#include "cocos2d.h"
#include "cocos-ext.h"
#include "PSSocket.h"

class RequestPkg:public cocos2d::Ref
{
    void * _data;
    int _len;
    int _tag;
    int _cmd;
	std::string _ip;
	int _port;
public:
	//无包头，或者包头已经在data中了
	RequestPkg(const char * data, int len);

	RequestPkg(packet * pkg, const char * data, int len, int tag);
	~RequestPkg();
    
    inline void * data(){return _data;};
    inline int length(){return _len;};
    inline int tag(){return _tag;};
    inline int cmd(){return _cmd;};
    inline std::string ip(){return _ip;};
	inline int port(){return _port;};
};

#endif /* defined(__landlords__NetPackage__) */
