"use client";

import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">

        {/* ── Sol: Başlık ── */}
        <div className="flex flex-col gap-6 md:w-56 flex-shrink-0">
          <h2
            className="text-4xl font-black leading-tight"
            style={{ color: "#3D3A8C" }}
          >
            Ücretlendirme
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

        {/* ── Sağ: Kart ── */}
        <div
          className="flex-1 rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: "#FDFDFD",
            border: "1px solid #E7EBFF",
            boxShadow: "0 26px 40px 0 rgba(188,202,255,0.13)",
          }}
        >
          {/* Arka dekor — hafif mor blob */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: 320,
              height: 200,
              background: "radial-gradient(ellipse at top right, rgba(153,148,255,0.18) 0%, transparent 70%)",
              borderRadius: "0 1.5rem 0 100%",
            }}
          />

          <div className="relative z-10">
            {/* Üst satır: başlık + badge */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3
                className="text-3xl font-black"
                style={{ color: "#12101F" }}
              >
                Hemen Ödeme Al
              </h3>
              <span
                className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  border: "1px solid #3D3A8C",
                  color: "#3D3A8C",
                  background: "transparent",
                }}
              >
                En iyi teklif
              </span>
            </div>

            {/* Açıklama */}
            <p
              className="text-base mb-8"
              style={{ color: "#6B6880", maxWidth: 340 }}
            >
              Linkle ödeme ile cazip oranla ödemeni hemen al.
            </p>

            {/* Alt satır: oran + buton */}
            <div className="flex items-center justify-between gap-6">
              <p
                className="text-5xl font-black"
                style={{ color: "#12101F" }}
              >
                %6.5
              </p>
              <Link
                href="https://panel.influencer.finance/auth/register"
                className="px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "#9994FF" }}
              >
                Hemen Başvur
              </Link>
            </div>

            {/* Alt çizgi */}
            <div
              className="mt-8 rounded-full"
              style={{ height: 1, background: "#E7EBFF" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}