import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Permanently redirect any doctor or service URL containing capital letters to its
 * lowercase form (e.g. /doctors/dr-manasi-Das → /doctors/dr-manasi-das).
 * Runs before rendering, so crawlers always receive a clean 308.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/doctors/:path*", "/services/:path*"],
};
