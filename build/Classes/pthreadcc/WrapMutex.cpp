#include "WrapMutex.h"
#include "cocos2d.h"
USING_NS_CC;

#if !defined(WIN32) && !defined(_WIN64)
	#include <pthread.h>
	static pthread_mutex_t mutexs[255];
#else
	#include <Windows.h>
	static HANDLE  mutexs[255];
#endif


bool WrapMutex::init(int key)
{
	if( (key<0) || (key>254) )
	{
		throw "Invalid argument(key)"; 
	}


#if !defined(WIN32) && !defined(_WIN64)
	pthread_mutex_init(&mutexs[key], NULL);
	return true;
#else
	mutexs[key] = ::CreateMutex(NULL, FALSE, NULL);
	return true;
#endif
		 
	return false;
}

WrapMutex::WrapMutex(void)
{
	throw "pls use new WrapMutex(int key). key def in Wrap"; 
}

WrapMutex::WrapMutex(int key)
{
	wrapKey = key;

#if !defined(WIN32) && !defined(_WIN64)
	//pthread_mutex_t g_threadMutex = mutexs[wrapKey];
	pthread_mutex_lock(&mutexs[wrapKey]);
#else
	DWORD d = WaitForSingleObject(mutexs[key], INFINITE);
#endif
}

WrapMutex::~WrapMutex(void)
{
#if !defined(WIN32) && !defined(_WIN64)
	//pthread_mutex_t g_threadMutex = mutexs[wrapKey];
	pthread_mutex_unlock(&mutexs[wrapKey]);
#else
	 ::ReleaseMutex(mutexs[wrapKey]);
#endif
}
