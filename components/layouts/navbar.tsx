"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function scrollToSection(e: React.MouseEvent, href: string) {
  if (href.startsWith("/#")) {
    e.preventDefault();
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

const NAV_LINKS = [
  { label: "ANA SAYFA", href: "/#hero" },
  { label: "SIKÇA SORULANLAR", href: "/#faq" },
  { label: "ÜCRETLENDİRME", href: "/#pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Influencer Finance"
            width={180}
            height={52}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center">
          <div
            className="flex items-center gap-1 rounded-full px-2 py-2"
            style={{ border: "1.5px solid #9994FF" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest transition-colors duration-200"
                style={{ color: "#9994FF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(153,148,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* ── Right Side ── */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://panel.influencer.finance/auth/login"
            className="px-7 py-3 rounded-full text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
            style={{ background: "#FF3047" }}
          >
            GİRİŞ YAP
          </Link>
          <button
            className="flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#12101F" }}
          >
            TR
          </button>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {menuOpen
            ? <X size={22} color="#12101F" />
            : <Menu size={22} color="#12101F" />
          }
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-semibold tracking-widest"
              style={{ color: "#9994FF" }}
              onClick={(e) => {
                scrollToSection(e, link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://panel.influencer.finance/auth/login"
            className="mt-2 px-7 py-3 rounded-full text-sm font-bold text-white text-center"
            style={{ background: "#FF3047" }}
            onClick={() => setMenuOpen(false)}
          >
            GİRİŞ YAP
          </Link>
        </div>
      )}
    </header>
  );
}