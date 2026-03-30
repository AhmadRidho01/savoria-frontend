import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";

const features = [
  {
    icon: "🏆",
    title: "Bersertifikat BPOM",
    desc: "Standar higienitas dan keamanan pangan terjamin",
  },
  {
    icon: "🚚",
    title: "Layanan Nasional",
    desc: "Pengiriman ke 50+ kota besar di Indonesia",
  },
  {
    icon: "👨‍🍳",
    title: "Chef Profesional",
    desc: "Tim chef berpengalaman dari hotel bintang lima",
  },
  {
    icon: "📋",
    title: "Menu Kustomisasi",
    desc: "Disesuaikan dengan kebutuhan dan budget Anda",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="bg-[var(--white)] py-24 md:py-32 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Kolom Kiri — Foto */}
        <div className="relative" data-aos="fade-right">
          <div className="absolute -top-4 -left-4 right-4 bottom-4 border border-[var(--gold-light)] -z-0" />

          {/* Foto chef */}
          <div className="relative z-10 aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Chef profesional Savoria"
              fill
              className="object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-[var(--red)] text-white p-6 text-center">
            <span className="font-serif text-4xl font-light block leading-none">
              12+
            </span>
            <span className="text-xs tracking-widest uppercase opacity-80 mt-1 block">
              Tahun Pengalaman
            </span>
          </div>
        </div>

        {/* Kolom Kanan — Teks */}
        <div className="pt-8 md:pt-0" data-aos="fade-left" data-aos-delay="100">
          <SectionTag label="Tentang Kami" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)] mb-4">
            Passion & <em className="italic text-[var(--red)]">Presisi</em>
            <br />
            di Setiap Sajian
          </h2>
          <div className="w-12 h-px bg-[var(--gold)] my-6" />
          <p className="text-[var(--text-muted)] font-light text-base leading-relaxed mb-10 max-w-lg">
            Savoria lahir dari keyakinan bahwa setiap momen berhak mendapatkan
            sajian terbaik. Sejak 2012, kami telah melayani ratusan event dari
            skala intimate hingga ribuan tamu di seluruh Indonesia.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {features.map((feat) => (
              <div key={feat.title} className="flex items-start gap-3">
                <div className="w-9 h-9 flex-shrink-0 bg-[var(--cream)] border border-[var(--gold-light)] flex items-center justify-center text-base">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[var(--text)] mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
