"use client";

import SectionTag from "@/components/ui/SectionTag";
import MenuCard from "@/components/ui/MenuCard";
import { useMenuFilter } from "@/hooks/useMenuFilter";
import { menuItems } from "@/constants/menu";

const tabs = [
  { label: "Semua", value: "semua" },
  { label: "Prasmanan", value: "prasmanan" },
  { label: "Western", value: "western" },
  { label: "Wedding", value: "wedding" },
  { label: "Box Catering", value: "box" },
  { label: "Snack & Dessert", value: "snack" },
] as const;

export default function MenuSection() {
  const { active, setActive, filtered } = useMenuFilter(menuItems);

  return (
    <section id="menu" className="bg-[var(--bg)] py-24 md:py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          data-aos="fade-up"
        >
          <div>
            <SectionTag label="Pilihan Menu" />
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)]">
              Paket <em className="italic text-[var(--red)]">Unggulan</em>
              <br />
              Kami
            </h2>
          </div>
          <button className="self-start md:self-auto border border-[var(--gold)] text-[var(--gold-dark)] text-xs tracking-widest uppercase px-6 py-3 hover:bg-[var(--gold)] hover:text-white transition-all duration-200">
            Lihat Semua Menu →
          </button>
        </div>

        {/* Filter Tabs */}
        <div
          className="relative w-full mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="flex border-b border-[var(--gold-light)] overflow-x-auto scrollbar-none"
            style={{ maxWidth: "100%" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className={`
          flex-shrink-0 px-4 py-3 text-xs tracking-widest uppercase
          border-b-2 -mb-px transition-all duration-200 font-sans
          ${
            active === tab.value
              ? "border-[var(--red)] text-[var(--red)]"
              : "border-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
          }
        `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Menu */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filtered.length > 0 ? (
            filtered.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full py-20 text-center text-[var(--text-muted)] text-sm tracking-widest uppercase">
              Belum ada menu di kategori ini
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
