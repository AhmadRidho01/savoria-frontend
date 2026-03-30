import SectionTag from "@/components/ui/SectionTag";

const clients = [
  { id: "1", name: "Perusahaan Alpha", initial: "PA" },
  { id: "2", name: "Beta Corporation", initial: "BC" },
  { id: "3", name: "Gamma Group", initial: "GG" },
  { id: "4", name: "Delta Industries", initial: "DI" },
  { id: "5", name: "Epsilon Holdings", initial: "EH" },
  { id: "6", name: "Zeta Partners", initial: "ZP" },
  { id: "7", name: "Eta Ventures", initial: "EV" },
  { id: "8", name: "Theta Capital", initial: "TC" },
  { id: "9", name: "Iota Solutions", initial: "IS" },
  { id: "10", name: "Kappa Enterprise", initial: "KE" },
];

export default function ClientsSection() {
  return (
    <section id="klien" className="bg-[var(--bg)] py-24 md:py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionTag label="Klien Kami" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)]">
            Dipercaya oleh
            <br />
            <em className="italic text-[var(--red)]">Perusahaan Terkemuka</em>
          </h2>
          <div className="w-12 h-px bg-[var(--gold)] mx-auto my-6" />
          <p className="text-[var(--text-muted)] font-light text-base max-w-lg mx-auto leading-relaxed">
            Bergabung bersama ratusan perusahaan dan individu yang telah
            mempercayakan momen spesial mereka kepada Savoria.
          </p>
        </div>

        {/* Grid Klien */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[var(--gold-light)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-[var(--bg)] hover:bg-[var(--cream)] transition-colors duration-300 px-6 py-8 flex flex-col items-center justify-center gap-3 group"
            >
              {/* Logo placeholder — ganti dengan <Image> saat logo real tersedia */}
              <div className="w-14 h-14 rounded-full bg-[var(--cream)] group-hover:bg-[var(--white)] border border-[var(--gold-light)] flex items-center justify-center transition-colors duration-300">
                <span className="font-serif text-base font-semibold text-[var(--gold-dark)] tracking-wider">
                  {client.initial}
                </span>
              </div>
              <span className="text-xs text-[var(--text-muted)] tracking-wide text-center leading-snug group-hover:text-[var(--text)] transition-colors duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Stats bawah */}
        <div
          className="grid grid-cols-3 gap-px bg-[var(--gold-light)] mt-px"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { num: "200+", label: "Klien Korporat" },
            { num: "800+", label: "Klien Individual" },
            { num: "15+", label: "Provinsi Terlayani" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--bg)] py-8 flex flex-col items-center justify-center gap-2"
            >
              <span className="font-serif text-4xl font-light text-[var(--gold-dark)]">
                {stat.num}
              </span>
              <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
