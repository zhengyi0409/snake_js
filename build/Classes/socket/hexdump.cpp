#include "hexdump.h"

const char hex_asc[] = "0123456789abcdef";

static void hex_dump_to_buffer(const void *buf, size_t len, int rowsize,
						int groupsize, char *linebuf, size_t linebuflen,
						int ascii)
{
	const uint8_t *ptr = (const uint8_t*)buf;
	uint8_t ch;
	int j, lx = 0;
	int ascii_column;

	if (rowsize != 16 && rowsize != 32)
		rowsize = 16;

	if (!len)
		goto nil;
	if (len > (size_t) rowsize)	/* limit to one line at a time */
		len = rowsize;
	if ((len % groupsize) != 0)	/* no mixed size output */
		groupsize = 1;

	switch (groupsize) {
	case 8: {
		const uint64_t *ptr8 = (const uint64_t*)buf;
		int ngroups = len / groupsize;

		for (j = 0; j < ngroups; j++)
			lx += snprintf(linebuf + lx, linebuflen - lx,
			"%s%16.16llx", j ? " " : "",
			(unsigned long long)*(ptr8 + j));
		ascii_column = 17 * ngroups + 2;
		break;
			}

	case 4: {
		const uint32_t *ptr4 = (const uint32_t*)buf;
		int ngroups = len / groupsize;

		for (j = 0; j < ngroups; j++)
			lx += snprintf(linebuf + lx, linebuflen - lx,
			"%s%8.8x", j ? " " : "", *(ptr4 + j));
		ascii_column = 9 * ngroups + 2;
		break;
			}

	case 2: {
		const uint16_t *ptr2 = (const uint16_t*)buf;
		int ngroups = len / groupsize;

		for (j = 0; j < ngroups; j++)
			lx += snprintf(linebuf + lx, linebuflen - lx,
			"%s%4.4x", j ? " " : "", *(ptr2 + j));
		ascii_column = 5 * ngroups + 2;
		break;
			}

	default:
		for (j = 0; ((size_t)j < len) && (size_t)(lx + 3) <= linebuflen; j++) {
			ch = ptr[j];
			linebuf[lx++] = hex_asc_hi(ch);
			linebuf[lx++] = hex_asc_lo(ch);
			linebuf[lx++] = ' ';
		}
		if (j)
			lx--;

		ascii_column = 3 * rowsize + 2;
		break;
	}
	if (!ascii)
		goto nil;

	while ((size_t)lx < (linebuflen - 1) && lx < (ascii_column - 1))
		linebuf[lx++] = ' ';
	for (j = 0; ((size_t)j < len) && (size_t)(lx + 2) < linebuflen; j++) {
		ch = ptr[j];
		linebuf[lx++] = (isascii(ch) && isprint(ch)) ? ch : '.';
	}
nil:
	linebuf[lx++] = '\0';
}

static void print_hex_dump(const char *prefix_str, int prefix_type,
					int rowsize, int groupsize,
					const void *buf, size_t len, int ascii)
{
	const uint8_t *ptr = (const uint8_t*)buf;
	int i, linelen, remaining = len;
	unsigned char linebuf[32 * 3 + 2 + 32 + 1];

	if (rowsize != 16 && rowsize != 32)
		rowsize = 16;

	for (i = 0; (size_t)i < len; i += rowsize) {
		linelen = _min(remaining, rowsize);
		remaining -= rowsize;

		hex_dump_to_buffer(ptr + i, linelen, rowsize, groupsize,
			(char *) linebuf, sizeof(linebuf), ascii);

		switch (prefix_type) {
		case DUMP_PREFIX_ADDRESS:
			printf("%s%p: %s\n", prefix_str, ptr + i, linebuf);
			break;
		case DUMP_PREFIX_OFFSET:
			printf("%s%.8x: %s\n", prefix_str, i, linebuf);
			break;
		default:
			printf("%s%s\n", prefix_str, linebuf);
			break;
		}
	}
}

void print_hex_dump_bytes(const char *prefix_str, int prefix_type,
						  const void *buf, size_t len)
{
	print_hex_dump(prefix_str, prefix_type, 16, 1, buf, len, 1);
}
