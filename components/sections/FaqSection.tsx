"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Influencer Finance Nedir?",
    answer:
      "Influencer Finance, modern influencer ekonomisi için tasarlanmış yeni nesil bir finansal çözümdür. En basit haliyle; markaların uzun ödeme vadelerini (30-60-90 gün) beklemeden, paranı hak ettiğin an cebine koymanı sağlar. Kazançlarını nasıl alacağın, taşıyacağın ve harcayacağın üzerinde sana tam kontrol sunan, hepsi bir arada bir platformdur. Kısaca; paranı yönetmenin hızlı, esnek ve tamamen dijital yoludur.",
  },
  {
    question: "Erken Ödeme Nasıl Çalışıyor?",
    answer:
      "Markaların ödeme gününü beklemek zorunda değilsin. Influencer Finance sana 'erken ödeme seçenekleri' sunar. Bakiyeni hesabına erken aktarmak istersen, vadeyi beklemeden anında işlem yapabilir ve paranı dilediğin gibi harcamaya başlayabilirsin.",
  },
  {
    question: "Ücretlendirme Modeli Nasıl?",
    answer:
      "Üyelik tamamen ücretsizdir. Parana hemen ihtiyacın olduğunda erken ödeme seçeneğini düşük işlem ücretleriyle kullanabilir, link ile işlem yapmak istediğinde ise sana özel uygun komisyon oranlarından faydalanabilirsin.",
  },
  {
    question: "Güvenli Midir?",
    answer:
      "Evet, Influencer Finance, güvenlik ve şeffaflığı merkeze alarak inşa edilmiştir. Türkiye'deki tüm işlemler, 6493 sayılı Ödeme ve Elektronik Para Hizmetleri Kanunu kapsamında lisanslanmış kuruluşlar aracılığıyla, yasalara tam uyumlu şekilde gerçekleştirilmektedir.",
  },
  {
    question: "Nasıl Dahil Olabilirim?",
    answer:
      "Web sitesi üzerinden başvurunu yapıp profilini oluşturduktan sonra panele giriş yapıp avantajlardan faydalanmaya hemen başlayabilirsin.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section
      className="w-full py-20 px-6"
      style={{
        background: "linear-gradient(135deg, #D1CFFF 0%, #B8B5FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

        {/* ── Sol: Başlık ── */}
        <div className="flex flex-col gap-6 md:w-56 flex-shrink-0 justify-start pt-2">
          <h2
            className="text-4xl font-black leading-tight"
            style={{ color: "#3D3A8C" }}
          >
            Sıkça<br />Sorulanlar
          </h2>
          <div
            className="cursor-pointer"
            style={{
              color: "#3D3A8C",
              fontSize: 28,
              fontWeight: 700,
              display: "inline-block",
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

        {/* ── Sağ: Accordion ── */}
        <div className="flex flex-col gap-3 flex-1">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl cursor-pointer select-none transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
                  padding: isOpen ? "1.5rem" : "1.25rem 1.5rem",
                  boxShadow: isOpen ? "0 8px 32px rgba(61,58,140,0.10)" : "none",
                }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Soru satırı */}
                <div className="flex items-center justify-between gap-4">
                  <p
                    className="text-base transition-all duration-200"
                    style={{
                      color: isOpen ? "#3D3A8C" : "#6B6880",
                      fontWeight: isOpen ? 700 : 400,
                    }}
                  >
                    {faq.question}
                  </p>
                  <span
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: "#9994FF",
                      fontSize: 18,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ⌄
                  </span>
                </div>

                {/* Cevap */}
                {isOpen && (
                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{ color: "#5C5880" }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}