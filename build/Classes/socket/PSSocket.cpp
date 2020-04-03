//
//  PSSocket.cpp
//  landlords
//
//  Created by tian_su on 14-1-10.
//
//
#include "PSSocket.h"
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
#include <arpa/inet.h>
#endif
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include <netinet/in.h>
#endif
#include "aes.h"

uint64_t xhtonll(uint64_t v) {
    union { uint32_t lv[2]; uint64_t llv; } u;
    u.lv[0] = htonl(v >> 32);
    u.lv[1] = htonl(v & 0xFFFFFFFF);
    return u.llv;
}

uint64_t xntohll(uint64_t v) {
    union { uint32_t lv[2]; uint64_t llv; } u;
    u.llv = v;
    return ((uint64_t)ntohl(u.lv[0]) << 32) | (uint64_t)ntohl(u.lv[1]);
}

int aes_encrypt(uint8_t* in, int32_t inlen, uint8_t* out, int32_t &outlen, int bits)
{
	if (in == NULL || inlen == 0) return -1;
	uint8_t k[] = "KP4D03EIB8?#0B*9D42KUY%71OX$YX6N";
	uint8_t iv[AES_BLOCK_SIZE+1] = {"MW&98R5NAO0#&1C7"};

	aes_ks_t key;
	aes_setks_encrypt(k, bits, &key);

	//PKCS7Padding
	int pad = AES_BLOCK_SIZE-inlen%AES_BLOCK_SIZE;
	outlen = inlen+pad;
	uint8_t * tmp = (uint8_t *)malloc(outlen);
	memcpy(tmp, in, inlen);
	memset(tmp+inlen, pad, pad);

	aes_cbc_encrypt(tmp, out, iv, (inlen+pad)/AES_BLOCK_SIZE, &key);

	free(tmp);

	return 0;
}

int aes_decrypt(uint8_t* in, int32_t inlen, uint8_t* out, int32_t &outlen, int bits)
{
	if (in == NULL || inlen == 0) return -1;
	uint8_t k[] = "KP4D03EIB8?#0B*9D42KUY%71OX$YX6N";
	uint8_t iv[AES_BLOCK_SIZE+1] = {"MW&98R5NAO0#&1C7"};

	if(0 != inlen%AES_BLOCK_SIZE)
	return -1;

	aes_ks_t key;
	aes_setks_decrypt(k, bits, &key);

	aes_cbc_decrypt(in, out, iv, inlen/AES_BLOCK_SIZE, &key);
	uint8_t add = out[inlen-1];
	outlen = inlen - add;
	out[outlen] = 0;

	return 0;
}

int get_random(int a)
{
	if (a == 0)
		return 0;

	return rand() % a;
}

int get_random(int a, int b)
{
	if (a == b)
		return a;

	return rand() % (b - a) + a;
}

long long GetCurTime()
{
	struct timeval tp;
#if WIN32
	cocos2d::gettimeofday(&tp, 0);
#else
	gettimeofday(&tp, 0);
#endif
	return tp.tv_sec * 1000LL + tp.tv_usec / 1000;
}

long long GetCurTime_us()
{
	struct timeval tp;
#if WIN32
	cocos2d::gettimeofday(&tp, 0);
#else
	gettimeofday(&tp, 0);
#endif
	return tp.tv_sec * 1000000LL + tp.tv_usec;
}