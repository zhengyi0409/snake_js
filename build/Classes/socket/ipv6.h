#pragma once

#include "cocos2d.h"

//socket
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
#include <WinSock2.h>
#include <ws2tcpip.h>
#include <stdio.h>
#include <windows.h>
#include <process.h>
#elif (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
#include <arpa/inet.h>
#include <netdb.h>
#include <sys/socket.h>
#include "errno.h"
#else (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <arpa/inet.h>
#include "errno.h"
#include <unistd.h>
#endif

//thread
#if defined(_WIN32) || defined(_WIN64)
#include <process.h>
#include <windows.h>
//typedef  unsigned long int pthread_t ;
typedef unsigned threadfunc_t;
typedef void * threadparam_t;
#define STDPREFIX __stdcall
#else
#include <unistd.h>
#include <pthread.h>
typedef void * threadfunc_t;
typedef void * threadparam_t;
#define STDPREFIX
#endif

using namespace std;

inline int GetSocketError()
{
#if defined (_WIN32) || defined (_WIN64)
	return GetLastError();
#else
	return errno;
#endif
}

class IPAdress_46
{
public:
	void Init(const char*ip, unsigned short port)
	{
		Init(ip);
		addr6.sin6_port = htons(port);
		addr.sin_port = htons(port);
	}
	void Init(const char*ip)
	{
		struct addrinfo* res0;
		struct addrinfo hints;
		struct addrinfo* res;

		memset(&hints, 0, sizeof(hints));

		hints.ai_flags = 0;
		hints.ai_family = PF_UNSPEC;
		hints.ai_socktype = SOCK_STREAM;

		int ret = 0;
		if ((ret = getaddrinfo(	ip, NULL, &hints, &res0)) != 0)
		{
			printf("getaddrinfo failed %d", GetSocketError());
			return;
		}

		const char* pszTemp;

		for (res = res0; res; res = res->ai_next)
		{
			char buf[32];
			if (res->ai_family == AF_INET6)
			{
				ai_family = AF_INET6;
				addr6 = *((struct sockaddr_in6*)res->ai_addr);
				pszTemp = inet_ntop(AF_INET6, &addr6.sin6_addr, buf, sizeof(buf));
			}
			else
			{
				ai_family = AF_INET;
				addr = *((struct sockaddr_in*)res->ai_addr);
				pszTemp = inet_ntop(AF_INET, &addr.sin_addr, buf, sizeof(buf));
			}

			break;
		}
		printf("ip is :%s", pszTemp);
	}
public:
	bool IsIpV6()
	{
		return ai_family == AF_INET6;
	}

	int ai_family;
	struct sockaddr_in6 addr6;
	struct sockaddr_in  addr;
};
