"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { navigation } from "@/config/navigation";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import { Brand } from "@/components/shared/brand";
import { OpenStatus } from "@/components/shared/open-status";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /** True when `href` matches the current route (exact for "/", prefix for all others). */
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const links = navigation.main.filter((item) => item.href !== "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes (adjusting state during render, not in an effect)
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-ink-900 transition-[border-color,box-shadow] duration-300",
          scrolled
            ? "border-white/10 shadow-[0_10px_30px_-12px_rgb(5_13_22/0.6)]"
            : "border-white/[0.06]"
        )}
      >
        <div className="container-x flex h-[5rem] items-center justify-between gap-6">
          <Brand inverted preload />

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.map((item, i) => {
              const num = <span className="hidden xl:inline font-mono text-[0.6875rem] text-ink-500">{pad(i + 1)}</span>;
              const linkClass = cn(
                "flex items-center gap-1.5 whitespace-nowrap text-[0.9375rem] font-medium transition-colors",
                isActive(item.href) ? "text-brand-300" : "text-ink-200 hover:text-white"
              );

              if (item.label !== "Services") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={linkClass}
                  >
                    {num}
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((o) => !o)}
                    className={linkClass}
                  >
                    {num}
                    Services
                    <ChevronDown
                      size={15}
                      className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                    />
                  </button>

                  <div
                    id="services-menu"
                    className={cn(
                      "absolute left-1/2 top-full mt-6 w-[44rem] -translate-x-1/2 border border-white/10 bg-ink-900 shadow-lift transition-all duration-200",
                      servicesOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
                    )}
                  >
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 label-mono">
                      <span className="text-brand-300">Departments</span>
                      <span className="text-ink-500">{services.length} specialties</span>
                    </div>
                    <div className="grid grid-cols-2">
                      {services.map((s, j) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          tabIndex={servicesOpen ? 0 : -1}
                          className={cn(
                            "group flex items-baseline gap-4 border-b border-white/[0.06] px-5 py-4 transition-colors",
                            j % 2 === 0 && "border-r",
                            pathname === `/services/${s.slug}` ? "bg-white/[0.04]" : "hover:bg-white/[0.04]"
                          )}
                        >
                          <span className="font-mono text-[0.6875rem] text-ink-500">{pad(j + 1)}</span>
                          <span className="flex-1">
                            <span className="block font-medium text-white">{s.name}</span>
                            <span className="mt-1 block text-[0.8125rem] leading-snug text-ink-400 line-clamp-1">
                              {s.shortDesc}
                            </span>
                          </span>
                          <ArrowUpRight
                            size={15}
                            className="text-ink-500 transition-colors group-hover:text-brand-300"
                          />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      tabIndex={servicesOpen ? 0 : -1}
                      className="flex items-center justify-between px-5 py-4 label-mono text-white hover:text-brand-300"
                    >
                      All services · pathology · endoscopy · pharmacy
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <OpenStatus compact className="hidden 2xl:inline-flex mr-2" />
            <a
              href={`tel:+91${clinic.phone}`}
              className="fx-phone fx-fill fx-press hidden md:flex lg:hidden xl:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white [--fx-fill:var(--color-brand-500)] hover:border-brand-500"
              aria-label={`Call ${clinic.phoneDisplay}`}
              title={clinic.phoneDisplay}
            >
              <Phone size={18} strokeWidth={1.75} />
            </a>
            <Link
              href="/contact#appointment"
              className="btn-primary hidden md:inline-flex h-12 shrink-0 rounded-full px-7 shadow-[0_8px_24px_-8px_rgb(14_150_228/0.7)]"
            >
              Book appointment
            </Link>
            <button
              type="button"
              className="fx-press lg:hidden -mr-2 flex h-11 w-11 items-center justify-center text-white transition-transform"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — outside the header so backdrop-filter doesn't trap position:fixed */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-x-0 top-[5rem] bottom-0 z-40 overflow-y-auto bg-ink-900 transition-[opacity,visibility] duration-200",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="container-x py-8">
          <OpenStatus />
          <ul className="mt-8 border-t border-white/10">
            {navigation.main.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-baseline gap-4 py-5 font-display text-3xl font-semibold tracking-[-0.04em]",
                    isActive(item.href) ? "text-brand-300" : "text-white"
                  )}
                >
                  <span className="font-mono text-xs font-normal tracking-normal text-ink-500">{pad(i + 1)}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 mb-4 label-mono text-brand-300">Departments</p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="rounded border border-white/15 px-3 py-2 text-sm text-ink-200"
              >
                {s.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3">
            <Link href="/contact#appointment" className="btn-primary btn-lg">
              Book appointment <ArrowRight size={16} />
            </Link>
            <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-ghost-light btn-lg">
              <Phone size={16} /> {clinic.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
