import { createHash } from 'crypto';

export function SHA1(data: string | Buffer | DataView) {
  return createHash('sha1').update(data).digest('hex');
}

export function SHA256(data: string | Buffer | DataView) {
  return createHash('sha256').update(data).digest('hex');
}

export function MD5(data: string | Buffer | DataView) {
  return createHash('md5').update(data).digest('hex');
}
