"use client";

import { useState } from "react";
import Image from "next/image";

const countries = [
  { name: "TÜRKİYE",    image: "/map-turkiye.png"    },
  { name: "AZERBAYCAN", image: "/map-azerbaijan.png" },
  { name: "ROMANYA",    image: "/map-romania.png"    },
  { name: "YUNANİSTAN", image: "/map-greece.png"     },
];

export default function CountriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="w-full py-16 px-6"
      style={{ background: "#FFEFF1" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">

        {/* ── Sol: Başlık ── */}
        <div className="flex flex-col gap-6 md:w-64 flex-shrink-0">
          <h2
            className="text-3xl font-black leading-tight"
            style={{ color: "#FF3047" }}
          >
            Influencer<br />Finance Nerede?
          </h2>
          <div
  className="cursor-pointer hidden md:block"
  style={{
    color: "#3D3A8C",
    fontSize: 28,
    fontWeight: 700,
    width: "fit-content",
    transformOrigin: "center center",
    transition: "transform 0.25s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.4)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  →
</div>
        </div>

        {/* ── Sağ: Ülkeler ── */}
        <div className="flex flex-row items-end justify-center gap-10 md:gap-16 flex-1">
          {countries.map((country, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={country.name}
                className="flex flex-col items-center gap-3 cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative"
                  style={{
                    width: 80,
                    height: 80,
                    filter: isHovered ? "grayscale(0%) drop-shadow(0 4px 12px rgba(255,48,71,0.25))" : "grayscale(100%)",
                    transform: isHovered ? "scale(1.12) translateY(-4px)" : "scale(1)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className="text-xs font-bold tracking-widest transition-colors duration-300"
                  style={{ color: isHovered ? "#FF3047" : "#9994FF" }}
                >
                  {country.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}