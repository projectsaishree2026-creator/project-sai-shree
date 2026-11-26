import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionToken } from "./session";

/** Returns a 401 response if the request has no valid admin session, otherwise null. */
export async function requireAdmin() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (await verifySessionToken(token)) return null;
  return NextResponse.json({ error: "Not signed in" }, { status: 401 });
}
