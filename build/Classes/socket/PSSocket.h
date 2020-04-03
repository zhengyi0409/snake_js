//
//  PSSocket.h
//  landlords
//
//  Created by tian_su on 14-1-10.
//
//

#ifndef __landlords__PSSocket__
#define __landlords__PSSocket__

#include "cocos2d.h"

#define CMD_USER_LOGIN					0x0000
#define CMD_USER_LOGIN_ACK				0x0001
#define CMD_USER_LOGOUT					0x0002
#define CMD_USER_LOGOUT_ACK				0x0003
#define CMD_USER_HEARTBEAT				0x0004
#define CMD_USER_HEARTBEAT_ACK			0x0005
//#define CMD_USER_P2P_MSG				0x0006
//#define CMD_USER_P2P_MSG_ACK			0x0007
//#define CMD_USER_FORCE_DOWN_NTF			0x0008
//#define CMD_USER_GET_INFO				0x0009
//#define CMD_USER_GET_INFO_ACK			0x000A
//
#define CMD_ROOM_LOGIN					0x0100
#define CMD_ROOM_LOGIN_ACK				0x0101
#define CMD_ROOM_LOGOUT					0x0102
#define CMD_ROOM_LOGOUT_ACK				0x0103
//#define CMD_ROOM_MSG					0x0104
//#define CMD_ROOM_MSG_ACK				0x0105
//#define CMD_ROOM_REQUEST				0x0107
//#define CMD_ROOM_REQUEST_ACK			0x0108
//#define CMD_ROOM_LOCK                   0x0109
//#define CMD_ROOM_UNLOCK                 0x010A
//
//#define CMD_AV_OPEN						0x0200
//#define CMD_AV_OPEN_ACK					0x0201
//#define CMD_AV_CLOSE					0x0202
//#define CMD_AV_CLOSE_ACK				0x0203
//#define CMD_AV_CTRL						0x0204
//#define CMD_AV_CTRL_ACK					0x0205
//#define CMD_AV_DATA						0x0206
//#define CMD_AV_NTF						0x0207
//
////slither
//#define CMD_SESSION_NTF       0x0800
//#define CMD_SLITHER_NTF       0x0801
//#define CMD_FOOD_NTF          0x0802
//
#define CMD_SYNC_REG          0x0850
#define CMD_SOCCER_REG_REQ    0x32A2
#define CMD_SOCCER_REG_REP    0x32A3


//
//
//#define CMD_GAMES_LOGIC_ERROR_1         0x0844
//#define CMD_GAMES_LOGIC_ERROR_2         0x0845
//#define CMD_GAMES_LOGIC_ERROR_3         0x0846
//#define CMD_SOCKET_R_ERROR_NET          0x0847
//#define CMD_SOCKET_R_ERROR_OTH          0x0848
//#define CMD_SOCKET_S_ERROR_NET          0x0849
//#define CMD_SOCKET_S_ERROR_OTH          0x084A
#define CMD_SOCKET_CLOSE                0x084B
#define CMD_SOCKET_SETUID               0x084C
#define CMD_SOCKET_C_ERROR              0x084D
//
//#define CMD_STREAM_LOGIN				0x0300
//#define	CMD_STREAM_LOGIN_ACK			0x0301
//#define	CMD_STREAM_LOGOUT				0x0302
//#define	CMD_STREAM_LOGOUT_ACK			0x0303
//#define	CMD_STREAM_DATA					0x0304
//#define CMD_STREAM_GET_NAT				0x0306
//#define	CMD_STREAM_GET_NAT_ACK			0x0307
//
#define UPS_LL_VERSION                   0x1001
#define PS_LL_VERSION                   0x2001
//
//
//#define PS_INET_ADDR					"greedyeater7.soulgame.mobi"
//#define PS_INET_PORT					49478 //39478


//#define UDP_PS_INET_ADDR                "112.124.109.22"


//112.124.109.22:39578

#define PS_MAX_RECV_SIZE				1024000

#define CMD_PLF_LOGIN_REQ  0x2000//平台登录
#define CMD_PLF_LOGIN_REP  0x2001//平台登录响应
#define CMD_PLF_LOGOUT_REQ  0x2002//平台登出
#define CMD_PLF_LOGOUT_REP  0x2003
#define CMD_PLF_HEARTBEST_REQ  0x2004//心跳
#define CMD_PLF_HEARTBEST_REP  0x2005
#define CMD_PLF_PK_MATCH_REQ  0x2006//对战匹配
#define CMD_PLF_PK_MATCH_REP  0x2007
#define CMD_PLF_PK_MATCH_NTF  0x2008
#define CMD_PLF_PK_EXIT_REQ  0x2009//退出对战
#define CMD_PLF_PK_EXIT_NTF  0x200A
#define CMD_PLF_PK_READY_REQ  0x200B//准备
#define CMD_PLF_PK_READY_NTF  0x200C
#define CMD_PLF_CHAT_REQ  0x200D//聊天
#define CMD_PLF_CHAT_REP  0x200E
#define CMD_PLF_CHAT_NTF  0x200F


#pragma pack(push,1)
typedef struct  {
    uint16_t ver;
    uint32_t len;
    uint16_t seq;
    uint16_t cmd;
    uint16_t subCmd;
    uint64_t srcUid;
    uint64_t desUid;
}packet ;
#pragma pack(pop)

uint64_t xhtonll(uint64_t v);
uint64_t xntohll(uint64_t v);

#define _htonll(X) xhtonll(X)
#define _ntohll(X) xntohll(X)
//#define _htonll(X) (((unsigned long long )htonl((int)((X << 32) >> 32))) << 32) | (unsigned int)htonl((int)(X >> 32))
//#define _ntohll(X) (((unsigned long long )htonl((int)((X << 32) >> 32))) << 32) | (unsigned int)htonl((int)(X >> 32))

/*unsigned long long _htonll(unsigned long long val)
 {
 return (((unsigned long long )htonl((int)((val << 32) >> 32))) << 32) | (unsigned int)htonl((int)(val >> 32));
 }
 
 unsigned long long _ntohll(unsigned long long val)
 {
 return (((unsigned long long )htonl((int)((val << 32) >> 32))) << 32) | (unsigned int)htonl((int)(val >> 32));
 }
 */ 

int aes_encrypt(uint8_t* in, int32_t inlen, uint8_t* out, int32_t &outlen, int bits);

int aes_decrypt(uint8_t* in, int32_t inlen, uint8_t* out, int32_t &outlen, int bits);

int get_random(int a);
int get_random(int a, int b);
long long GetCurTime();
long long GetCurTime_us();

#endif /* defined(__landlords__PSSocket__) */
