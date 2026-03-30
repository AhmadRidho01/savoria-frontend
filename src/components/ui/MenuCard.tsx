import type { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID").format(price);
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-[var(--white)] border border-[var(--gold)]/15 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Gambar */}
      <div className="relative aspect-square bg-gradient-to-br from-[var(--cream)] to-[#e8dcc8] flex items-center justify-center overflow-hidden">
        <span className="text-5xl transition-transform duration-500 group-hover:scale-110">
          🍽️
        </span>
        {/* Badge */}
        {item.badge && (
          <div className="absolute top-3 right-3 bg-[var(--red)] text-white text-[10px] tracking-widest uppercase px-3 py-1">
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

        {/* Footer card */}
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
