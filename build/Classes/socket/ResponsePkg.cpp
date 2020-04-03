//
//  Response.cpp
//  landlords
//
//  Created by tian_su on 14-1-10.
//
//

#include "ResponsePkg.h"
#include "PSSocket.h"
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
#include <arpa/inet.h>
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include <netinet/in.h>
#endif

ResponsePkg::ResponsePkg(void * data, int len, int tag)
:_data(NULL),_len(0),_tag(tag)
{
    int size = sizeof(packet);
    if (!data || len <= 0 || len < size) {
        return;
    }
    memcpy(&_pkg, data, size);
    _pkg.ver = htons(_pkg.ver);
    _pkg.len = htonl(_pkg.len);
    _pkg.seq = htons(_pkg.seq);
    _pkg.cmd = htons(_pkg.cmd);
    _pkg.subCmd = htons(_pkg.subCmd);
    _pkg.srcUid = _htonll(_pkg.srcUid);
    _pkg.desUid = _htonll(_pkg.desUid);
    if (_pkg.len != len) {
        return;
    }
    if (data && len > 0) {
        _len = len - size;
        _data = malloc(_len+1);
        memcpy(_data, (char *)data+size, _len);
		
		//aes_decrypt((uint8_t*)_data, _len, (uint8_t*)_data, _len, 256);
        ((char *)_data)[_len]='\0';
    }
}
ResponsePkg::ResponsePkg(void * data, int len, int tag,int flag,int tt)
:_data(NULL),_len(0),_tag(tag)
{
    int size = sizeof(packet);
    if (!data || len <= 0 || len < size) {
        return;
    }
    memcpy(&_pkg, data, size);
    _pkg.ver = htons(_pkg.ver);
    _pkg.len = htonl(_pkg.len);
    _pkg.seq = htons(_pkg.seq);
    _pkg.cmd = htons(_pkg.cmd);
    _pkg.subCmd = htons(_pkg.subCmd);
    _pkg.srcUid = _htonll(_pkg.srcUid);
    _pkg.desUid = _htonll(_pkg.desUid);
    if (_pkg.len != len) {
        return;
    }
    if (data && len > 0) {
        _len = len - size;
        _data = malloc(_len+1);
        memcpy(_data, (char *)data+size, _len);
        ((char *)_data)[_len]='\0';
    }
}

ResponsePkg::ResponsePkg(const packet &pkg, void * data, int len, int tag)
:_data(NULL),_len(0),_tag(tag)
{
    memcpy(&_pkg, &pkg, sizeof(packet));
    if (data && len > 0) {
        _len = len;
        _data = malloc(_len+1);
        memcpy(_data, (char *)data, _len);
        ((char *)_data)[_len]='\0';
    }
}

ResponsePkg::~ResponsePkg()
{
    if (_data)
    {
        free(_data);
        _data = NULL;
    }
    _len = 0;
}

