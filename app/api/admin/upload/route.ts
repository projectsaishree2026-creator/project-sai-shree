import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/require-admin";
import { StoreError, writeFile } from "@/lib/admin/store";

const MAX_BYTES = 1.5 * 1024 * 1024;
const TYPES: Record<string, string> = { "image/webp": "webp", "image/jpeg": "jpg", "image/png": "png" };

/** Upload an image into public/images/<folder>/ and return its public path. */
export async function POST(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  const folder = String(form?.get("folder") || "uploads");
  const name = String(form?.get("name") || "image");
  if (!(file instanceof File)) return NextResponse.json({ error: "No file" }, { status: 400 });
  if (!/^[a-z0-9-]+$/.test(folder)) return NextResponse.json({ error: "Bad folder" }, { status: 400 });
  const ext = TYPES[file.type];
  if (!ext) return NextResponse.json({ error: "Use a WebP, JPG or PNG image" }, { status: 400 });
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "Image must be under 1.5 MB" }, { status: 400 });

  const safe = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "image";
  const rel = `public/images/${folder}/${safe}-${Date.now().toString(36)}.${ext}`;
  try {
    await writeFile(rel, Buffer.from(await file.arrayBuffer()), `Website editor: upload ${rel.replace("public/", "")}`);
    return NextResponse.json({ ok: true, path: rel.replace(/^public/, "") });
  } catch (e) {
    if (e instanceof StoreError) return NextResponse.json({ error: e.message }, { status: e.status });
    console.error("[admin upload]", e);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
