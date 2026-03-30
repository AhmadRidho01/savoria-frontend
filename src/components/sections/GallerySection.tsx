import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";

const galleryItems = [
  {
    id: "1",
    label: "Prasmanan Nusantara",
    large: true,
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
  },
  {
    id: "2",
    label: "Western Fusion",
    large: false,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  },
  {
    id: "3",
    label: "Wedding Elegance",
    large: false,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  },
  {
    id: "4",
    label: "Box Catering",
    large: false,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  },
  {
    id: "5",
    label: "Snack & Dessert",
    large: false,
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
  },
  {
    id: "6",
    label: "Fine Dining",
    large: false,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
];

export default function GallerySection() {
  return (
    <section id="galeri" className="bg-[var(--white)] pt-24 md:pt-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <SectionTag label="Galeri" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)]">
            Momen <em className="italic text-[var(--red)]">Berkesan</em>
            <br />
            Bersama Kami
          </h2>
        </div>

        {/* Grid dengan tinggi row eksplisit */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-1"
          style={{ gridTemplateRows: "repeat(2, 200px)" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden cursor-pointer group"
              style={
                item.large ? { gridColumn: "span 2", gridRow: "span 2" } : {}
              }
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-[var(--red)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs tracking-[4px] uppercase border border-white/60 px-5 py-2.5">
                  Lihat
                </span>
              </div>

              {/* Label slide up */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs tracking-widest uppercase">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-12" data-aos="fade-up">
          <button className="border border-[var(--gold)] text-[var(--gold-dark)] text-xs tracking-widest uppercase px-8 py-4 hover:bg-[var(--gold)] hover:text-white transition-all duration-200">
            Lihat Semua Foto →
          </button>
        </div>
      </div>
    </section>
  );
}
