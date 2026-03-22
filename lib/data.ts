import {
  Award,
  BadgeCheck,
  Brush,
  CalendarDays,
  Camera,
  Crown,
  HeartHandshake,
  Leaf,
  MapPin,
  Scissors,
  Sparkles,
  UserRound,
  Waves
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" }
];

export const heroStats = [
  { value: "8am - 7pm", label: "Open Monday to Saturday" },
  { value: "100%", label: "Client-focused styling care" },
  { value: "Tailored", label: "Looks designed around you" }
];

export const services = [
  {
    icon: Scissors,
    title: "Hair Braiding & Cornrows",
    description:
      "Protective styling with neat parts, clean finishes, and comfortable long-wear results.",
    price: "Starting from $25"
  },
  {
    icon: Brush,
    title: "Wig Installation & Styling",
    description:
      "Secure installs, natural blends, and styling tailored to the look you want.",
    price: "Starting from $40"
  },
  {
    icon: Waves,
    title: "Hair Cutting & Trimming",
    description:
      "Healthy shaping and maintenance cuts to refresh your hair without losing intention.",
    price: "Starting from $18"
  },
  {
    icon: Sparkles,
    title: "Hair Coloring & Treatments",
    description:
      "Color refresh, repair rituals, and nourishing treatments that support healthy shine.",
    price: "Starting from $35"
  },
  {
    icon: Leaf,
    title: "Natural Hair Care",
    description:
      "Hydration-first styling and maintenance for natural textures, coils, and curls.",
    price: "Starting from $22"
  },
  {
    icon: CalendarDays,
    title: "Bridal & Event Styling",
    description:
      "Elegant styling for weddings, shoots, and special events with lasting finish work.",
    price: "Custom quote"
  }
];

export const aboutHighlights = [
  {
    icon: Award,
    title: "Creative Precision",
    copy: "We combine creativity, professionalism, and attention to detail in every service."
  },
  {
    icon: HeartHandshake,
    title: "Personal Care",
    copy: "From touch-ups to full transformations, every client gets a tailored salon experience."
  },
  {
    icon: Camera,
    title: "Confidence Boost",
    copy: "Our goal is simple: help you leave the studio feeling confident and beautiful."
  }
];

export const testimonials = [
  {
    quote:
      "I loved my hairstyle. The service was professional and friendly.",
    name: "Happy Client",
    role: "Returning guest"
  },
  {
    quote:
      "Abena Hair Studio made me feel comfortable from start to finish, and my style turned out exactly how I wanted.",
    name: "Satisfied Client",
    role: "New guest"
  },
  {
    quote:
      "The stylists were warm, skilled, and professional. I will definitely be coming back.",
    name: "Loyal Client",
    role: "Event styling guest"
  }
];

export const galleryPlaceholders = [
  {
    title: "Before & After",
    alt: "Placeholder for transformation photos",
    note: "Insert before-and-after client result photos here."
  },
  {
    title: "Braids & Cornrows",
    alt: "Placeholder for braid portfolio images",
    note: "Use real braid and cornrow work from the salon."
  },
  {
    title: "Wig Install Results",
    alt: "Placeholder for wig installation images",
    note: "Show clean install details and styled finishes."
  },
  {
    title: "Bridal Styling",
    alt: "Placeholder for bridal styling images",
    note: "Feature wedding looks and special event transformations."
  },
  {
    title: "Natural Hair Care",
    alt: "Placeholder for natural hair service photos",
    note: "Highlight real clients and healthy natural hair results."
  },
  {
    title: "Client Smiles",
    alt: "Placeholder for happy client photos",
    note: "Real client reactions build trust and increase bookings."
  }
];

export const galleryImages = [
  {
    src: "/gallery/finger_waves_before.jpg",
    alt: "Finger waves hairstyle - defined waves with shiny finish",
    title: "Classic Finger Waves"
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    alt: "Woman smiling with voluminous curls",
    title: "Soft Defined Curls"
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of highlighted hair",
    title: "Sunlit Color Blend"
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
    alt: "Woman with elegant event hairstyle",
    title: "Event Styling Elegance"
  },
  {
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    alt: "Woman with sleek straightened hair",
    title: "Silk Press Finish"
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    alt: "Happy woman with styled natural hair",
    title: "Natural Texture Glow"
  }
];

export const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Experienced & Friendly Stylists"
  },
  {
    icon: Sparkles,
    title: "Clean & Comfortable Environment"
  },
  {
    icon: Crown,
    title: "Affordable & Quality Services"
  },
  {
    icon: HeartHandshake,
    title: "Personalized Hair Consultation"
  },
  {
    icon: Award,
    title: "Customer Satisfaction Guaranteed"
  }
];

export const teamMembers = [
  {
    icon: UserRound,
    name: "Stylist Name",
    specialty: "Braids & protective styling",
    note: "Replace with real stylist photo."
  },
  {
    icon: UserRound,
    name: "Stylist Name",
    specialty: "Wig installation & finishing",
    note: "Replace with real stylist photo."
  },
  {
    icon: UserRound,
    name: "Stylist Name",
    specialty: "Color, treatment & natural hair care",
    note: "Replace with real stylist photo."
  }
];

export const locationInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "[Your Area in Accra]"
  },
  {
    icon: CalendarDays,
    label: "Opening Hours",
    value: "Mon-Sat: 8am - 7pm"
  }
];

export const bookingOptions = [
  "Hair Braiding & Cornrows",
  "Wig Installation & Styling",
  "Hair Cutting & Trimming",
  "Hair Coloring & Treatments",
  "Bridal & Event Styling"
];

export const faqs = [
  {
    question: "How far ahead should I book?",
    answer:
      "For weekend or color appointments, we recommend booking 1 to 2 weeks ahead. Midweek styling is usually easier to secure."
  },
  {
    question: "Do you welcome natural and textured hair?",
    answer:
      "Yes. The studio is designed for curls, coils, waves, relaxed hair, and silk press services with texture-conscious care."
  },
  {
    question: "Can I request bridal packages?",
    answer:
      "Yes. Bridal requests can be submitted through the booking page and we will follow up with a tailored quote and schedule."
  }
];
