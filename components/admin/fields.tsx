"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowUp, ChevronDown, ImagePlus, Loader2, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Field, Item } from "./config";

export interface FieldCtx {
  /** Error messages keyed by dotted path, e.g. "3.name" */
  errors: Record<string, string>;
  /** Item hasn't been saved yet → locked fields are editable */
  isNew: boolean;
  services: Item[];
  /** Local previews for images uploaded but not yet deployed */
  previews: Record<string, string>;
  addPreview: (path: string, url: string) => void;
}

export const inputCls =
  "w-full rounded-md border border-line-strong bg-white px-3 py-2 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 disabled:bg-surface disabled:text-ink-500";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/^dr\.?\s+/, "dr ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function Label({ label, count, max }: { label: string; count?: number; max?: number }) {
  return (
    <div className="mb-1.5 flex items-baseline justify-between gap-3">
      <span className="text-[13px] font-semibold text-ink-800">{label}</span>
      {max !== undefined && (
        <span className={cn("font-mono text-[11px]", (count ?? 0) > max ? "text-red-600" : "text-ink-400")}>
          {count}/{max}
        </span>
      )}
    </div>
  );
}

function Hint({ help, error }: { help?: string; error?: string }) {
  if (error) return <p className="mt-1 text-xs font-medium text-red-600">{error}</p>;
  if (help) return <p className="mt-1 text-xs text-ink-500">{help}</p>;
  return null;
}

export function Fields({
  fields,
  value,
  onChange,
  path,
  ctx,
}: {
  fields: Field[];
  value: Item;
  onChange: (v: Item) => void;
  path: string;
  ctx: FieldCtx;
}) {
  return (
    <div className="space-y-5">
      {fields.map((f, i) => (
        <FieldView key={`${f.key}-${i}`} field={f} value={value} onChange={onChange} path={path} ctx={ctx} />
      ))}
    </div>
  );
}

