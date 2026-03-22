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
    src: "/gallery/before.jpeg",
    afterSrc: "/gallery/after.jpeg",
    alt: "Client transformation before and after",
    note: "Amazing client transformation showing our styling expertise."
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
    title: "Shampooing",
    alt: "Placeholder for shampooing and hair washing images",
    note: "Show professional shampooing techniques and relaxing hair care experience."
  },
  {
    title: "Client Smiles",
    src: "/gallery/client smiles.jpeg",
    alt: "Happy client with finished hairstyle",
    note: "Real client reactions build trust and increase bookings."
  }
];

export const galleryImages = [
  {
    src: "/gallery/WhatsApp Image 2026-03-22 at 2.55.40 PM (1).jpeg",
    alt: "Finger waves hairstyle - defined waves with shiny finish",
    title: "Classic Finger Waves"
  },
  {
    src: "/gallery/WhatsApp Image 2026-03-22 at 2.55.40 PM (3).jpeg",
    alt: "Professional hair styling result",
    title: "Styled Perfection"
  },
  {
    src: "/gallery/WhatsApp Image 2026-03-22 at 2.55.42 PM (2).jpeg",
    alt: "Hair transformation before and after",
    title: "Transformation Complete"
  },
  {
    src: "/gallery/WhatsApp Image 2026-03-22 at 2.55.42 PM (3).jpeg",
    alt: "Client with finished hairstyle",
    title: "Client Satisfaction"
  },
  {
    src: "/gallery/WhatsApp Image 2026-03-22 at 2.55.43 PM (3).jpeg",
    alt: "Professional salon styling",
    title: "Salon Excellence"
  },
  {
    src: "https://images.unsplash.com/photo-1562322145-9668a5a803ef?auto=format&fit=crop&w=900&q=80",
    alt: "Professional shampooing service",
    title: "Relaxing Shampoo Treatment"
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
