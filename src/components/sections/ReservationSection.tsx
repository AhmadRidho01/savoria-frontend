"use client";

import { useState } from "react";
import type { OrderForm, BookingForm } from "@/types";
import SectionTag from "@/components/ui/SectionTag";

type FormTab = "order" | "booking";

const contactInfo = [
  { icon: "📞", label: "Telepon & WhatsApp", value: "+62 812-3456-7890" },
  { icon: "📧", label: "Email", value: "hello@savoriacatering.id" },
  {
    icon: "📍",
    label: "Kantor Pusat",
    value: "Jl. Sudirman No. 88, Jakarta Selatan",
  },
  {
    icon: "🕐",
    label: "Jam Operasional",
    value: "Senin – Sabtu, 08.00 – 20.00 WIB",
  },
];

const packageOptions = [
  { value: "", label: "-- Pilih Paket --" },
  { value: "prasmanan", label: "Prasmanan Nusantara" },
  { value: "western", label: "Western Fusion" },
  { value: "wedding", label: "Wedding Elegance" },
  { value: "box", label: "Box Meeting" },
];

const eventTypeOptions = [
  { value: "", label: "-- Pilih Jenis Event --" },
  { value: "wedding", label: "Pernikahan" },
  { value: "corporate", label: "Event Korporat" },
  { value: "birthday", label: "Ulang Tahun" },
  { value: "seminar", label: "Seminar / Konferensi" },
  { value: "gathering", label: "Gathering" },
  { value: "other", label: "Lainnya" },
];

const initialOrder: OrderForm = {
  fullName: "",
  phone: "",
  packageId: "",
  eventDate: "",
  guestCount: 0,
  notes: "",
};

const initialBooking: BookingForm = {
  ...initialOrder,
  eventType: "",
  eventLocation: "",
};

export default function ReservationSection() {
  const [activeTab, setActiveTab] = useState<FormTab>("order");
  const [orderForm, setOrderForm] = useState<OrderForm>(initialOrder);
  const [bookingForm, setBookingForm] = useState<BookingForm>(initialBooking);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleOrderChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleBookingChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder — nanti diganti dengan API call ke backend
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="pesan" className="bg-[var(--white)] py-24 md:py-32 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <SectionTag label="Pemesanan" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)]">
            Siap Melayani
            <br />
            <em className="italic text-[var(--red)]">Event</em> Anda
          </h2>
          <div className="w-12 h-px bg-[var(--gold)] mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Kolom Kiri — Info Kontak */}
          <div data-aos="fade-right">
            <h3 className="font-serif text-2xl font-light text-[var(--text)] mb-4">
              Hubungi Tim Kami
            </h3>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8">
              Konsultasikan kebutuhan catering Anda dengan tim kami. Kami siap
              membantu dari perencanaan menu hingga eksekusi di hari-H.
            </p>

            {/* Kontak items */}
            <div className="flex flex-col gap-5 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[var(--gold-light)] flex items-center justify-center flex-shrink-0 text-base">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--text)] mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white text-xs tracking-widest uppercase px-6 py-4 hover:bg-[#1ebe5d] transition-colors duration-200"
            >
              <span>💬</span>
              Chat via WhatsApp
            </a>
          </div>

          {/* Kolom Kanan — Form */}
          <div data-aos="fade-left" data-aos-delay="100">
            {/* Tab toggle */}
            <div className="flex border-b border-[var(--gold-light)] mb-8">
              {(["order", "booking"] as FormTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSubmitted(false);
                  }}
                  className={`
                    px-6 py-3 text-xs tracking-widest uppercase border-b-2 -mb-px
                    transition-all duration-200 font-sans
                    ${
                      activeTab === tab
                        ? "border-[var(--red)] text-[var(--red)]"
                        : "border-transparent text-[var(--text-muted)] hover:text-[var(--text)]"
                    }
                  `}
                >
                  {tab === "order" ? "Order Online" : "Book Event"}
                </button>
              ))}
            </div>

            {/* Success state */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="text-5xl">✅</div>
                <h4 className="font-serif text-2xl font-light text-[var(--text)]">
                  Permintaan Terkirim!
                </h4>
                <p className="text-sm text-[var(--text-muted)] max-w-xs leading-relaxed">
                  Tim kami akan menghubungi Anda dalam 1x24 jam. Terima kasih
                  telah mempercayakan event Anda kepada Savoria.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs tracking-widest uppercase text-[var(--gold-dark)] underline underline-offset-4 mt-2"
                >
                  Kirim permintaan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Field bersama — Order & Booking */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      required
                      value={
                        activeTab === "order"
                          ? orderForm.fullName
                          : bookingForm.fullName
                      }
                      onChange={
                        activeTab === "order"
                          ? handleOrderChange
                          : handleBookingChange
                      }
                      className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                      No. WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+62 812 xxxx xxxx"
                      required
                      value={
                        activeTab === "order"
                          ? orderForm.phone
                          : bookingForm.phone
                      }
                      onChange={
                        activeTab === "order"
                          ? handleOrderChange
                          : handleBookingChange
                      }
                      className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Field khusus Book Event */}
                {activeTab === "booking" && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                        Jenis Event
                      </label>
                      <select
                        name="eventType"
                        required
                        value={bookingForm.eventType}
                        onChange={handleBookingChange}
                        className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                      >
                        {eventTypeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                        Lokasi Event
                      </label>
                      <input
                        type="text"
                        name="eventLocation"
                        placeholder="Nama gedung / kota"
                        required
                        value={bookingForm.eventLocation}
                        onChange={handleBookingChange}
                        className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                      />
                    </div>
                  </>
                )}

                {/* Paket */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                    Jenis Paket
                  </label>
                  <select
                    name="packageId"
                    required
                    value={
                      activeTab === "order"
                        ? orderForm.packageId
                        : bookingForm.packageId
                    }
                    onChange={
                      activeTab === "order"
                        ? handleOrderChange
                        : handleBookingChange
                    }
                    className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                  >
                    {packageOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tanggal & Jumlah Tamu */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                      Tanggal Event
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={
                        activeTab === "order"
                          ? orderForm.eventDate
                          : bookingForm.eventDate
                      }
                      onChange={
                        activeTab === "order"
                          ? handleOrderChange
                          : handleBookingChange
                      }
                      className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                      Jumlah Tamu (Pax)
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      placeholder="50"
                      min="1"
                      required
                      value={
                        activeTab === "order"
                          ? orderForm.guestCount || ""
                          : bookingForm.guestCount || ""
                      }
                      onChange={
                        activeTab === "order"
                          ? handleOrderChange
                          : handleBookingChange
                      }
                      className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Catatan */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                    Catatan Tambahan
                  </label>
                  <textarea
                    name="notes"
                    placeholder="Ceritakan detail kebutuhan event Anda..."
                    rows={4}
                    value={
                      activeTab === "order"
                        ? orderForm.notes
                        : bookingForm.notes
                    }
                    onChange={
                      activeTab === "order"
                        ? handleOrderChange
                        : handleBookingChange
                    }
                    className="px-4 py-3 border border-black/10 bg-[var(--bg)] text-sm text-[var(--text)] outline-none focus:border-[var(--gold)] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--red)] hover:bg-[var(--red-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs tracking-widest uppercase transition-all duration-200 mt-2"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Permintaan →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
