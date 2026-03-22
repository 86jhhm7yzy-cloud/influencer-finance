"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const references = [
  {
    quote: "Influencer Finance sayesinde ajansımızın ödemelerini çok daha hızlı tahsil etmeye başladık. Uzun vade beklemek artık geçmişte kaldı.",
    name: "Ahmet Yılmaz",
    position: "Kurucu, 24 Ajans",
    logo: "/ref-newtv.png",
  },
  {
    quote: "Platform son derece kullanıcı dostu. Faturalarımızı yükleyip kısa sürede ödeme alabiliyoruz. Tüm influencer arkadaşlarıma tavsiye ediyorum.",
    name: "Cansu Demir",
    position: "İçerik Üreticisi",
    logo: null,
  },
  {
    quote: "Finansal süreçlerimizi Influencer Finance ile yönetmek çok kolaylaştı. Müşteri desteği de oldukça hızlı ve çözüm odaklı.",
    name: "Mert Kaya",
    position: "Genel Müdür, NewTV",
    logo: "/ref-newtv.png",
  },
];

export default function ReferencesSection() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % references.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset: number) =>
    (active + offset + references.length) % references.length;

  return (
    <section className="w-full py-20 px-6 bg-white overflow-hidden">
      {/* Başlık */}
      <h2 className="text-4xl font-black text-center mb-14" style={{ color: "#FF3047" }}>
        Referanslar
      </h2>

      {/* Kartlar */}
      <div className="relative flex items-center justify-center gap-6 max-w-6xl mx-auto">

        {/* Sol kart (soluk) */}
        <div
          className="hidden md:flex flex-col justify-between rounded-3xl p-8 cursor-pointer transition-all duration-500 flex-shrink-0"
          style={{ width: 340, minHeight: 420, background: "#F9F8F6", opacity: 0.5, transform: "scale(0.92)" }}
          onClick={() => setActive(getIndex(-1))}
        >
          <div>
            <span style={{ color: "#9994FF", fontSize: 56, lineHeight: 1 }}>"</span>
            <p className="text-lg leading-relaxed mt-2" style={{ color: "#3D3A8C" }}>
              {references[getIndex(-1)].quote}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div>
              <p className="font-bold text-sm" style={{ color: "#12101F" }}>{references[getIndex(-1)].name}</p>
              <p className="text-xs" style={{ color: "#6B6880" }}>{references[getIndex(-1)].position}</p>
            </div>
            {references[getIndex(-1)].logo && (
              <div className="relative" style={{ width: 80, height: 36 }}>
                <Image src={references[getIndex(-1)].logo!} alt="logo" fill className="object-contain" />
              </div>
            )}
          </div>
        </div>

        {/* Orta kart (aktif) */}
        <div
          className="flex flex-col justify-between rounded-3xl p-8 flex-shrink-0 transition-all duration-500"
          style={{ width: 380, minHeight: 460, background: "#E8E7FF", zIndex: 10, boxShadow: "0 20px 60px rgba(153,148,255,0.2)" }}
        >
          <div>
            <span style={{ color: "#9994FF", fontSize: 64, lineHeight: 1 }}>"</span>
            <p className="text-xl leading-relaxed mt-2" style={{ color: "#3D3A8C" }}>
              {references[active].quote}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div>
              <p className="font-bold text-sm" style={{ color: "#12101F" }}>{references[active].name}</p>
              <p className="text-xs" style={{ color: "#6B6880" }}>{references[active].position}</p>
            </div>
            {references[active].logo ? (
              <div className="relative rounded-xl overflow-hidden" style={{ width: 100, height: 44, background: "#D0CEFF" }}>
                <Image src={references[active].logo!} alt="logo" fill className="object-contain p-2" />
              </div>
            ) : (
              <div className="rounded-xl flex items-center justify-center text-xs font-bold" style={{ width: 100, height: 44, background: "#D0CEFF", color: "#9994FF" }}>
                LOGO ALANI
              </div>
            )}
          </div>
        </div>

        {/* Sağ kart (soluk) */}
        <div
          className="hidden md:flex flex-col justify-between rounded-3xl p-8 cursor-pointer transition-all duration-500 flex-shrink-0"
          style={{ width: 340, minHeight: 420, background: "#F9F8F6", opacity: 0.5, transform: "scale(0.92)" }}
          onClick={() => setActive(getIndex(1))}
        >
          <div>
            <span style={{ color: "#9994FF", fontSize: 56, lineHeight: 1 }}>"</span>
            <p className="text-lg leading-relaxed mt-2" style={{ color: "#3D3A8C" }}>
              {references[getIndex(1)].quote}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div>
              <p className="font-bold text-sm" style={{ color: "#12101F" }}>{references[getIndex(1)].name}</p>
              <p className="text-xs" style={{ color: "#6B6880" }}>{references[getIndex(1)].position}</p>
            </div>
            {references[getIndex(1)].logo && (
              <div className="relative" style={{ width: 80, height: 36 }}>
                <Image src={references[getIndex(1)].logo!} alt="logo" fill className="object-contain" />
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {references.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: active === i ? 24 : 8, height: 8, background: active === i ? "#FF3047" : "rgba(255,48,71,0.25)" }}
          />
        ))}
      </div>
    </section>
  );
}