function FieldView({ field: f, value, onChange, path, ctx }: { field: Field; value: Item; onChange: (v: Item) => void; path: string; ctx: FieldCtx }) {
  const p = path ? `${path}.${f.key}` : f.key;
  const err = ctx.errors[p];
  const v = f.key ? value?.[f.key] : value;
  const set = (nv: unknown) => onChange({ ...value, [f.key]: nv });

  switch (f.type) {
    case "group": {
      const inner = f.key ? (value?.[f.key] ?? {}) : value;
      return (
        <fieldset className="rounded-lg border border-line bg-paper p-4">
          <legend className="px-1 text-xs font-semibold uppercase tracking-wider text-ink-500">{f.label}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {f.fields.map((sf, i) => (
              <FieldView
                key={`${sf.key}-${i}`}
                field={sf}
                value={inner}
                onChange={(nv) => (f.key ? set(nv) : onChange(nv))}
                path={f.key ? p : path}
                ctx={ctx}
              />
            ))}
          </div>
        </fieldset>
      );
    }

    case "text":
    case "url":
    case "email":
    case "date":
    case "number":
    case "textarea": {
      const locked = f.lockedWhenSaved && !ctx.isNew;
      const str = v === undefined || v === null ? "" : String(v);
      return (
        <label className="block">
          <Label label={f.label} max={f.maxLen} count={str.length} />
          {f.type === "textarea" ? (
            <textarea className={cn(inputCls, err && "border-red-400")} rows={f.rows ?? 3} value={str} placeholder={f.placeholder} onChange={(e) => set(e.target.value)} />
          ) : (
            <input
              className={cn(inputCls, err && "border-red-400")}
              type={f.type === "number" ? "number" : f.type === "date" ? "date" : f.type === "email" ? "email" : "text"}
              step={f.type === "number" ? "any" : undefined}
              value={str}
              disabled={locked}
              placeholder={f.placeholder}
              onChange={(e) => set(f.type === "number" ? (e.target.value === "" ? "" : Number(e.target.value)) : e.target.value)}
            />
          )}
          <Hint help={f.help} error={err} />
        </label>
      );
    }

    case "slug": {
      const locked = f.lockedWhenSaved && !ctx.isNew;
      return (
        <div>
          <Label label={f.label} />
          <div className="flex gap-2">
            <input className={cn(inputCls, "font-mono", err && "border-red-400")} value={v ?? ""} disabled={locked} onChange={(e) => set(e.target.value.toLowerCase())} placeholder="dr-firstname-lastname" />
            {!locked && (
              <button type="button" className="shrink-0 rounded-md border border-line-strong px-3 text-xs font-medium text-ink-700 hover:bg-surface" onClick={() => set(slugify(String(value?.[f.from] ?? "")))}>
                Make from {f.from}
              </button>
            )}
          </div>
          <Hint help={f.help} error={err} />
        </div>
      );
    }

    case "color":
      return (
        <label className="block">
          <Label label={f.label} />
          <div className="flex items-center gap-2">
            <input type="color" className="h-9 w-12 cursor-pointer rounded border border-line-strong bg-white" value={/^#[0-9a-f]{6}$/i.test(v ?? "") ? v : "#000000"} onChange={(e) => set(e.target.value.toUpperCase())} />
            <input className={cn(inputCls, "font-mono", err && "border-red-400")} value={v ?? ""} onChange={(e) => set(e.target.value)} />
          </div>
          <Hint help={f.help} error={err} />
        </label>
      );

    case "select": {
      const opts = f.options === "services" ? ctx.services.map((s) => ({ value: s.slug as string, label: s.name as string })) : f.options.map((o) => ({ value: o, label: o }));
      return (
        <label className="block">
          <Label label={f.label} />
          <select
            className={cn(inputCls, err && "border-red-400")}
            value={v === undefined ? "" : String(v)}
            onChange={(e) => (f.onPick ? onChange(f.onPick(value, e.target.value, ctx.services)) : set(e.target.value))}
          >
            <option value="" disabled>
              Choose…
            </option>
            {opts.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Hint help={f.help} error={err} />
        </label>
      );
    }

    case "checkbox":
      return (
        <label className="flex items-center gap-2.5 text-sm text-ink-800">
          <input type="checkbox" className="h-4 w-4 accent-brand-600" checked={!!v} onChange={(e) => set(e.target.checked)} />
          {f.label}
          <Hint help={f.help} error={err} />
        </label>
      );

    case "list":
      return <StringList label={f.label} help={f.help} error={err} errors={ctx.errors} path={p} value={Array.isArray(v) ? v : []} onChange={set} placeholder={f.placeholder} multiline={f.multiline} />;

    case "image":
      return <ImageField field={f} value={value} onChange={onChange} error={err} ctx={ctx} />;

    case "repeater": {
      const items: Item[] = Array.isArray(v) ? v : [];
      return (
        <div>
          <Label label={f.label} />
          <div className="space-y-2">
            {items.map((it, i) => (
              <RepeaterItem
                key={i}
                title={f.itemTitle(it, i)}
                hasError={Object.keys(ctx.errors).some((k) => k.startsWith(`${p}.${i}.`))}
                onUp={i > 0 ? () => set(move(items, i, i - 1)) : undefined}
                onDown={i < items.length - 1 ? () => set(move(items, i, i + 1)) : undefined}
                onRemove={() => confirm(`Remove “${f.itemTitle(it, i)}”?`) && set(items.filter((_, j) => j !== i))}
              >
                <Fields fields={f.fields} value={it} onChange={(nv) => set(items.map((x, j) => (j === i ? nv : x)))} path={`${p}.${i}`} ctx={ctx} />
              </RepeaterItem>
            ))}
          </div>
          <button type="button" onClick={() => set([...items, f.newItem()])} className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-3 py-1.5 text-xs font-medium text-ink-700 hover:bg-surface">
            <Plus size={14} /> Add {f.label.toLowerCase().replace(/s$/, "")}
          </button>
          <Hint error={err} />
        </div>
      );
    }
  }
}

export function move<T>(arr: T[], from: number, to: number) {
  const a = [...arr];
  const [x] = a.splice(from, 1);
  a.splice(to, 0, x);
  return a;
}

function RepeaterItem({ title, children, onUp, onDown, onRemove, hasError }: { title: string; children: React.ReactNode; onUp?: () => void; onDown?: () => void; onRemove: () => void; hasError: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("rounded-lg border bg-white", hasError ? "border-red-300" : "border-line")}>
      <div className="flex items-center gap-1 px-3 py-2">
        <button type="button" onClick={() => setOpen(!open)} className="flex min-w-0 flex-1 items-center gap-2 text-left text-sm font-medium text-ink-800">
          <ChevronDown size={16} className={cn("shrink-0 transition", open ? "" : "-rotate-90")} />
          <span className="truncate">{title}</span>
          {hasError && <span className="text-xs text-red-600">needs fixing</span>}
        </button>
        <IconBtn label="Move up" onClick={onUp}><ArrowUp size={14} /></IconBtn>
        <IconBtn label="Move down" onClick={onDown}><ArrowDown size={14} /></IconBtn>
        <IconBtn label="Remove" onClick={onRemove} danger><Trash2 size={14} /></IconBtn>
      </div>
      {open && <div className="border-t border-line p-4">{children}</div>}
    </div>
  );
}

export function IconBtn({ label, onClick, children, danger }: { label: string; onClick?: () => void; children: React.ReactNode; danger?: boolean }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={!onClick}
      onClick={onClick}
      className={cn("rounded p-1.5 text-ink-500 transition hover:bg-surface disabled:opacity-30", danger && "hover:bg-red-50 hover:text-red-600")}
    >
      {children}
    </button>
  );
}

