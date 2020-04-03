#ifndef _AES_H
#define _AES_H

#include <stddef.h>
#include <stdint.h>

#define AES_MAXNR	 14
#define AES_BLOCK_SIZE	 16

typedef struct {
	uint32_t rd_key[4 * (AES_MAXNR + 1)];
	int rounds;
} aes_ks_t;

#ifdef __cplusplus
extern "C" {
#endif

/* AES key schedule functions. Inputs user key buffer and generates
 * key schedule for encryption/decryption. Valid kbits are 128, 192,
 * and 256. */
int aes_setks_encrypt(const uint8_t *keybuf, int kbits, aes_ks_t *ks);
int aes_setks_decrypt(const uint8_t *keybuf, int kbits, aes_ks_t *ks);

/* Core AES functions.
 * in and out are input and output buffers, which can be the same
 * (except for the aes_cbc_decrypt).
 * Use aes_setks_* to generate ks.
 */
void aes_ecb_encrypt(const uint8_t *in, uint8_t *out, const aes_ks_t *ks);
void aes_ecb_decrypt(const uint8_t *in, uint8_t *out, const aes_ks_t *ks);
void aes_cbc_encrypt(const uint8_t *in, uint8_t *out, uint8_t *iv,
		     size_t blks, const aes_ks_t *ks);
/* in and out can NOT be the same (have amended and can same)*/
void aes_cbc_decrypt(const uint8_t *in, uint8_t *out, uint8_t *iv,
		     size_t blks, const aes_ks_t *ks);

#ifdef __cplusplus
}
#endif

#endif
