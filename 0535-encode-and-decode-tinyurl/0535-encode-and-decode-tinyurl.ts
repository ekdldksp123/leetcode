/**
 * Encodes a URL to a shortened URL.
 */
const encode = (longUrl: string): string => encodeURIComponent(longUrl);

/**
 * Decodes a shortened URL to its original URL.
 */
const decode = (shortUrl: string): string => decodeURIComponent(shortUrl)

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */