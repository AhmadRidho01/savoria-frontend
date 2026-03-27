export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceUnit: string;
  category: "prasmanan" | "western" | "wedding" | "box" | "snack";
  image: string;
  badge?: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface OrderForm {
  fullName: string;
  phone: string;
  packageId: string;
  eventDate: string;
  guestCount: number;
  notes: string;
}

export interface BookingForm extends OrderForm {
  eventType: string;
  eventLocation: string;
}
