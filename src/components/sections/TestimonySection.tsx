"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SectionTag from "@/components/ui/SectionTag";
import TestimonyCard from "@/components/ui/TestimonyCard";
import { testimonies } from "@/constants/testimony";

export default function TestimonySection() {
  return (
    <section
      id="testimoni"
      className="bg-[var(--cream)] py-24 md:py-32 px-[5%]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <SectionTag label="Testimoni" />
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.15] text-[var(--text)]">
            Kata Mereka tentang{" "}
            <em className="italic text-[var(--red)]">Savoria</em>
          </h2>
          <div className="w-12 h-px bg-[var(--gold)] mx-auto my-6" />
          <p className="text-[var(--text-muted)] font-light text-base max-w-lg mx-auto leading-relaxed">
            Kepercayaan lebih dari 1.000 klien adalah motivasi terbesar kami
            untuk terus berkembang.
          </p>
        </div>

        {/* Swiper */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonies.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <TestimonyCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
