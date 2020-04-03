//
//  RequestPkg.cpp
//  landlords
//
//  Created by tian_su on 13-12-31.
//
//

#include "RequestPkg.h"
#include "PSSocket.h"
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
#include <arpa/inet.h>
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include <netinet/in.h>
#endif
//#include "aes.h"

using namespace std;

RequestPkg::RequestPkg(const char * data, int len)
{
	_data = malloc(len);
	_len = 	len;
	memcpy(_data, data, len);
}

RequestPkg::RequestPkg(packet * pkg, const char * data, int len, int tag)
	:_data(NULL),_tag(tag),_cmd(0)
{
	uint32_t size = sizeof(packet);
	uint32_t alen = size + len;
	pkg->len = ntohl(alen);
	_data = malloc(alen);
	if (htons(pkg->cmd) == CMD_USER_HEARTBEAT)
	{
		//cout<<">";
	}
	else
	{
		//cout<<"pkg->cmd="<<htons(pkg->cmd)<<endl;
		//cout<<"pkg->srcUid="<<_ntohll(pkg->srcUid)<<endl;
	}
	_len = alen;
	memcpy(_data, pkg, size);
	memcpy((char*)_data+size, data, len);
	auto datsss = (const char*)_data;

	_cmd = htons(pkg->cmd);


}

RequestPkg::~RequestPkg()
{
    if (_data)
    {
        free(_data);
        _data = NULL;
    }
    _len = 0;
}
