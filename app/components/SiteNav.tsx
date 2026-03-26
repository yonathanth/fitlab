"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/80 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black italic tracking-tighter uppercase text-primary"
          >
            Fitlab Gym &amp; Spa
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  className={`text-xs font-black uppercase tracking-widest transition-colors ${
                    active ? "text-primary" : "hover:text-primary"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              className="brutalist-shadow bg-primary px-8 py-3 text-xs font-black uppercase tracking-widest text-on-primary transition-transform hover:-translate-y-1 hover:translate-x-1"
              href="/register"
            >
              Join Now
            </Link>
          </div>

          <button
            className="text-primary md:hidden"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-3xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile panel */}
      <div
        className={`fixed left-0 right-0 z-40 origin-top transition-all duration-200 md:hidden ${
          open
            ? "top-[72px] translate-y-0 opacity-100"
            : "top-[72px] pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-6 border border-primary/10 bg-background/95 backdrop-blur-md">
          <div className="p-6">
            <div className="flex flex-col text-center">
              {navItems.map((item, idx) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    className={`group flex flex-col items-center border-b border-primary/10 py-4 text-sm font-black uppercase tracking-widest transition-all duration-200 ${
                      open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                    } ${active ? "text-primary" : "text-white/80 hover:text-primary"} hover:scale-[1.02] active:scale-[0.99]`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{ transitionDelay: `${idx * 40}ms` }}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`mt-3 h-1 w-10 transition-colors ${
                        active ? "bg-primary" : "bg-white/10 group-hover:bg-primary/50"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/register"
              className={`brutalist-shadow mt-6 inline-flex w-full items-center justify-center bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-on-primary transition-all duration-200 ${
                open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              } hover:-translate-y-1 hover:translate-x-1 active:scale-95`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${navItems.length * 40}ms` }}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

