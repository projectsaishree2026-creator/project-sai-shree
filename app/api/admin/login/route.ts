import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, SESSION_MAX_AGE, checkPassword, createSessionToken } from "@/lib/admin/session";

// Simple in-memory throttle: 5 wrong attempts per IP per 15 minutes (per server instance).
const attempts = new Map<string, { count: number; until: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const a = attempts.get(ip);
  if (a && a.until > now && a.count >= 5) {
    return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  }

  const { password } = (await req.json().catch(() => ({}))) as { password?: string };
  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json({ error: "Admin login is not configured on the server." }, { status: 500 });
  }
  if (typeof password !== "string" || !checkPassword(password)) {
    const cur = a && a.until > now ? a : { count: 0, until: now + 15 * 60 * 1000 };
    attempts.set(ip, { ...cur, count: cur.count + 1 });
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  attempts.delete(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
