"use client";

import Image from "next/image";

export default function WhySection() {
  return (
    <section className="w-full bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Üst blok: Görsel sol, metin sağ */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Sol: Görsel */}
          <div className="relative flex-shrink-0" style={{ width: 340, height: 420 }}>
            {/* Pembe arka plan kutusu */}
            <div className="absolute" style={{ width: 260, height: 340, background: "#FFE8EC", borderRadius: 24, bottom: 0, left: 0 }} />
            <Image
              src="/deneme-erkek.png"
              alt="Influencer Finance Kullanıcısı"
              width={320}
              height={420}
              className="relative z-10 object-contain object-bottom"
              style={{ position: "relative" }}
            />
          </div>

          {/* Sağ: Metin */}
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: "#3D3A8C" }}>
              Ödemeni bekleme,{" "}
              <span className="relative inline-block" style={{ color: "#3D3A8C" }}>
                üretmeye devam et.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 16" fill="none">
                  <ellipse cx="200" cy="8" rx="198" ry="7" stroke="#9994FF" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#6B6880", maxWidth: 480 }}>
              İçerik üreticileri için en büyük sorunlardan biri, tamamlanan işlerin ödemesini haftalarca beklemek.
              Influencer Finance, uzayan vadeleri daha hızlı, daha esnek ve daha kontrollü bir ödeme deneyimine dönüştürür.
            </p>
          </div>

        </div>

        {/* Alt blok: Metin sol, özellik kartları sağ */}
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Sol: Metin */}
          <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-3xl font-black leading-tight" style={{ color: "#3D3A8C" }}>
              Zamanında ödeme,<br />daha güçlü üretim demek.
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "#6B6880", maxWidth: 340 }}>
              Influencer Finance ile nakit akışını rahatlatır, planlamanı kolaylaştırır, odağını beklemeye değil üretmeye taşırsın.
            </p>
          </div>

          {/* Sağ: Özellik kartları */}
          <div className="flex flex-col gap-4 flex-1">
            {[
              { icon: "🚀", text: "Uzayan vadeler yerine hızlı ödeme" },
              { icon: "💰", text: "Daha güçlü nakit akışı" },
              { icon: "🎯", text: "Daha fazla kontrol, daha az bekleme" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-full"
                style={{ border: "1.5px solid #FF3047", background: "white" }}
              >
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <span className="font-bold text-base" style={{ color: "#FF3047" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}