function StringList({ label, help, error, errors, path, value, onChange, placeholder, multiline }: { label: string; help?: string; error?: string; errors: Record<string, string>; path: string; value: string[]; onChange: (v: string[]) => void; placeholder?: string; multiline?: boolean }) {
  const update = (i: number, s: string) => onChange(value.map((x, j) => (j === i ? s : x)));
  return (
    <div>
      <Label label={label} />
      <div className="space-y-1.5">
        {value.map((s, i) => (
          <div key={i} className="flex items-start gap-1">
            {multiline ? (
              <textarea className={cn(inputCls, errors[`${path}.${i}`] && "border-red-400")} rows={Math.min(8, Math.max(2, Math.ceil(s.length / 90)))} value={s} placeholder={placeholder} onChange={(e) => update(i, e.target.value)} />
            ) : (
              <input className={inputCls} value={s} placeholder={placeholder} onChange={(e) => update(i, e.target.value)} />
            )}
            <IconBtn label="Move up" onClick={i > 0 ? () => onChange(move(value, i, i - 1)) : undefined}><ArrowUp size={14} /></IconBtn>
            <IconBtn label="Remove" onClick={() => onChange(value.filter((_, j) => j !== i))} danger><Trash2 size={14} /></IconBtn>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => onChange([...value, ""])} className="mt-1.5 inline-flex items-center gap-1.5 rounded-md border border-dashed border-line-strong px-3 py-1.5 text-xs font-medium text-ink-700 hover:bg-surface">
        <Plus size={14} /> Add
      </button>
      <Hint help={help} error={error} />
    </div>
  );
}

function ImageField({ field: f, value, onChange, error, ctx }: { field: Extract<Field, { type: "image" }>; value: Item; onChange: (v: Item) => void; error?: string; ctx: FieldCtx }) {
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const src: string = value?.[f.key] ?? "";

  async function upload(file: File) {
    setBusy(true);
    setMsg(null);
    const form = new FormData();
    form.set("file", file);
    form.set("folder", f.folder);
    form.set("name", String(value?.[f.nameFrom] || "image"));
    const res = await fetch("/api/admin/upload", { method: "POST", body: form });
    const json = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setMsg(json.error || "Upload failed");
    ctx.addPreview(json.path, URL.createObjectURL(file));
    onChange({ ...value, [f.key]: json.path });
    setMsg("Uploaded. Click Save to use it on the site.");
  }

  return (
    <div>
      <Label label={f.label} />
      <div className="flex items-center gap-4">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-line bg-surface">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={ctx.previews[src] || src} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-ink-300"><ImagePlus size={28} /></div>
          )}
        </div>
        <div className="space-y-1.5">
          <button type="button" disabled={busy} onClick={() => input.current?.click()} className="inline-flex items-center gap-1.5 rounded-md border border-line-strong bg-white px-3 py-1.5 text-sm font-medium text-ink-800 hover:bg-surface disabled:opacity-60">
            {busy ? <Loader2 size={14} className="animate-spin" /> : <ImagePlus size={14} />} {src ? "Replace photo" : "Upload photo"}
          </button>
          <p className="max-w-xs break-all font-mono text-[11px] text-ink-400">{src}</p>
        </div>
        <input ref={input} type="file" accept="image/webp,image/jpeg,image/png" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
      </div>
      {msg && <p className="mt-1 text-xs text-ink-600">{msg}</p>}
      <Hint help={f.help} error={error} />
    </div>
  );
}
