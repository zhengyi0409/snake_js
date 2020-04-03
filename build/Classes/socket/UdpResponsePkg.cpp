//
//  Response.cpp
//  landlords
//
//  Created by tian_su on 14-1-10.
//
//

#include "UdpResponsePkg.h"

UdpResponsePkg::UdpResponsePkg(const char * data, int len)
:_data(NULL),_len(0)
{
	_len = len;
    _data = new char[_len];
    memcpy((char *)_data, (char *)data, _len);
}

UdpResponsePkg::~UdpResponsePkg()
{
    if (_data)
    {
        delete _data;
        _data = NULL;
    }
    _len = 0;
}
