"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

type NavLink = { href: string; label: string };

export function Header({ links }: { links: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="#"
          onClick={closeMenu}
          className="text-sm font-medium text-[var(--foreground)] transition hover:opacity-80 focus:outline-none focus-visible:opacity-100"
        >
          Muhammad Murtaza
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-6 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="nav-link text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus-visible:text-[var(--foreground)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)] transition hover:border-indigo-500/50 hover:bg-indigo-500/10 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl transition-[height,opacity] duration-200 md:hidden ${isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="flex flex-col px-4 py-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="nav-link block py-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus-visible:text-[var(--foreground)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
