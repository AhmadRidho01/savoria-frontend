// src/components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Menu", href: "/#menu" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Klien", href: "/#klien" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[var(--bg)] border-b border-[var(--gold-light)] shadow-sm py-3"
            : "bg-transparent py-5"
        }
      `}
      style={{ width: "100vw", maxWidth: "100%" }}
    >
      {/* Main bar */}
      <div className="w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide text-[var(--text)]"
        >
          Savoria<span className="text-[var(--gold)]">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/#pesan"
            className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200"
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu — full width, no overflow */}
      <div
        className={`
          md:hidden w-full overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96" : "max-h-0"}
        `}
      >
        <div className="w-full bg-[var(--bg)] border-t border-[var(--gold-light)] py-4 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--gold)] hover:bg-[var(--cream)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              href="/#pesan"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-[var(--red)] text-white text-xs tracking-widest uppercase px-6 py-3 text-center"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
