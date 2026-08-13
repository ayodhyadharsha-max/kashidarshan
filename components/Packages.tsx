"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Clock, MapPin, Hotel, Car, UserCheck, Ticket, Sparkles, Compass, Headphones } from "lucide-react";

const WA_NUMBER = "917011960307";

export const packages = [
  {
    id: "sawan-somvar-special",
    name: "Sawan Somvar Special Yatra",
    subtitle: "Auspicious Sawan Somvar VIP Darshan & Kanwar assistance",
    duration: "Same Day Tour",
    cities: ["Varanasi"],
    price: 7999,
    originalPrice: 11999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#D4AF37",
    features: [
      "Special Sawan Somvar VIP Darshan assistance",
      "Ganga Jal Abhishek collection assistance",
      "Private AC Cab for entire local tour",
      "Dedicated Driver cum Guide for yatris",
      "Devotional Kanwar kit for up to 3 pilgrims",
      "All toll, parking & driver allowance included",
    ],
    note: "Perfect for Monday Sawan Abhishek",
  },
  {
    id: "kashi-kanwar-yatra-2n3d",
    name: "Kashi Sawan Kanwar Yatra (2N/3D)",
    subtitle: "Complete Sawan pilgrimage with premium hotel & VIP access",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi"],
    price: 15998,
    originalPrice: 21998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nepali_Temple%2C_Varanasi.jpg/960px-Nepali_Temple%2C_Varanasi.jpg",
    popular: true,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "2 Nights Comfortable Stay in Varanasi",
      "VIP Kashi Vishwanath Darshan slot booking assistance",
      "Holy Ganga water collection assistance",
      "AC Cab transfers & full local sightseeing",
      "Dedicated Driver cum Guide for Sawan pilgrims",
      "24/7 Sawan Yatra Helpline support",
    ],
    note: "₹7,999 / person (₹15,998 for couple)",
  },
  {
    id: "sawan-shiva-circuit-3n4d",
    name: "Sawan Shiva & Ram Mandir Circuit (3N/4D)",
    subtitle: "Seek blessings at Varanasi, Prayagraj & Ayodhya this Sawan",
    duration: "3 Nights / 4 Days",
    cities: ["Varanasi", "Prayagraj", "Ayodhya"],
    price: 27998,
    originalPrice: 37998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: false,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#7C3AED",
    features: [
      "3 Nights Comfortable Hotel Stay & Breakfasts",
      "Intercity transfers in private AC Sedan/SUV",
      "VIP Kashi Vishwanath Temple entrance assistance",
      "Holy dip & boat ride at Triveni Sangam Prayagraj",
      "VIP Ram Mandir Darshan slot assistance in Ayodhya",
      "Driver cum Guide support throughout the journey",
    ],
    note: "Shiva & Ram Mandir special Sawan tour",
  },
  {
    id: "ayodhya-same-day",
    name: "Ayodhya Same Day Tour",
    subtitle: "Complete day trip with private AC cab & driver cum guide",
    duration: "Same Day Tour",
    cities: ["Ayodhya"],
    price: 5999,
    originalPrice: 8999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "Private AC Cab for entire tour",
      "Dedicated Driver cum Guide",
      "VIP Ram Mandir Pass assistance",
      "Hanuman Garhi & Saryu River Aarti",
      "All toll, parking & driver charges included",
      "Package price valid for up to 3 persons",
    ],
    note: "Perfect for a quick one-day pilgrimage",
  },
  {
    id: "varanasi-same-day",
    name: "Varanasi Same Day Tour",
    subtitle: "Complete day trip with private AC cab & driver cum guide",
    duration: "Same Day Tour",
    cities: ["Varanasi"],
    price: 7999,
    originalPrice: 10999,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: true,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#D4AF37",
    features: [
      "Private AC Cab for entire tour",
      "Dedicated Driver cum Guide",
      "Kashi Vishwanath VIP Darshan assistance",
      "Ganga Aarti & private boat ride on Ganga",
      "All toll, parking & driver charges included",
      "Package price valid for up to 3 persons",
    ],
    note: "Covers all major temples in a single day",
  },
  {
    id: "ayodhya-1n-2d",
    name: "Ayodhya Yatra (1N/2D)",
    subtitle: "Ideal for a short weekend getaway to Ayodhya",
    duration: "1 Night / 2 Days",
    cities: ["Ayodhya"],
    price: 9998,
    originalPrice: 13998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "1 Night Comfortable Hotel Stay",
      "Private AC Cab for local transfers",
      "VIP Ram Mandir Darshan assistance",
      "Hanuman Garhi & Kanak Bhawan visits",
      "Driver cum Guide support",
      "24/7 Yatra Assistance",
    ],
    note: "₹4,999 / person (₹9,998 for couple)",
  },
  {
    id: "varanasi-1n-2d",
    name: "Varanasi Yatra (1N/2D)",
    subtitle: "Short devotional getaway to holy Kashi",
    duration: "1 Night / 2 Days",
    cities: ["Varanasi"],
    price: 9998,
    originalPrice: 13998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nepali_Temple%2C_Varanasi.jpg/960px-Nepali_Temple%2C_Varanasi.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#D4AF37",
    features: [
      "1 Night Comfortable Hotel Stay",
      "Private AC Cab for local transfers",
      "Kashi Vishwanath VIP Darshan assistance",
      "Sarnath Buddhist site excursion",
      "Driver cum Guide support",
      "24/7 Yatra Assistance",
    ],
    note: "₹4,999 / person (₹9,998 for couple)",
  },
  {
    id: "varanasi-ayodhya-2n3d",
    name: "Varanasi Ayodhya Yatra (2N/3D)",
    subtitle: "Fast-track yatra for Ram Mandir & Kashi Vishwanath",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi", "Ayodhya"],
    price: 13998,
    originalPrice: 18998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: true,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#D4AF37",
    features: [
      "2 Nights Comfortable Hotel Stay",
      "Intercity Private AC Cab transfers",
      "VIP Kashi Vishwanath Darshan assistance",
      "VIP Ram Mandir Darshan assistance",
      "Driver will guide you during the yatra",
      "24/7 Yatra Customer Support",
    ],
    note: "₹6,999 / person (₹13,998 couple)",
  },
  {
    id: "prayagraj-same-day",
    name: "Prayagraj Same Day Tour",
    subtitle: "Triveni Sangam holy bath and heritage temples day trip",
    duration: "Same Day Tour",
    cities: ["Prayagraj"],
    price: 6999,
    originalPrice: 9999,
    image: "/gallery/gallery-5.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#4F46E5",
    features: [
      "Private AC Cab for entire tour",
      "Dedicated Driver cum Guide",
      "Triveni Sangam boat ride assistance",
      "Visit Anand Bhawan & Bade Hanuman Ji",
      "All toll, parking & driver charges included",
      "Package price valid for up to 3 persons",
    ],
    note: "Perfect for Triveni Sangam holy bath",
  },
  {
    id: "ayodhya-darshan",
    name: "Ayodhya Darshan",
    subtitle: "Ideal for a short, focused pilgrimage to Ayodhya",
    duration: "2 Nights / 3 Days",
    cities: ["Ayodhya"],
    price: 14998,
    originalPrice: 20998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "Best Hotel Stay",
      "Airport / Railway Pickup & Drop",
      "Covers Sightseeing & Temple Visits",
      "Hanuman Garhi & Kanak Bhawan",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Ideal for a short divine weekend escape",
  },
  {
    id: "ayodhya-varanasi",
    name: "Ayodhya · Varanasi",
    subtitle: "Our most booked Kashi tour with Ayodhya",
    duration: "3 Nights / 4 Days",
    cities: ["Ayodhya", "Varanasi"],
    price: 25998,
    originalPrice: 35998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#D4AF37",
    features: [
      "Best Hotel Stay",
      "Intercity AC Cab Transfers",
      "Covers Sightseeing & Temple Visits",
      "Ganga Aarti Private Boat Ride",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "8 of 12 seats booked this week",
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    name: "Ayodhya · Prayagraj · Varanasi",
    subtitle: "The complete tirthdham circuit",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi"],
    price: 31998,
    originalPrice: 43998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triveni_Sangam.JPG/960px-Triveni_Sangam.JPG",
    popular: false,
    featured: true,
    ctaText: "Get Full Itinerary",
    accent: "#7C3AED",
    features: [
      "Best Hotel Stay",
      "Intercity AC Cab Transfers",
      "Covers Sightseeing & Temple Visits",
      "Triveni Sangam Prayagraj Visit",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Covers three of India's holiest cities",
  },
  {
    id: "lucknow-ayodhya",
    name: "Lucknow · Ayodhya",
    subtitle: "Sacred confluence and heritage tour",
    duration: "3 Nights / 4 Days",
    cities: ["Lucknow", "Ayodhya"],
    price: 29998,
    originalPrice: 39998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Allahabad%2C_Triveni_Sangam_03_%2825731951228%29.jpg/960px-Allahabad%2C_Triveni_Sangam_03_%2825731951228%29.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#0891B2",
    features: [
      "Best Hotel Stay",
      "Lucknow to Ayodhya AC Cab Transfers",
      "Covers Sightseeing & Temple Visits",
      "Naimisharanya Pilgrimage (Optional)",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Perfect for combining modern Lucknow with holy Ayodhya",
  },
  {
    id: "ayodhya-varanasi-chitrakoot",
    name: "Ayodhya · Varanasi · Chitrakoot",
    subtitle: "Tracing the sacred path of devotion",
    duration: "4 Nights / 5 Days",
    cities: ["Ayodhya", "Varanasi", "Chitrakoot"],
    price: 33998,
    originalPrice: 45998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mandakini_River.jpg/960px-Mandakini_River.jpg",
    popular: true,
    featured: false,
    ctaText: "Talk To Tour Expert",
    accent: "#059669",
    features: [
      "Best Hotel Stay",
      "Intercity AC Cab Transfers",
      "Covers Sightseeing & Temple Visits",
      "Kamadgiri Parikrama Chitrakoot",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Follow the sacred trails from Kashi to Chitrakoot",
  },
  {
    id: "full-ramayana-circuit",
    name: "Full Ramayana Circuit",
    subtitle: "The ultimate holy pilgrimage",
    duration: "5 Nights / 6 Days",
    cities: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
    price: 36998,
    originalPrice: 49998,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: false,
    featured: true,
    ctaText: "Talk To Tour Expert",
    accent: "#8B0000",
    features: [
      "Best Hotel Stay",
      "Intercity AC Cab Transfers",
      "Covers Sightseeing & Temple Visits",
      "All Holy Sites (Sangam & Kamadgiri)",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Most complete sacred tirth circuit — limited slots",
  },
  {
    id: "sarnath-buddhist-tour",
    name: "Sarnath Buddhist Tour",
    subtitle: "Explore the ancient site of Buddha's first sermon",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi", "Sarnath"],
    price: 22000,
    originalPrice: 30000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Dhamek_Stupa%2C_Sarnath.jpg/960px-Dhamek_Stupa%2C_Sarnath.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#D97706",
    features: [
      "Best Hotel Stay",
      "AC Car local transfers & sightseeing",
      "Varanasi Airport / Railway Pickup & Drop",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Perfect for exploring Buddhist heritage & Sarnath",
  },
  {
    id: "buddhist-circuit-tour",
    name: "Buddhist Circuit Tour",
    subtitle: "Trace the footprints of Buddha in holy confluences",
    duration: "4 Nights / 5 Days",
    cities: ["Varanasi", "Sarnath", "Bodhgaya"],
    price: 43000,
    originalPrice: 56000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Mahabodhi_Temple.jpg/960px-Mahabodhi_Temple.jpg",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#4F46E5",
    features: [
      "Best Hotel Stay",
      "Intercity AC Car transfers (Varanasi - Bodhgaya)",
      "Varanasi Airport / Railway Pickup & Drop",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Covers Mahabodhi Temple, Sarnath Stupa & Ganga Aarti",
  },
  {
    id: "kashi-heritage-tour",
    name: "Kashi Heritage & Lalit Ghat Tour",
    subtitle: "Immerse in the historic alleys, wooden temples, and local craft hubs",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi"],
    price: 22000,
    originalPrice: 30000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nepali_Temple%2C_Varanasi.jpg/960px-Nepali_Temple%2C_Varanasi.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#E11D48",
    features: [
      "Best Hotel Stay",
      "AC Private Car local transfers & sightseeing",
      "Varanasi Airport / Railway Pickup & Drop",
      "Covers Sightseeing & Temple Visits",
      "Driver will guide you during the yatra",
      "24/7 Support",
    ],
    note: "Highly recommended for culture & history enthusiasts",
  },
];

export const coreInclusions = [
  { icon: Car,      label: "AC Transfer" },
  { icon: Hotel,    label: "Best Hotel" },
  { icon: MapPin,   label: "Sightseeing" },
  { icon: MessageCircle, label: "24/7 Support" },
];

function PackageCard({ pkg, index, tokenAmount }: { pkg: (typeof packages)[0]; index: number; tokenAmount: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView  = useInView(cardRef, { once: true, margin: "-60px" });

  const waMsg = encodeURIComponent(
    `Har Har Mahadev! 🙏 I'm interested in the "${pkg.name}" tour package (₹${pkg.price.toLocaleString("en-IN")} for couple). Please share availability and full itinerary.`
  );

  const isPopular = pkg.popular;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col w-full rounded-3xl overflow-hidden transition-all duration-500 ${
        isPopular
          ? "bg-divine-dark ring-2 ring-gold-500/80 shadow-gold-glow hover:shadow-[0_28px_80px_rgba(212,175,55,0.3)]"
          : "premium-card shine-effect"
      }`}
    >
      {/* Popular banner */}
      {isPopular && (
        <div className="bg-gold-gradient text-divine-dark text-center py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
          <Sparkles size={12} />
          Most Popular — Best Value
          <Sparkles size={12} />
        </div>
      )}

      {/* Featured badge (non-popular) */}
      {pkg.featured && !isPopular && (
        <div
          className="absolute top-4 right-4 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md"
          style={{ backgroundColor: `${pkg.accent}25`, color: pkg.accent, border: `1px solid ${pkg.accent}40` }}
        >
          ✦ Best Value
        </div>
      )}

      {/* Package Image */}
      <Link href={`/packages/${pkg.id}`} className="relative h-56 w-full overflow-hidden bg-gray-100 flex-shrink-0 block">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Duration + cities */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full ${
            isPopular ? "bg-white/10 text-gold-300 border border-gold-500/25" : "bg-gray-50 border border-gray-100 text-gray-500"
          }`}>
            <Clock size={11} />
            {pkg.duration}
          </span>
          <span className={`inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full ${
            isPopular ? "bg-white/8 text-white/55 border border-white/12" : "bg-gray-50 border border-gray-100 text-gray-400"
          }`}>
            <MapPin size={11} />
            {pkg.cities.join(" · ")}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-playfair font-bold text-xl sm:text-2xl leading-snug mb-1 ${
          isPopular ? "text-white" : "text-divine-dark"
        }`}>
          <Link href={`/packages/${pkg.id}`} className="hover:text-saffron-500 transition-colors">
            {pkg.name}
          </Link>
        </h3>
        <p className={`text-sm mb-5 ${isPopular ? "text-gold-300" : "text-gray-400"}`}>
          {pkg.subtitle}
        </p>

        {/* Core inclusions icons */}
        <div className={`flex items-center justify-between mb-5 pb-5 border-b ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {coreInclusions.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: isPopular ? "rgba(212,175,55,0.12)" : `${pkg.accent}12` }}
              >
                <Icon size={16} style={{ color: isPopular ? "#D4AF37" : pkg.accent }} />
              </div>
              <span className={`text-[9px] font-medium text-center leading-tight ${
                isPopular ? "text-white/60" : "text-gray-400"
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Price & Lock Section */}
        <div className={`mb-6 flex flex-wrap items-center justify-between gap-2.5 border-t border-b py-4 ${
          isPopular ? "border-white/10" : "border-gray-100"
        }`}>
          {/* Lock Price Pill */}
          <a
            href="#get-quote"
            onClick={() => {
              const event = new CustomEvent("select-tour", {
                detail: { tourId: pkg.id, mode: "lock" }
              });
              window.dispatchEvent(event);
            }}
            className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm whitespace-nowrap ${
              isPopular
                ? "bg-gradient-to-r from-saffron-500/25 to-amber-500/25 text-amber-200 border border-saffron-500/40 hover:from-saffron-500/35 hover:to-amber-500/35"
                : "bg-gradient-to-r from-amber-50 to-amber-100/60 text-amber-900 border border-amber-200/80 hover:from-amber-100 hover:to-amber-200/50"
            }`}
          >
            <span className="text-[10px] sm:text-xs">🔒</span>
            <span>Lock Price at ₹{tokenAmount.toLocaleString("en-IN")}</span>
            <span className="text-[8px] sm:text-[9px] opacity-70">❯</span>
          </a>

          {/* Pricing */}
          <div className="text-right flex flex-col justify-end">
            {pkg.duration === "Same Day Tour" ? (
              <>
                <div className="flex items-baseline justify-end gap-1 flex-wrap">
                  <span className={`text-[10px] sm:text-[11px] line-through mr-0.5 ${
                    isPopular ? "text-white/35" : "text-gray-400"
                  }`}>
                    ₹{pkg.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className={`font-playfair font-bold text-lg sm:text-2xl leading-none ${
                    isPopular ? "text-gold-400" : "text-divine-dark"
                  }`}>
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className={`text-[8px] sm:text-[9px] mt-1 font-semibold ${isPopular ? "text-white/50" : "text-gray-500"}`}>
                  (For 3 Pax total)
                </p>
              </>
            ) : (
              <>
                <div className="flex items-baseline justify-end gap-1 flex-wrap">
                  <span className={`text-[10px] sm:text-[11px] line-through mr-0.5 ${
                    isPopular ? "text-white/35" : "text-gray-400"
                  }`}>
                    ₹{(pkg.originalPrice / 2).toLocaleString("en-IN")}
                  </span>
                  <span className={`font-playfair font-bold text-lg sm:text-2xl leading-none ${
                    isPopular ? "text-gold-400" : "text-divine-dark"
                  }`}>
                    ₹{(pkg.price / 2).toLocaleString("en-IN")}
                  </span>
                  <span className={`text-[9px] sm:text-[10px] font-medium leading-none ${
                    isPopular ? "text-white/60" : "text-gray-500"
                  }`}>
                    /person
                  </span>
                </div>
                <p className={`text-[8px] sm:text-[9px] mt-1 font-medium ${isPopular ? "text-white/40" : "text-gray-400"}`}>
                  (₹{pkg.price.toLocaleString("en-IN")} total for couple)
                </p>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2.5 flex-1 mb-5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div
                className="flex-shrink-0 w-[18px] h-[18px] rounded-full flex items-center justify-center mt-[1px]"
                style={{
                  backgroundColor: isPopular ? "rgba(212,175,55,0.15)" : `${pkg.accent}18`,
                }}
              >
                <Check
                  size={10}
                  strokeWidth={3}
                  style={{ color: isPopular ? "#D4AF37" : pkg.accent }}
                />
              </div>
              <span className={`text-[13px] leading-snug ${
                isPopular ? "text-white/80" : "text-gray-600"
              }`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* Urgency note */}
        {pkg.note && (
          <div className={`mb-4 text-[12px] font-medium px-3.5 py-2.5 rounded-xl ${
            isPopular
              ? "bg-saffron-500/15 text-saffron-300 border border-saffron-500/20"
              : "bg-amber-50 text-amber-700 border border-amber-100"
          }`}>
            🔔 {pkg.note}
          </div>
        )}

        {/* Exclusions block inside card */}
        <div className={`mb-6 pt-4 border-t ${isPopular ? "border-white/10" : "border-gray-100"}`}>
          <div className={`text-[10px] font-bold uppercase tracking-wider mb-2.5 ${isPopular ? "text-gold-300" : "text-gray-400"}`}>
            Exclusions & Important Notes:
          </div>
          <ul className="space-y-2 text-[11px] leading-tight">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0">✈️</span>
              <span className={`font-medium ${isPopular ? "text-white/80" : "text-gray-600"}`}>
                Flight/Train/Bus: Self-book OR we arrange at actual cost
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold text-[10px] mt-[1.5px] flex-shrink-0">✕</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                5% GST / Service Tax not included in package price
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold text-[10px] mt-[1.5px] flex-shrink-0">⚠️</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                Yatra services are provided only with complete package
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={`/packages/${pkg.id}`}
          className={`flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-bold text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            isPopular
              ? "bg-gold-gradient text-divine-dark hover:brightness-105"
              : "hover:brightness-110"
          }`}
          style={
            isPopular
              ? {}
              : { backgroundColor: pkg.accent }
          }
          data-cta="view-details"
          data-source="packages"
          data-package={pkg.id}
        >
          {pkg.ctaText}
        </Link>

        <p className={`text-center text-[11px] mt-3 ${
          isPopular ? "text-white/30" : "text-gray-300"
        }`}>
          Confirm with 25% Advance &nbsp;·&nbsp; Or Lock Rates with ₹{tokenAmount.toLocaleString("en-IN")}
        </p>
      </div>
    </motion.div>
  );
}
export default function Packages() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [tokenAmount, setTokenAmount] = useState(1999);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("price_lock_discount") === "true") {
        setTokenAmount(1749);
      }
      const handleDiscount = () => setTokenAmount(1749);
      window.addEventListener("apply-discount", handleDiscount);
      return () => window.removeEventListener("apply-discount", handleDiscount);
    }
  }, []);

  return (
    <section ref={ref} id="packages" className="py-24 sm:py-32 bg-sacred-cream" data-section="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="ornament-line max-w-xl mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Choose Your Journey
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Ayodhya Tour{" "}
            <span className="text-gradient-saffron">Packages 2025</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every detail pre-arranged — hotel stays, private AC transport, and sightseeing — so you arrive and simply pray.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full px-5 py-2.5">
            <MapPin size={13} className="text-saffron-500" />
            Departures from all major cities across India
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <div key={pkg.id} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] flex">
              <PackageCard pkg={pkg} index={i} tokenAmount={tokenAmount} />
            </div>
          ))}
        </div>

        {/* General Exclusions and Guidelines Disclaimer Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <h3 className="font-playfair font-bold text-lg sm:text-xl text-divine-dark text-center mb-6 flex items-center justify-center gap-2">
            📋 Booking Guidelines & Package Exclusions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-sm">✈️</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">Flexible Transport Options</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Book your own flight, train, or bus to the yatra starting point, or ask our team to book them for you at actual cost during confirmation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-sm">✕</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">5% Tax Excluded</h4>
                <p className="text-gray-400 text-xs leading-relaxed">A standard 5% GST/Service Tax is not included in the package prices shown. The final tax amount will be detailed clearly in your invoice before booking.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-600 font-bold text-sm">⚠️</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">Complete Package Bookings</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Our premium tour services are arranged strictly as a complete package. We do not provide standalone hotel or transport bookings.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Early bird price lock warning card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-3xl p-5 sm:p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-amber-200 text-sm mb-0.5">Early Bird Tip for Future Travels</h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              Traveling this month? Pay a 25% advance to confirm your dates immediately. Traveling in future months? Avoid seasonal price surges of up to 45% by securing a Flexi-Date Price Lock for just ₹{tokenAmount.toLocaleString("en-IN")} today. Finalize your exact dates later!
            </p>
          </div>
        </motion.div>

        {/* Custom nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            Need a custom group tour, senior citizen plan or a different itinerary?{" "}
            <a
              href="#get-quote"
              className="text-saffron-600 font-semibold hover:text-saffron-700 underline underline-offset-2"
            >
              Plan your custom trip here →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
