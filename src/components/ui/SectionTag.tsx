interface SectionTagProps {
  label: string;
}

export default function SectionTag({ label }: SectionTagProps) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span className="w-7 h-px bg-[var(--gold)]" />
      <span className="text-xs tracking-widest uppercase text-[var(--gold)]">
        {label}
      </span>
    </div>
  );
}
