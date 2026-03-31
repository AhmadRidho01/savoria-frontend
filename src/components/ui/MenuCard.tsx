import Image from "next/image";
import type { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID").format(price);
}

const categoryImages: Record<MenuItem["category"], string> = {
  prasmanan:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  western:
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  wedding:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  box: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
  snack:
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80",
};

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-[var(--white)] border border-[var(--gold)]/15 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Gambar */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={categoryImages[item.category]}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.badge && (
          <div className="absolute top-3 right-3 bg-[var(--red)] text-white text-[10px] tracking-widest uppercase px-3 py-1 z-10">
            {item.badge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-light text-[var(--text)] mb-2">
          {item.name}
        </h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-serif text-xl text-[var(--gold-dark)]">
              Rp {formatPrice(item.price)}
            </span>
            <span className="text-xs text-[var(--text-muted)] ml-1">
              / {item.priceUnit}
            </span>
          </div>
          <button className="border border-[var(--gold)] text-[var(--gold-dark)] text-[10px] tracking-widest uppercase px-4 py-2 hover:bg-[var(--gold)] hover:text-white transition-all duration-200">
            Pilih
          </button>
        </div>
      </div>
    </div>
  );
}
