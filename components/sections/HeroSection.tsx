"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    tab: "AJANSLAR",
    image: "/hero-ajanslar.png",
    highlight: "beklemek yok!",
    title: "Uzun vade süreleri\nbeklemek yok!",
    subtitle: "Kazançlarınızın\nkontrolü elinizde.",
  },
  {
    tab: "INFLUENCERLAR",
    image: "/hero-influencerlar.png",
    highlight: "vakit kaybına son!",
    title: "Tekil ödeme ile\nvakit kaybına son!",
    subtitle: "Ödemelerinizi\nkazanca dönüştürün.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section
      className="w-full overflow-hidden relative"
      style={{ background: "#E8E7FF", minHeight: 560 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center relative" style={{ minHeight: 560 }}>

        {/* ── Fotoğraf (sol) ── */}
        <div className="absolute left-0 bottom-0 flex items-end" style={{ width: "52%", height: "115%" }}>
          <Image
            src={slide.image}
            alt={slide.tab}
            width={700}
            height={480}
            className="object-contain object-bottom select-none"
            style={{ maxHeight: 640 }}
            priority
          />
        </div>

        {/* ── İçerik (sağ) ── */}
        <div className="ml-auto flex flex-col items-start gap-6" style={{ width: "46%" }}>

          {/* Tab switcher */}
          <div
            className="flex rounded-full overflow-hidden text-xs font-bold tracking-widest"
            style={{ border: "1.5px solid rgba(153,148,255,0.4)", background: "rgba(255,255,255,0.5)" }}
          >
            {slides.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => setActive(i)}
                className="px-5 py-2 transition-all duration-300"
                style={{
                  background: active === i ? "#9994FF" : "transparent",
                  color: active === i ? "#fff" : "#9994FF",
                  borderRadius: "9999px",
                }}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* Başlık */}
          <div>
            {slide.title.split("\n").map((line, i) => {
              const isHighlight = line.includes(slide.highlight);
              return (
                <div key={i} className="relative inline-block">
                  {isHighlight ? (
                    <span
                      className="block text-4xl md:text-5xl font-black leading-tight"
                      style={{ color: "#3D3A8C" }}
                    >
                      {/* Altı çizgili vurgulu kısım */}
                      <span className="relative inline-block">
                        {line}
                        <svg
                          className="absolute -bottom-1 left-0 w-full"
                          viewBox="0 0 300 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ height: 10 }}
                        >
                          <path
                            d="M2 8 Q75 2 150 7 Q225 12 298 6"
                            stroke="#9994FF"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      </span>
                    </span>
                  ) : (
                    <span
                      className="block text-4xl md:text-5xl font-black leading-tight"
                      style={{ color: "#3D3A8C" }}
                    >
                      {line}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Alt yazı */}
          <div>
            {slide.subtitle.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-3xl md:text-4xl font-black leading-tight"
                style={{ color: "#3D3A8C" }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTA Butonu */}
          <Link
            href="/register"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-sm tracking-widest transition-opacity duration-200 hover:opacity-90"
            style={{ background: "#FF3047" }}
          >
            BİZE KATIL
            <span className="text-base">↗</span>
          </Link>
        </div>

        {/* ── Dot indicators ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                background: active === i ? "#9994FF" : "rgba(153,148,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}