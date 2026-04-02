"use client";

import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full relative overflow-hidden" style={{ background: "#9994FF", minHeight: 420 }}>

      {/* Görsel — ortada, yukarı taşan */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10" style={{ width: 420, height: 520 }}>
        <Image
          src="/Kadın-gorsel.png"
          alt="Influencer Finance"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* İçerik */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center" style={{ minHeight: 420 }}>

        {/* Başlık */}
        <h2 className="text-5xl md:text-7xl font-black leading-tight mb-10" style={{ maxWidth: 900 }}>
          <span className="text-white">Bekleyen </span>
          <span style={{ color: "#1E1B4B" }}>haraket eden</span>
          <br />
          <span className="text-white">ödeme değil, </span>
          <span style={{ color: "#1E1B4B" }}>kazanç.</span>
        </h2>

        {/* Buton */}
        <Link
          href="https://panel.influencer.finance/auth/register"
          className="flex items-center gap-2 px-10 py-5 rounded-full text-white font-bold text-base tracking-widest hover:opacity-90 transition-opacity"
          style={{ background: "#FF3047" }}
        >
          BİZE KATIL <span>↗</span>
        </Link>

      </div>
    </section>
  );
}