import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/require-admin";
import { COLLECTIONS, isCollectionKey } from "@/lib/admin/collections";
import { schemas } from "@/lib/admin/schemas";
import { StoreError, readFile, storeMode, writeFile } from "@/lib/admin/store";

type Ctx = { params: Promise<{ key: string }> };

function fail(e: unknown) {
  if (e instanceof StoreError) return NextResponse.json({ error: e.message }, { status: e.status });
  console.error("[admin content]", e);
  return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
}

export async function GET(_req: NextRequest, { params }: Ctx) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { key } = await params;
  if (!isCollectionKey(key)) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  try {
    const { text, version } = await readFile(COLLECTIONS[key].path);
    return NextResponse.json({ data: JSON.parse(text), version, mode: storeMode() });
  } catch (e) {
    return fail(e);
  }
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { key } = await params;
  if (!isCollectionKey(key)) return NextResponse.json({ error: "Unknown section" }, { status: 404 });

  const body = (await req.json().catch(() => null)) as { data?: unknown; version?: string; summary?: string } | null;
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const parsed = schemas[key].safeParse(body.data);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please fix the highlighted fields",
        issues: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
      },
      { status: 400 },
    );
  }

  try {
    const summary = (body.summary || "").replace(/\s+/g, " ").slice(0, 80);
    const message = `Website editor: update ${COLLECTIONS[key].label.toLowerCase()}${summary ? ` — ${summary}` : ""}`;
    const { version } = await writeFile(COLLECTIONS[key].path, JSON.stringify(parsed.data, null, 2) + "\n", message, body.version);
    return NextResponse.json({ ok: true, version, data: parsed.data, mode: storeMode() });
  } catch (e) {
    return fail(e);
  }
}
