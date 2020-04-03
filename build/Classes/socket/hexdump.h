#ifndef _HEXDUMP_H
#define _HEXDUMP_H

//#include "common.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <unistd.h>
#include <errno.h>
#include <fcntl.h>
#include <math.h>
#include <string.h>
#include <iconv.h>

#include <time.h>
#include <assert.h>
#include <pthread.h>
#include <signal.h>
#include <semaphore.h>

#include <sys/stat.h>
#include <sys/time.h>
#include <sys/resource.h>
#include <sys/ioctl.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/socket.h>

#include <netdb.h>
#include <netinet/in.h>
#include <netinet/tcp.h>
#include <arpa/inet.h>

#include <ctype.h>

enum PREFIX_TYPE
{
	DUMP_PREFIX_NONE,
	DUMP_PREFIX_ADDRESS,
	DUMP_PREFIX_OFFSET
};

#define hex_asc_lo(x)	hex_asc[((x) & 0x0f)]
#define hex_asc_hi(x)	hex_asc[((x) & 0xf0) >> 4]

#define _min(x, y) ({				\
	__typeof(x) _min1 = (x);			\
	__typeof(y) _min2 = (y);			\
	(void) (&_min1 == &_min2);		\
	_min1 < _min2 ? _min1 : _min2; })

void print_hex_dump_bytes(const char *prefix_str, int prefix_type, const void *buf, size_t len);

#endif


