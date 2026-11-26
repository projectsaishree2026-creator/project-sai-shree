"use client";

import { useState } from "react";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const json = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setError(json.error || "Login failed");
    window.location.href = "/admin";
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl border border-line bg-white p-7 shadow-[var(--shadow-soft)]">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600"><Lock size={18} /></span>
          <div>
            <h1 className="font-semibold text-ink-900">Website editor</h1>
            <p className="text-xs text-ink-500">Sai Shree Polyclinic</p>
          </div>
        </div>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink-800">Password</span>
          <input
            type="password"
            autoFocus
            autoComplete="current-password"
            className="w-full rounded-md border border-line-strong px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <button disabled={busy || !password} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50">
          {busy && <Loader2 size={15} className="animate-spin" />} Sign in
        </button>
      </form>
    </div>
  );
}
