"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LinkButton from "./LinkButton";

const NAV = [
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#anxiety-therapy", label: "Anxiety Therapy" },
      { href: "/services#trauma-therapy-emdr", label: "Trauma Therapy & EMDR" },
      { href: "/services#burnout-perfectionism", label: "Burnout & Perfectionism" },
    ],
  },
  { href: "/#office", label: "Our Office" },
  { href: "/faqs", label: "FAQs" },
];

function isActive(pathname, href) {
  const base = href.split("#")[0];
  if (base === "/" || base === "") return false;
  return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href) =>
    `block py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
      isActive(pathname, href)
        ? "text-ink underline decoration-ink/70 underline-offset-[10px]"
        : "text-muted hover:text-ink"
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "border-line shadow-[0_10px_30px_rgba(28,56,46,0.08)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-wide items-center justify-between gap-8 px-6 py-4 md:px-10 md:py-5">
          <Link href="/" className="group shrink-0" aria-label="Dr. Maya Reynolds, PsyD — home">
            <span className="block font-serif text-[1.4rem] leading-none text-primary-deep transition-colors group-hover:text-primary md:text-[1.55rem]">
              Maya Reynolds
            </span>
            <span className="mt-1.5 block text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-muted md:text-[0.64rem]">
              PsyD · Santa Monica
            </span>
          </Link>

          <nav aria-label="Main" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV.map((item) => (
                <li key={item.href} className="group relative">
                  <Link href={item.href} className={linkClass(item.href)}>
                    {item.label}
                    {item.children && (
                      <span className="ml-1.5 inline-block text-[0.6rem]" aria-hidden="true">
                        ▾
                      </span>
                    )}
                  </Link>

                  {item.children && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
                      <ul className="rounded-sm border border-line bg-paper p-3 shadow-card">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-3 py-2.5 text-[0.9rem] text-ink transition-colors hover:bg-secondary hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden rounded-full border border-ink/45 px-8 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:border-primary hover:text-primary sm:block"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-haspopup="dialog"
              className="group flex h-6 w-8 flex-col justify-center gap-[5px] lg:hidden"
            >
              <span className="sr-only">Open Menu</span>
              <span
                className="h-px w-full bg-ink transition-colors group-hover:bg-accent"
                aria-hidden="true"
              />
              <span
                className="h-px w-full bg-ink transition-colors group-hover:bg-accent"
                aria-hidden="true"
              />
              <span
                className="h-px w-2/3 bg-ink transition-colors group-hover:bg-accent"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-transform duration-500 ease-out lg:hidden ${
          open ? "translate-y-0" : "pointer-events-none -translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto bg-primary-deep text-primary-mist">
          <div className="mx-auto flex w-full max-w-wide items-center justify-between px-6 py-5 md:px-10">
            <span className="font-serif text-[1.3rem] text-white">Maya Reynolds, PsyD</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="group relative h-6 w-8"
              aria-label="Close Menu"
            >
              <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-primary-mist transition-colors group-hover:bg-accent-soft" />
              <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-primary-mist transition-colors group-hover:bg-accent-soft" />
            </button>
          </div>

          <nav
            className="mx-auto w-full max-w-site flex-1 px-6 pb-10 md:px-10"
            role="dialog"
            aria-modal="true"
            aria-label="Site"
          >
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {NAV.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="group flex items-baseline gap-5 py-5 transition-colors hover:text-accent-soft"
                  >
                    <span className="w-6 text-[0.7rem] font-bold tracking-[0.16em] text-white/40">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-3xl leading-tight text-white transition-colors group-hover:text-accent-soft md:text-[2.4rem]">
                      {item.label}
                    </span>
                  </Link>
                  {item.children && (
                    <ul className="mb-5 pl-11">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            tabIndex={open ? 0 : -1}
                            className="block py-2 text-[0.95rem] text-primary-light/80 transition-colors hover:text-accent-soft"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-8 text-[0.92rem] md:grid-cols-2">
              <div>
                <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/45">
                  Office
                </div>
                <p className="text-primary-light">
                  45 W 123rd Street
                  <br />
                  Santa Monica, CA 90401
                </p>
                <p className="mt-3 text-primary-light/80">
                  In-person sessions · secure telehealth across California
                </p>
              </div>
              <div>
                <div className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/45">
                  Get in touch
                </div>
                <p className="text-primary-light">
                  Phone: [TO FILL]
                  <br />
                  Email: [TO FILL]
                </p>
                <LinkButton
                  href="/contact"
                  variant="light"
                  className="mt-5"
                  tabIndex={open ? 0 : -1}
                >
                  Request a Consultation
                </LinkButton>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
