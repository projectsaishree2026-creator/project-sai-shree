import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/admin/session";

/**
 * 1. Admin website editor: /admin and /api/admin need a valid session
 *    (route handlers check again — this is the first gate, not the only one).
 * 2. Permanently redirect any doctor or service URL containing capital letters to its
 *    lowercase form (e.g. /doctors/dr-manasi-Das → /doctors/dr-manasi-das).
 *    Runs before rendering, so crawlers always receive a clean 308.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const isLogin = pathname === "/admin/login" || pathname === "/api/admin/login";
    if (isLogin) return NextResponse.next();
    const ok = await verifySessionToken(request.cookies.get(SESSION_COOKIE)?.value);
    if (ok) return NextResponse.next();
    if (pathname.startsWith("/api/")) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/doctors/:path*", "/services/:path*", "/admin", "/admin/:path*", "/api/admin/:path*"],
};
