"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "what is maisie", href: "/#what-is-maisie" },
  { label: "our story", href: "/our-story" },
  { label: "the first year", href: "/the-first-year" },
  { label: "join the waitlist", href: "/waitlist" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-lilac-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black text-lilac tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac rounded"
          >
            maisie
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(0, 3).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-normal text-ink hover:text-lilac transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className="bg-lilac text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-lilac-dark hover:scale-[1.03] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2"
            >
              join the waitlist
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac rounded"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-lilac flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-semibold text-white hover:text-lilac-light transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
