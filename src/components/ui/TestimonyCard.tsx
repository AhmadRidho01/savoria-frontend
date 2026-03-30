import type { Testimony } from "@/types";

interface TestimonyCardProps {
  item: Testimony;
}

export default function TestimonyCard({ item }: TestimonyCardProps) {
  return (
    <div className="bg-[var(--white)] border border-[var(--gold)]/15 p-10 h-full flex flex-col relative">
      {/* Tanda kutip dekoratif */}
      <div className="absolute top-4 left-7 font-serif text-8xl text-[var(--gold-light)] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      {/* Bintang */}
      <div className="flex gap-1 mb-5 mt-4 relative z-10">
        {Array.from({ length: item.rating }).map((_, i) => (
          <span key={i} className="text-[var(--gold)] text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Teks testimoni */}
      <p className="text-sm text-[var(--text-muted)] leading-relaxed italic mb-8 flex-1 relative z-10">
        {item.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-[var(--gold-light)] relative z-10">
        <div className="w-11 h-11 rounded-full bg-[var(--cream)] border border-[var(--gold-light)] flex items-center justify-center font-serif text-lg text-[var(--gold-dark)] font-semibold flex-shrink-0">
          {item.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-[var(--text)]">
            {item.name}
          </div>
          <div className="text-xs text-[var(--text-muted)] tracking-wide mt-0.5">
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );
}
