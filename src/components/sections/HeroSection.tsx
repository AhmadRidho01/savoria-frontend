"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { num: "500+", label: "Event Sukses" },
  { num: "50+", label: "Kota Layanan" },
  { num: "98%", label: "Kepuasan Klien" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-[750px] md:min-h-screen flex items-center overflow-hidden bg-[#1a1008]"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--gold) 0,
            var(--gold) 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Foto hero — kanan */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
          alt="Fine dining presentation"
          fill
          sizes="50vw"
          className="object-cover opacity-40"
          priority
        />
        {/* Gradient overlay agar menyatu dengan background kiri */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008] via-[#1a1008]/10 to-transparent" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008] via-[#1a1008]/80 to-transparent" />

      {/* Konten Utama */}
      <div className="relative z-10 px-[5%] max-w-2xl">
        <div
          className={`inline-flex items-center gap-3 mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-8 h-px bg-[var(--gold)]" />
          <span className="text-xs tracking-widest uppercase text-[var(--gold)]">
            Premium Catering Service
          </span>
        </div>

        <h1
          className={`font-serif font-light text-white leading-[1.1] mb-6 text-5xl md:text-6xl lg:text-7xl transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Cita Rasa <em className="italic text-[var(--gold)]">Terbaik</em>
          <br />
          untuk Setiap
          <br />
          <em className="italic text-[var(--gold)]">Momen</em> Spesial
        </h1>

        <p
          className={`text-white/60 font-light text-base md:text-lg leading-relaxed max-w-md mb-10 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Menghadirkan pengalaman kuliner bintang lima langsung ke acara Anda —
          dari gathering korporat hingga perayaan pernikahan paling intim.
        </p>

        <div
          className={`flex flex-wrap gap-4 items-center transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Link
            href="/#pesan"
            className="bg-[var(--red)] hover:bg-[var(--red-dark)] text-white text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </Link>
          <Link
            href="/#menu"
            className="border border-[var(--gold)]/40 hover:border-[var(--gold)] text-white/70 hover:text-[var(--gold)] text-xs tracking-widest uppercase px-8 py-4 transition-all duration-200"
          >
            Lihat Menu
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className={`absolute bottom-10 left-[5%] z-10 flex gap-12 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="font-serif text-4xl font-light text-[var(--gold)] leading-none">
              {stat.num}
            </div>
            <div className="text-xs tracking-widest uppercase text-white/40 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
