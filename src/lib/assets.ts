// If you don't already have this, also add:  /// <reference types="vite/client" />  in src/vite-env.d.ts
export function asset(path: string) {
    const raw = (import.meta as any).env?.BASE_URL || '/';
    // ensure it ends with a slash for URL()
    const base = raw.endsWith('/') ? raw : raw + '/';
    // ensure it's absolute (URL() requires an absolute base)
    const absBase = base.startsWith('http')
        ? base
        : new URL(base, window.location.origin).toString();

    return new URL(path.replace(/^\//, ''), absBase).toString();
}