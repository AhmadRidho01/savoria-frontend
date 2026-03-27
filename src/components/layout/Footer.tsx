// src/components/layout/Footer.tsx
import Link from "next/link";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Tentang Kami", href: "/#tentang" },
  { label: "Menu & Paket", href: "/#menu" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Kontak", href: "/#kontak" },
];

const services = [
  "Catering Wedding",
  "Catering Korporat",
  "Box Catering",
  "Fine Dining Event",
  "Snack & Dessert",
];

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
];

const contacts = [
  { icon: "📍", text: "Jl. Sudirman No. 88,\nJakarta Selatan 12190" },
  { icon: "📞", text: "+62 812-3456-7890" },
  { icon: "📧", text: "hello@savoriacatering.id" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white/60">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[var(--gold)]/10">
          {/* Brand */}
          <div>
            <div className="font-serif text-3xl font-light text-white mb-4">
              Savoria<span className="text-[var(--gold)]">.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Menghadirkan pengalaman kuliner premium untuk setiap momen spesial
              Anda di seluruh Indonesia.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 border border-[var(--gold)]/30 flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
              Layanan
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/50">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[var(--gold)] mb-6">
              Kontak
            </h4>
            <div className="flex flex-col gap-4">
              {contacts.map((item) => (
                <div key={item.icon} className="flex gap-3 items-start">
                  <span className="text-[var(--gold)] text-sm mt-0.5 flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm leading-relaxed whitespace-pre-line">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © 2024 <span className="text-[var(--gold)]">Savoria Catering</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed with ♥ for your special moments
          </p>
        </div>
      </div>
    </footer>
  );
}
