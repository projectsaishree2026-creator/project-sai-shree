/**
 * Admin session: a signed, expiring token in an httpOnly cookie.
 * Uses Web Crypto only, so it runs in proxy.ts and in route handlers alike.
 *
 * Env: ADMIN_PASSWORD (login password), ADMIN_SESSION_SECRET (long random string, 32+ chars).
 */
export const SESSION_COOKIE = "ss_admin";
export const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

const enc = new TextEncoder();

function b64url(bytes: Uint8Array) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmac(data: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("ADMIN_SESSION_SECRET must be set (32+ characters)");
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64url(new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(data))));
}

/** Constant-time string comparison. */
export function safeEqual(a: string, b: string) {
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export async function createSessionToken() {
  const exp = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const payload = `admin.${exp}`;
  return `${payload}.${await hmac(payload)}`;
}

export async function verifySessionToken(token: string | undefined | null) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [sub, exp, sig] = parts;
  if (sub !== "admin" || !/^\d+$/.test(exp) || Number(exp) < Date.now() / 1000) return false;
  try {
    return safeEqual(sig, await hmac(`${sub}.${exp}`));
  } catch {
    return false;
  }
}

export function checkPassword(input: string) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  return safeEqual(input, pw);
}
