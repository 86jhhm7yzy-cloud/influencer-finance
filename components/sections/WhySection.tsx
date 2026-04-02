"use client";

import Image from "next/image";

const features = [
  { icon: "/rocket-icon.png", text: "Uzayan vadeler yerine hızlı ödeme", underline: "hızlı ödeme" },
  { icon: "/para-icon.png", text: "Daha güçlü nakit akışı", underline: "nakit akışı" },
  { icon: "/hedef-icon.png", text: "Daha fazla kontrol, daha az bekleme", underline: "Daha fazla kontrol" },
];

export default function WhySection() {
  return (
    <section className="w-full bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Üst blok: Görsel sol, metin sağ */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Sol: Görsel + vektör arka plan */}
          <div className="relative flex-shrink-0" style={{ width: 340, height: 440 }}>
            {/* Arka vektör */}
            <div className="absolute" style={{ width: 280, height: 380, bottom: 0, left: 0, zIndex: 0 }}>
              <Image
                src="/arka-vector.png"
                alt=""
                fill
                className="object-contain object-bottom"
              />
            </div>
            {/* Kişi görseli */}
            <div className="absolute" style={{ width: 320, height: 440, bottom: 0, left: 10, zIndex: 1 }}>
              <Image
                src="/deneme-erkek.png"
                alt="Influencer Finance Kullanıcısı"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Sağ: Metin */}
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: "#3D3A8C" }}>
              Ödemeni bekleme,{" "}
              <span className="relative inline-block">
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
          <div className="flex flex-col gap-3 flex-1">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-full"
                style={{
                  border: "1px solid rgba(255, 84, 103, 0.25)",
                  background: "rgba(255, 239, 241, 0.5)",
                  backdropFilter: "blur(8px)",
                  height: 64,
                }}
              >
                <div className="relative flex-shrink-0" style={{ width: 32, height: 32 }}>
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <span className="font-bold text-base" style={{ color: "#FF3047" }}>
                  {item.text.split(item.underline).map((part, j, arr) => (
                    j < arr.length - 1 ? (
                      <span key={j}>
                        {part}
                        <span className="underline">{item.underline}</span>
                      </span>
                    ) : part
                  ))}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}