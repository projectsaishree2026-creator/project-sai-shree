import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminEditor } from "@/components/admin/editor";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/admin/session";

export default async function AdminPage() {
  if (!(await verifySessionToken((await cookies()).get(SESSION_COOKIE)?.value))) redirect("/admin/login");
  return <AdminEditor />;
}
