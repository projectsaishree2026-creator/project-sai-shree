import { promises as fs } from "fs";
import path from "path";

/**
 * Reads and writes repo files for the admin editor.
 *
 * Production: GitHub Contents API → every save is a commit on GITHUB_BRANCH, and Vercel
 * redeploys the site from that commit (usually live in 1–2 minutes).
 * Local dev without GITHUB_TOKEN: reads/writes the files on disk directly.
 *
 * Env: GITHUB_TOKEN (fine-grained token, "Contents: Read and write" on this repo only),
 *      GITHUB_REPO ("owner/repo"), GITHUB_BRANCH (default "main").
 */

export class StoreError extends Error {
  constructor(message: string, public status = 500) {
    super(message);
  }
}

const token = () => process.env.GITHUB_TOKEN;
const repo = () => process.env.GITHUB_REPO;
const branch = () => process.env.GITHUB_BRANCH || "main";

export function storeMode(): "github" | "local" {
  if (token() && repo()) return "github";
  if (process.env.NODE_ENV !== "production") return "local";
  throw new StoreError("Editor is not configured: set GITHUB_TOKEN and GITHUB_REPO", 500);
}

async function gh(url: string, init?: RequestInit) {
  const res = await fetch(`https://api.github.com/repos/${repo()}/contents/${url}`, {
    ...init,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token()}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init?.headers ?? {}),
    },
  });
  return res;
}

/** Turn a failed GitHub response into a message the editor can act on (never includes the token). */
async function ghError(res: Response, action: "read" | "save") {
  const body = (await res.json().catch(() => null)) as { message?: string } | null;
  const reason = body?.message ? `: ${body.message}` : "";
  const hint =
    res.status === 401
      ? " The GITHUB_TOKEN in Vercel is invalid or expired — create a new one and update it in Vercel."
      : action === "save" && (res.status === 403 || res.status === 404)
        ? " The GITHUB_TOKEN needs “Contents: Read and write” permission on this repository (GitHub → Settings → Developer settings → Fine-grained tokens → Edit)."
        : "";
  return new StoreError(`GitHub ${action} failed (${res.status}${reason}).${hint}`, 502);
}

/** Current file content (UTF-8) and its version (git blob sha, or mtime locally). */
export async function readFile(filePath: string): Promise<{ text: string; version: string }> {
  if (storeMode() === "local") {
    const abs = path.join(/*turbopackIgnore: true*/ process.cwd(), filePath);
    const [text, stat] = await Promise.all([fs.readFile(abs, "utf8"), fs.stat(abs)]);
    return { text, version: String(stat.mtimeMs) };
  }
  const res = await gh(`${encodeURI(filePath)}?ref=${encodeURIComponent(branch())}`);
  if (!res.ok) throw await ghError(res, "read");
  const json = (await res.json()) as { content: string; sha: string };
  return { text: Buffer.from(json.content, "base64").toString("utf8"), version: json.sha };
}

/**
 * Write a file. `version` is what the editor loaded; if someone saved in between,
 * the write is refused (409) instead of silently overwriting their change.
 */
export async function writeFile(
  filePath: string,
  data: Buffer | string,
  message: string,
  version?: string,
): Promise<{ version: string }> {
  const buf = typeof data === "string" ? Buffer.from(data, "utf8") : data;
  if (storeMode() === "local") {
    const abs = path.join(/*turbopackIgnore: true*/ process.cwd(), filePath);
    if (version) {
      const stat = await fs.stat(abs).catch(() => null);
      if (stat && String(stat.mtimeMs) !== version) throw new StoreError("This section changed since you opened it. Reload and try again.", 409);
    }
    await fs.mkdir(path.dirname(abs), { recursive: true });
    await fs.writeFile(abs, buf);
    return { version: String((await fs.stat(abs)).mtimeMs) };
  }
  const res = await gh(encodeURI(filePath), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: buf.toString("base64"),
      branch: branch(),
      ...(version ? { sha: version } : {}),
      committer: { name: "Sai Shree Website Editor", email: "editor@saishreepolyclinic.com" },
    }),
  });
  if (res.status === 409 || res.status === 422) {
    throw new StoreError("This section changed since you opened it. Reload and try again.", 409);
  }
  if (!res.ok) throw await ghError(res, "save");
  const json = (await res.json()) as { content: { sha: string } };
  return { version: json.content.sha };
}
