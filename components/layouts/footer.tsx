import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full px-6 pt-20 pb-10"
      style={{ background: "#FB1D36" }}
    >
      {/* ── Üst: CTA ── */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
          Her zaman <span className="font-black">Buradayız.</span>
        </h2>
        <p className="text-white/80 text-base mb-10">
          Bize sadece merhaba demek için ya da talep öneri ve soruların için ulaşabilirsin.
        </p>
        <Link
          href="mailto:hello@influencer.finance"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-200 hover:scale-105"
          style={{ background: "white", color: "#FB1D36" }}
        >
          <span>👀</span>
          Bizimle iletişime geç.
        </Link>
      </div>

      {/* ── Alt: Logo + Copyright + Sosyal ── */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Influencer Finance"
            width={160}
            height={46}
            className="h-11 w-auto brightness-0 invert"
          />
        </Link>

        {/* Copyright */}
        <p className="text-white/70 text-sm text-center">
          © 2026 Influencer Finance. All Rights Reserved.
        </p>

        {/* Sosyal medya */}
        <div className="flex items-center gap-3">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/influencer.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/20"
            style={{
              width: 40,
              height: 40,
              border: "1.5px solid rgba(255,255,255,0.5)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/company/influencer-finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/20"
            style={{
              width: 40,
              height: 40,
              border: "1.5px solid rgba(255,255,255,0.5)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  );
}