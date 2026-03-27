import type { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Paket Prasmanan Nusantara",
    description:
      "Pilihan lengkap masakan khas Indonesia, cocok untuk 50–500 tamu.",
    price: 45000,
    priceUnit: "pax",
    category: "prasmanan",
    image: "/images/menu-prasmanan.jpg",
    badge: "Terlaris",
  },
  {
    id: "2",
    name: "Paket Western Fusion",
    description:
      "Perpaduan cita rasa barat dan lokal untuk event korporat eksklusif.",
    price: 75000,
    priceUnit: "pax",
    category: "western",
    image: "/images/menu-western.jpg",
  },
  {
    id: "3",
    name: "Paket Wedding Elegance",
    description:
      "Menu premium untuk hari spesial Anda dengan presentasi fine dining.",
    price: 120000,
    priceUnit: "pax",
    category: "wedding",
    image: "/images/menu-wedding.jpg",
    badge: "Populer",
  },
  {
    id: "4",
    name: "Paket Box Meeting",
    description: "Nasi box berkualitas untuk rapat dan seminar korporat Anda.",
    price: 35000,
    priceUnit: "pax",
    category: "box",
    image: "/images/menu-box.jpg",
  },
];
