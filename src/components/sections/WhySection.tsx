import SectionTag from "@/components/ui/SectionTag";

const reasons = [
  {
    num: "01",
    icon: "👨‍🍳",
    title: "Chef Berpengalaman",
    desc: "Tim chef kami memiliki rekam jejak di hotel dan restoran bintang lima nasional maupun internasional.",
  },
  {
    num: "02",
    icon: "🛡️",
    title: "Higienis & Bersertifikat",
    desc: "Seluruh proses produksi mengikuti standar HACCP dan telah mendapatkan sertifikasi BPOM resmi.",
  },
  {
    num: "03",
    icon: "⏱️",
    title: "Tepat Waktu, Selalu",
    desc: "Komitmen kami terhadap ketepatan waktu pengiriman adalah janji yang tidak pernah kami ingkari.",
  },
  {
    num: "04",
    icon: "🗺️",
    title: "Jangkauan Nasional",
    desc: "Dengan armada logistik terpadu, kami siap melayani event Anda di 50+ kota seluruh Indonesia.",
  },
  {
    num: "05",
    icon: "✏️",
    title: "Menu Kustomisasi",
    desc: "Setiap event berbeda. Kami menawarkan konsultasi menu gratis untuk menyesuaikan kebutuhan Anda.",
  },
  {
    num: "06",
    icon: "💬",
    title: "Dukungan 24/7",
    desc: "Tim customer service kami siap membantu kapan saja, dari tahap perencanaan hingga hari-H.",
  },
];

export default function WhySection() {
  return (
    <section id="keunggulan" className="bg-[#1A1A1A] py-24 md:py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-16" data-aos="fade-up">
          <SectionTag label="Keunggulan Kami" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-white mb-4">
            Mengapa Memilih{" "}
            <em className="italic text-[var(--gold)]">Savoria?</em>
          </h2>
          <div className="w-12 h-px bg-[var(--gold)] my-6" />
          <p className="text-white/50 font-light text-base leading-relaxed">
            Kami tidak sekadar menyajikan makanan — kami menghadirkan pengalaman
            yang tak terlupakan di setiap event.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--gold)]/10">
          {reasons.map((item, i) => (
            <div
              key={item.num}
              className="group bg-[#1A1A1A] p-10 md:p-12 hover:bg-[#252525] transition-all duration-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Nomor dekoratif */}
              <div
                className="
          font-serif text-6xl font-light leading-none mb-5
          text-[var(--gold)]/15
          transition-all duration-500 ease-out
          group-hover:text-[var(--gold)]
          group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]
          group-hover:-translate-y-2
        "
              >
                {item.num}
              </div>

              {/* Gold accent line */}
              <div className="w-8 h-px bg-[var(--gold)] mb-5" />

              {/* Icon */}
              <div className="text-3xl mb-5">{item.icon}</div>

              {/* Teks */}
              <h3 className="font-serif text-2xl font-light text-white mb-3 group-hover:text-[var(--gold)] transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
