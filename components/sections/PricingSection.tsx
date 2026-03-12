"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PricingSection() {
  const [tutar, setTutar] = useState(100000);
  const [vade, setVade] = useState(30);

  const komisyonOrani = 0.065;
  const gunlukOran = komisyonOrani / 365;
  const efektifGun = 120 - vade;
  const kesinti = Math.round(tutar * gunlukOran * (efektifGun + 1));
  const netTutar = tutar - kesinti;

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">

        {/* Sol: Başlık + Görsel */}
        <div className="flex flex-col gap-6 md:w-72 flex-shrink-0">
          <h2 className="text-4xl font-black leading-tight" style={{ color: "#3D3A8C" }}>
            Ücretlendirme
          </h2>
          <div
            className="cursor-pointer hidden md:block"
            style={{ color: "#3D3A8C", fontSize: 28, fontWeight: 700, width: "fit-content", transformOrigin: "center center", transition: "transform 0.25s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            →
          </div>
          {/* Telefon görseli */}
          <div className="relative w-full hidden md:block" style={{ height: 420 }}>
            <Image
              src="/Influencer-Finance-Arayuz.png"
              alt="Influencer Finance Arayüz"
              fill
              className="object-contain object-top"
            />
          </div>
        </div>

        {/* Sağ: Hesap makinesi kartı */}
        <div className="flex-1">
          <div className="rounded-3xl p-8"
            style={{ background: "#F3F2FF", border: "1px solid #E7EBFF", boxShadow: "0 26px 40px 0 rgba(188,202,255,0.10)" }}>
            <div className="flex flex-col gap-6">

              <div>
                <h3 className="text-xl font-black mb-1" style={{ color: "#3D3A8C" }}>Fatura Finansmanı Hesapla</h3>
                <p className="text-sm" style={{ color: "#6B6880" }}>Vade ne kadar kısaysa komisyon o kadar artar.</p>
              </div>

              {/* Tutar slider */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#9994FF" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#9994FF" }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#3D3A8C" }}>
                    İşlem tutarı — <span className="font-black">{tutar.toLocaleString("tr-TR")} TL</span>
                  </span>
                </div>
                <div className="relative w-full" style={{ height: 20 }}>
                  <div className="absolute w-full rounded-full" style={{ background: "#3D3A8C", height: "1px", top: "50%", transform: "translateY(-50%)" }} />
                  <input type="range" min={10000} max={1000000} step={10000} value={tutar}
                    onChange={(e) => setTutar(Number(e.target.value))}
                    className="absolute w-full appearance-none cursor-pointer"
                    style={{ accentColor: "#9994FF", background: "transparent", top: "50%", transform: "translateY(-50%)" }} />
                </div>
                <div className="flex justify-between text-xs" style={{ color: "#A8A5C0" }}>
                  <span>10.000 TL</span><span>1.000.000 TL</span>
                </div>
              </div>

              {/* Vade slider */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#9994FF" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "#9994FF" }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "#3D3A8C" }}>
                    <span className="font-black">{vade} gün</span> vade
                  </span>
                </div>
                <div className="relative w-full" style={{ height: 20 }}>
                  <div className="absolute w-full rounded-full" style={{ background: "#3D3A8C", height: "1px", top: "50%", transform: "translateY(-50%)" }} />
                  <input type="range" min={1} max={120} step={1} value={vade}
                    onChange={(e) => setVade(Number(e.target.value))}
                    className="absolute w-full appearance-none cursor-pointer"
                    style={{ accentColor: "#9994FF", background: "transparent", top: "50%", transform: "translateY(-50%)" }} />
                </div>
                <div className="flex justify-between text-xs" style={{ color: "#A8A5C0" }}>
                  <span>1 gün</span><span>120 gün</span>
                </div>
              </div>

              {/* Sonuç */}
              <div className="flex items-center justify-between gap-4 rounded-2xl p-5"
                style={{ background: "white", border: "1px solid #E7EBFF" }}>
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: "#A8A5C0" }}>Komisyon</p>
                  <p className="text-lg font-bold" style={{ color: "#FF3047" }}>
                    -{kesinti.toLocaleString("tr-TR")} TL
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#A8A5C0" }}>
                    {efektifGun + 1} gün erken ödeme × %{(gunlukOran * 100).toFixed(4)} (günlük)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium mb-1" style={{ color: "#A8A5C0" }}>Alacağın tutar</p>
                  <p className="text-3xl font-black" style={{ color: "#3D3A8C" }}>
                    {netTutar.toLocaleString("tr-TR")} TL
                  </p>
                </div>
              </div>

              <p className="text-xs text-center" style={{ color: "#A8A5C0" }}>
                * Bu hesaplama bilgi amaçlıdır. Gerçek tutar başvuru sonrası netleşir.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}