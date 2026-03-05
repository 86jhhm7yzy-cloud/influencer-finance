import Image from "next/image";
import Link from "next/link";

const references = [
  { name: "NewTV", image: "/ref-newtv.png", url: "https://newtvgeneration.com/" },
];

export default function ReferencesSection() {
  return (
    <section className="w-full bg-white py-16">
      <h2
        className="text-center text-2xl font-bold mb-12"
        style={{ color: "#FB1D36" }}
      >
        Referanslar
      </h2>

      <div className="flex justify-center items-center">
        {references.map((ref) => (
          <Link
            key={ref.name}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-110"
          >
            <Image
              src={ref.image}
              alt={ref.name}
              width={160}
              height={80}
              className="object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}