"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Check, ExternalLink, Loader2, LogOut, Plus, Search, Trash2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { COLLECTIONS, COLLECTION_KEYS, type CollectionKey } from "@/lib/admin/collections";
import { CONFIG, type Item, type ListConfig } from "./config";
import { Fields, IconBtn, move, type FieldCtx } from "./fields";

type Loaded = { data: Item | Item[]; version: string; mode: "github" | "local" };
type Toast = { kind: "ok" | "error"; text: string } | null;

export function AdminEditor() {
  const [section, setSection] = useState<CollectionKey>("clinic");
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [draft, setDraft] = useState<Item | Item[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<Toast>(null);
  const [services, setServices] = useState<Item[]>([]);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  /** index in the list that is open, for list sections */
  const [selected, setSelected] = useState(0);
  /** indexes of items added in this session (unsaved) */
  const [newIdx, setNewIdx] = useState<Set<number>>(new Set());

  const dirty = useMemo(() => !!loaded && JSON.stringify(loaded.data) !== JSON.stringify(draft), [loaded, draft]);

  const load = useCallback(async (key: CollectionKey) => {
    setLoading(true);
    setErrors({});
    setToast(null);
    const res = await fetch(`/api/admin/content/${key}`, { cache: "no-store" });
    if (res.status === 401) return void (window.location.href = "/admin/login");
    const json = await res.json();
    setLoading(false);
    if (!res.ok) return setToast({ kind: "error", text: json.error || "Could not load" });
    setLoaded(json);
    setDraft(structuredClone(json.data));
    setSelected(0);
    setNewIdx(new Set());
    if (key === "services") setServices(json.data);
  }, []);

  useEffect(() => {
    load(section);
  }, [section, load]);

  // Department dropdowns need the service list
  useEffect(() => {
    fetch("/api/admin/content/services", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => j && setServices(j.data));
  }, []);

  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      if (dirty) e.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function switchTo(key: CollectionKey) {
    if (key === section) return;
    if (dirty && !confirm("You have unsaved changes. Discard them?")) return;
    setSection(key);
  }

  async function save() {
    if (!draft || !loaded) return;
    const cfg = CONFIG[section];
    const data = cfg.kind === "list" && cfg.finalize ? (draft as Item[]).map(cfg.finalize) : draft;
    setSaving(true);
    setErrors({});
    setToast(null);
    const summary =
      cfg.kind === "list"
        ? (draft as Item[])
            .filter((it, i) => JSON.stringify(it) !== JSON.stringify((loaded.data as Item[])[i]))
            .map((it) => cfg.title(it))
            .slice(0, 3)
            .join(", ")
        : "";
    const res = await fetch(`/api/admin/content/${section}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data, version: loaded.version, summary }),
    });
    const json = await res.json().catch(() => ({}));
    setSaving(false);
    if (res.status === 401) return void (window.location.href = "/admin/login");
    if (!res.ok) {
      const map: Record<string, string> = {};
      for (const i of json.issues ?? []) map[i.path] ??= i.message;
      setErrors(map);
      // jump to the first list item with a problem
      const first = Object.keys(map)[0];
      if (cfg.kind === "list" && first && /^\d+/.test(first)) setSelected(Number(first.split(".")[0]));
      return setToast({ kind: "error", text: json.error || "Save failed" });
    }
    const next: Loaded = { data: json.data, version: json.version, mode: json.mode };
    setLoaded(next);
    setDraft(structuredClone(json.data));
    setNewIdx(new Set());
    if (section === "services") setServices(json.data);
    setToast({
      kind: "ok",
      text: json.mode === "github" ? "Saved. The live website will update in about 1–2 minutes." : "Saved to the local content files (development mode).",
    });
  }

  async function logout() {
    if (dirty && !confirm("You have unsaved changes. Log out anyway?")) return;
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.href = "/admin/login";
  }

  const cfg = CONFIG[section];
  const ctxBase = { errors, services, previews, addPreview: (p: string, u: string) => setPreviews((x) => ({ ...x, [p]: u })) };

  return (
    <div className="flex min-h-screen bg-paper text-ink-900">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-white md:flex">
        <div className="border-b border-line px-5 py-4">
          <p className="text-sm font-semibold">Sai Shree Polyclinic</p>
          <p className="text-xs text-ink-500">Website editor</p>
        </div>
        <nav className="flex-1 space-y-0.5 p-3">
          {COLLECTION_KEYS.map((k) => (
            <button key={k} onClick={() => switchTo(k)} className={cn("w-full rounded-md px-3 py-2 text-left text-sm transition", k === section ? "bg-brand-50 font-semibold text-brand-700" : "text-ink-700 hover:bg-surface")}>
              {COLLECTIONS[k].label}
            </button>
          ))}
        </nav>
        <div className="space-y-1 border-t border-line p-3">
          <a href="/" target="_blank" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-ink-700 hover:bg-surface">
            <ExternalLink size={14} /> View website
          </a>
          <button onClick={logout} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-ink-700 hover:bg-surface">
            <LogOut size={14} /> Log out
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-line bg-white/95 px-5 py-3 backdrop-blur">
          <select className="rounded-md border border-line-strong px-2 py-1.5 text-sm md:hidden" value={section} onChange={(e) => switchTo(e.target.value as CollectionKey)}>
            {COLLECTION_KEYS.map((k) => (
              <option key={k} value={k}>{COLLECTIONS[k].label}</option>
            ))}
          </select>
          <h1 className="hidden text-lg font-semibold md:block">{COLLECTIONS[section].label}</h1>
          <div className="ml-auto flex items-center gap-3">
            {dirty && <span className="text-xs font-medium text-amber-600">Unsaved changes</span>}
            {dirty && (
              <button onClick={() => loaded && (setDraft(structuredClone(loaded.data)), setErrors({}), setNewIdx(new Set()))} className="rounded-md px-3 py-2 text-sm text-ink-600 hover:bg-surface">
                Discard
              </button>
            )}
            <button onClick={save} disabled={!dirty || saving} className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-40">
              {saving ? <Loader2 size={15} className="animate-spin" /> : <Check size={15} />} {saving ? "Saving…" : "Save changes"}
            </button>
          </div>
        </header>

        {toast && (
          <div className={cn("mx-5 mt-4 flex items-start gap-2 rounded-md px-4 py-3 text-sm", toast.kind === "ok" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800")}>
            {toast.kind === "ok" ? <Check size={16} className="mt-0.5 shrink-0" /> : <TriangleAlert size={16} className="mt-0.5 shrink-0" />}
            <span>{toast.text}</span>
          </div>
        )}

        <main className="flex-1 p-5">
          <p className="mb-5 max-w-3xl text-sm text-ink-600">{cfg.intro}</p>
          {loading || !draft ? (
            <div className="flex items-center gap-2 text-sm text-ink-500"><Loader2 size={16} className="animate-spin" /> Loading…</div>
          ) : cfg.kind === "object" ? (
            <div className="max-w-3xl rounded-xl border border-line bg-white p-6">
              <Fields fields={cfg.fields} value={draft as Item} onChange={setDraft} path="" ctx={{ ...ctxBase, isNew: true }} />
            </div>
          ) : (
            <ListEditor
              cfg={cfg}
              items={draft as Item[]}
              setItems={setDraft}
              selected={selected}
              setSelected={setSelected}
              newIdx={newIdx}
              setNewIdx={setNewIdx}
              ctxBase={ctxBase}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function ListEditor({
  cfg,
  items,
  setItems,
  selected,
  setSelected,
  newIdx,
  setNewIdx,
  ctxBase,
}: {
  cfg: ListConfig;
  items: Item[];
  setItems: (v: Item[]) => void;
  selected: number;
  setSelected: (i: number) => void;
  newIdx: Set<number>;
  setNewIdx: (s: Set<number>) => void;
  ctxBase: Omit<FieldCtx, "isNew">;
}) {
  const [q, setQ] = useState("");
  const cur = items[selected];
  const errorRows = new Set(Object.keys(ctxBase.errors).map((k) => Number(k.split(".")[0])));

  // keep "new" markers attached to the right rows when moving/removing
  function remap(fn: (i: number) => number | null) {
    const s = new Set<number>();
    newIdx.forEach((i) => {
      const n = fn(i);
      if (n !== null) s.add(n);
    });
    setNewIdx(s);
  }

  function add() {
    if (!cfg.newItem) return;
    setItems([...items, cfg.newItem()]);
    setNewIdx(new Set([...newIdx, items.length]));
    setSelected(items.length);
    setQ("");
  }
  function remove(i: number) {
    if (!confirm(`Remove “${cfg.title(items[i])}” from the website? You can still Discard before saving.`)) return;
    setItems(items.filter((_, j) => j !== i));
    remap((x) => (x === i ? null : x > i ? x - 1 : x));
    setSelected(Math.max(0, Math.min(i, items.length - 2)));
  }
  function shift(i: number, to: number) {
    setItems(move(items, i, to));
    remap((x) => (x === i ? to : x === to ? i : x));
    setSelected(to);
  }

  const visible = items.map((it, i) => ({ it, i })).filter(({ it }) => !q || JSON.stringify(it).toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="grid gap-5 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-20 lg:self-start">
        <div className="rounded-xl border border-line bg-white">
          <div className="flex items-center gap-2 border-b border-line p-2">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-400" />
              <input className="w-full rounded-md bg-surface py-1.5 pl-8 pr-2 text-sm outline-none" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            {cfg.canAdd && (
              <button onClick={add} className="inline-flex items-center gap-1 rounded-md bg-brand-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-brand-700">
                <Plus size={14} /> Add
              </button>
            )}
          </div>
          <ul className="max-h-[calc(100vh-14rem)] overflow-y-auto p-1.5">
            {visible.map(({ it, i }) => {
              const img = cfg.image?.(it);
              return (
                <li key={i}>
                  <button onClick={() => setSelected(i)} className={cn("flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left transition", i === selected ? "bg-brand-50" : "hover:bg-surface")}>
                    {cfg.image && (
                      <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-surface">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {img && <img src={ctxBase.previews[img] || img} alt="" className="h-full w-full object-cover" />}
                      </span>
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5">
                        <span className={cn("truncate text-sm", i === selected ? "font-semibold text-brand-800" : "font-medium text-ink-800")}>{cfg.title(it)}</span>
                        {newIdx.has(i) && <span className="rounded bg-amber-100 px-1 text-[10px] font-semibold text-amber-700">NEW</span>}
                        {errorRows.has(i) && <TriangleAlert size={12} className="shrink-0 text-red-500" />}
                      </span>
                      {cfg.subtitle && <span className="block truncate text-xs text-ink-500">{cfg.subtitle(it)}</span>}
                    </span>
                  </button>
                </li>
              );
            })}
            {!visible.length && <li className="px-3 py-6 text-center text-sm text-ink-400">Nothing found</li>}
          </ul>
        </div>
      </div>

      {cur ? (
        <div className="min-w-0 rounded-xl border border-line bg-white">
          <div className="flex items-center gap-1 border-b border-line px-5 py-3">
            <h2 className="min-w-0 flex-1 truncate font-semibold">{cfg.title(cur)}</h2>
            {cfg.previewPath && !newIdx.has(selected) && (
              <a href={cfg.previewPath(cur)} target="_blank" className="mr-2 inline-flex items-center gap-1 text-xs text-brand-700 hover:underline">
                View on site <ExternalLink size={12} />
              </a>
            )}
            <IconBtn label="Move up" onClick={selected > 0 ? () => shift(selected, selected - 1) : undefined}><ArrowUp size={15} /></IconBtn>
            <IconBtn label="Move down" onClick={selected < items.length - 1 ? () => shift(selected, selected + 1) : undefined}><ArrowDown size={15} /></IconBtn>
            {cfg.canAdd && <IconBtn label="Remove" onClick={() => remove(selected)} danger><Trash2 size={15} /></IconBtn>}
          </div>
          <div className="p-5">
            <Fields
              fields={cfg.fields}
              value={cur}
              onChange={(nv) => setItems(items.map((x, j) => (j === selected ? nv : x)))}
              path={String(selected)}
              ctx={{ ...ctxBase, isNew: newIdx.has(selected) }}
            />
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line-strong p-10 text-center text-sm text-ink-500">Nothing here yet.</div>
      )}
    </div>
  );
}
