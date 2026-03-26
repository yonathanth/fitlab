"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { SiteNav } from "@/app/components/SiteNav";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
      <SiteNav />

      <main className="flex min-h-screen items-center justify-center px-6 pt-20 pb-16">
        <div className="w-full max-w-xl bg-surface p-10">
          <div className="mb-10">
            <p className="text-xs font-black uppercase italic tracking-widest text-primary">
              Admin
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase italic tracking-tighter md:text-5xl">
              SIGN IN
            </h1>
            <p className="mt-4 text-sm font-medium uppercase italic leading-relaxed text-white/60">
              Secure access to the dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/10 p-4">
                <span className="material-symbols-outlined text-xl text-red-400">
                  error
                </span>
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-black uppercase tracking-widest text-white/60"
              >
                Email address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                  email
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@gym.com"
                  className="h-12 w-full border-2 border-primary/10 bg-background py-2 pl-12 pr-4 text-white placeholder:text-white/30 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-black uppercase tracking-widest text-white/60"
              >
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  minLength={6}
                  className="h-12 w-full border-2 border-primary/10 bg-background py-2 pl-12 pr-4 text-white placeholder:text-white/30 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="brutalist-shadow flex h-14 w-full items-center justify-center gap-2 bg-primary text-lg font-black uppercase tracking-tighter text-on-primary transition-transform hover:-translate-y-1 hover:translate-x-1 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="size-5 animate-spin rounded-full border-2 border-on-primary/30 border-t-on-primary" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <span className="material-symbols-outlined text-xl">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-white/40 transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Back to website
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
