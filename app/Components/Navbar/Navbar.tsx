"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certification", label: "Certs" },
  { href: "#awards", label: "Awards" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-matcha-300/30 dark:border-matcha-700/40 bg-cream/90 dark:bg-dark-bg/90 backdrop-blur-xl shadow-sm transition-colors duration-300">
      <div className="flex items-center justify-between gap-4 sm:gap-6 max-w-6xl mx-auto px-5 sm:px-8 h-14 sm:h-16">
        <a
          href="/"
          className="shrink-0 text-base sm:text-lg lg:text-xl font-bold tracking-tight leading-none"
          onClick={closeMenu}
        >
          <span className="text-matcha-700 dark:text-matcha-300">Veronica </span>
          <span className="text-strawberry-500 dark:text-strawberry-300">Irene</span>
        </a>

        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-chip">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-full border border-matcha-300/30 dark:border-white/10 bg-white/70 dark:bg-white/5 text-matcha-700 dark:text-matcha-50 transition-colors hover:bg-white hover:text-strawberry-700 dark:hover:bg-strawberry-700/20 dark:hover:text-strawberry-300"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiX className="size-5" aria-hidden /> : <HiMenu className="size-5" aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-x-0 top-14 sm:top-16 z-40 transition-all duration-300 ease-out ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-4rem)] bg-black/20 dark:bg-black/40 backdrop-blur-[2px]"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />

        <div
          className={`relative border-b border-matcha-300/30 dark:border-matcha-700/40 bg-cream/95 dark:bg-dark-bg/95 backdrop-blur-xl shadow-lg transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-mobile-link"
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
