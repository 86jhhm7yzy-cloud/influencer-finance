"use client";

import { useState } from "react";

const cards = [
  {
    id: 0,
    tag: "AJANS",
    color: "#FFF7E3",
    borderColor: "#F5E6C0",
    description:
      "Ödemelerinizi kredi kartı ile yapabilir ve ortaklığı modeliyle sürekli gelir iş ortaklığı modeliyle sürekli gelir yaratabilirsiniz. Nakit akışınızı rahatlatın, operasyonunuzu hızlandırın.",
    cta: "Tek panelden toplu ödeme yapın, ödeme sürecini gelir modeline dönüştürün.",
    rotate: "-rotate-3",
    translateY: "translate-y-6",
  },
  {
    id: 1,
    tag: "MICRO\nINFLUENCER",
    color: "#ECEBFFF",
    borderColor: "#C9C6ED",
    description:
      "Link ile Tahsilat modeli sayesinde oluşturduğunuz ödeme linkini marka veya ajansla paylaşabilir, ödemenizi anında alabilirsiniz.",
    cta: "Link oluştur, gönder, tahsil et.",
    rotate: "rotate-1",
    translateY: "translate-y-2",
  },
  {
    id: 2,
    tag: "MACRO\nINFLUENCER",
    color: "#FFEFF1",
    borderColor: "#F5C6C6",
    description:
      "Tanıtım ödemelerinizi kredi kartı ile alabilir, ajansınıza kestiğiniz faturanızı sisteme yükleyip vade beklemeden kazancınızı hesabınıza aktarabilirsiniz.",
    cta: "Faturanı yükle, vade bekleme, kazancını hemen al.",
    rotate: "rotate-6",
    translateY: "-translate-y-2",
  },
];

export default function CardsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Kartlar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-10">
          {cards.map((card) => {
            const isHovered = hovered === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col justify-between cursor-pointer select-none"
                style={{
                  width: 320,
                  minHeight: 400,
                  background: card.color,
                  border: `1.5px solid ${card.borderColor}`,
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  transform: isHovered
                    ? "rotate(0deg) translateY(0px) scale(1.04)"
                    : undefined,
                  transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
                  boxShadow: isHovered
                    ? "0 20px 60px rgba(18,16,31,0.13)"
                    : "0 4px 20px rgba(18,16,31,0.06)",
                }}
              >
                {/* Rotate uygulama — hover'da sıfırlanıyor */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    isHovered ? "rotate-0 translate-y-0" : `${card.rotate} ${card.translateY}`
                  }`}
                  style={{
                    background: card.color,
                    border: `1.5px solid ${card.borderColor}`,
                    borderRadius: "1.25rem",
                    zIndex: 0,
                  }}
                />

                {/* İçerik */}
                <div className="relative z-10 flex flex-col gap-4 h-full">
                  {/* Icon alanı — sonra eklenecek */}
                  <div
                    className="rounded-xl mb-2"
                    style={{ height: 80, background: "rgba(153,148,255,0.08)" }}
                  />

                  {/* Tag */}
                  <div>
                    {card.tag.split("\n").map((line, i) => (
                      <p
                        key={i}
                        className="text-sm font-black tracking-widest"
                        style={{ color: "#4B47A3" }}
                      >
                        {line}
                      </p>
                    ))}
                    {/* Alt çizgi */}
                    <div
                      className="mt-2 rounded-full"
                      style={{ width: 32, height: 3, background: "#9994FF" }}
                    />
                  </div>

                  {/* Açıklama */}
                  <p className="text-sm leading-relaxed" style={{ color: "#5C5880" }}>
                    {card.description}
                  </p>

                  {/* CTA */}
                  <p className="text-sm font-bold mt-auto" style={{ color: "#3D3A8C" }}>
                    {card.cta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}