import SectionTag from "@/components/ui/SectionTag";

const galleryItems = [
  {
    id: "1",
    label: "Prasmanan Nusantara",
    large: true,
    bg: "from-[#c8d4b8] to-[#b0c498]",
  },
  {
    id: "2",
    label: "Western Fusion",
    large: false,
    bg: "from-[#d4c8b8] to-[#c4b498]",
  },
  {
    id: "3",
    label: "Wedding Elegance",
    large: false,
    bg: "from-[#b8c8d4] to-[#98b4c4]",
  },
  {
    id: "4",
    label: "Box Catering",
    large: false,
    bg: "from-[#d4b8b8] to-[#c49898]",
  },
  {
    id: "5",
    label: "Snack & Dessert",
    large: false,
    bg: "from-[#c8b8d4] to-[#b498c4]",
  },
  {
    id: "6",
    label: "Fine Dining",
    large: false,
    bg: "from-[#d4d4b8] to-[#c4c498]",
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="bg-[var(--white)] pt-24 md:pt-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <SectionTag label="Galeri" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)]">
            Momen <em className="italic text-[var(--red)]">Berkesan</em>
            <br />
            Bersama Kami
          </h2>
        </div>

        {/* Grid Gallery */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden cursor-pointer group
                ${
                  item.large
                    ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-[400px]"
                    : "aspect-square"
                }
              `}
            >
              {/* Placeholder background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bg} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-[var(--red)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs tracking-[4px] uppercase border border-white/60 px-5 py-2.5">
                  Lihat
                </span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bawah gallery */}
        <div className="text-center py-12" data-aos="fade-up">
          <button className="border border-[var(--gold)] text-[var(--gold-dark)] text-xs tracking-widest uppercase px-8 py-4 hover:bg-[var(--gold)] hover:text-white transition-all duration-200">
            Lihat Semua Foto →
          </button>
        </div>
      </div>
    </section>
  );
}
