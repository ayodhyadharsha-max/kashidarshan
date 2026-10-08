"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Clock, MapPin, Hotel, Car, UserCheck, Ticket, Sparkles, Compass, Headphones, ChevronLeft, ChevronRight } from "lucide-react";

const WA_NUMBER = "917011960307";

export const packages = [
  {
    id: "varanasi-same-day",
    name: "Varanasi Ganga Aarti Special Yatra",
    subtitle: "Complete day trip with private AC cab & driver cum guide",
    duration: "Same Day Tour",
    cities: ["Varanasi"],
    price: 7999,
    originalPrice: 10999,
    image: "/destinations/kashi-vishwanath-golden-spire.png",
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
    id: "ayodhya-same-day",
    name: "Ayodhya Same Day Tour",
    subtitle: "Complete day trip with private AC cab & driver cum guide",
    duration: "Same Day Tour",
    cities: ["Ayodhya"],
    price: 5999,
    originalPrice: 8999,
    image: "/destinations/ram-mandir-ayodhya.png",
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
    id: "ayodhya-1n-2d",
    name: "Ayodhya Yatra",
    subtitle: "Ideal for a short weekend getaway to Ayodhya",
    duration: "1 Night / 2 Days",
    cities: ["Ayodhya"],
    price: 9998,
    originalPrice: 13998,
    image: "/destinations/kanak-bhawan-ayodhya.jpg",
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
    name: "Varanasi Yatra",
    subtitle: "Short devotional getaway to holy Kashi",
    duration: "1 Night / 2 Days",
    cities: ["Varanasi"],
    price: 9998,
    originalPrice: 13998,
    image: "/destinations/kashi-vishwanath-varanasi.jpg",
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
    name: "Varanasi Ayodhya Yatra",
    subtitle: "Fast-track yatra for Ram Mandir & Kashi Vishwanath",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi", "Ayodhya"],
    price: 13998,
    originalPrice: 18998,
    image: "/destinations/saryu-ghat-ayodhya.jpg",
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
    image: "/destinations/triveni-sangam-prayagraj.jpg",
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
    name: "Ayodhya Ram Mandir Yatra",
    subtitle: "Ideal for a short, focused pilgrimage to Ayodhya",
    duration: "2 Nights / 3 Days",
    cities: ["Ayodhya"],
    price: 14998,
    originalPrice: 20998,
    image: "/destinations/ram-ki-paidi-ayodhya.jpg",
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
    name: "Dev Diwali Special Kashi Yatra",
    subtitle: "Dev Deepawali 84 Ghats Illumination & Kashi Vishwanath Darshan",
    duration: "3 Nights / 4 Days",
    cities: ["Ayodhya", "Varanasi"],
    price: 25998,
    originalPrice: 35998,
    image: "/destinations/dev-diwali-aerial-ghats.jpg",
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
    image: "/destinations/prayagraj-sangam-boat.jpg",
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
    image: "/destinations/ram-mandir-night-front.jpg",
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
    image: "/destinations/ram-mandir-interior-flowers.jpg",
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
    image: "/destinations/jai-shri-ram-ayodhya.jpg",
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
    image: "/destinations/sarnath-thai-temple.jpg",
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
    image: "/destinations/mahabodhi-temple-bodhgaya.jpg",
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
    image: "/destinations/nepali-temple-varanasi.jpg",
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
  const discountPercent = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <div className="relative flex flex-col w-full h-full bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300">
      {/* Package Image & Top Overlay Badges */}
      <Link href={`/packages/${pkg.id}`} className="relative h-44 sm:h-52 w-full overflow-hidden bg-gray-100 flex-shrink-0 block group">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Top-Left Seller/Popular Badge */}
        {pkg.popular ? (
          <div className="absolute top-3 left-3 z-10 font-bold text-[10px] px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white flex items-center gap-1 shadow-md uppercase tracking-wider">
            🔥 BEST SELLER
          </div>
        ) : (
          <div className="absolute top-3 left-3 z-10 font-bold text-[10px] px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-divine-dark flex items-center gap-1 shadow-md uppercase tracking-wider">
            ⭐ MOST POPULAR
          </div>
        )}

        {/* Bottom-Right Duration Badge */}
        <div className="absolute bottom-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white flex items-center gap-1 border border-white/15">
          <Clock size={11} className="text-amber-400" />
          <span>{pkg.duration}</span>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">

        {/* City Location Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
          {pkg.cities.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-[#FFF5EB] text-amber-900 border border-amber-200/60"
            >
              <MapPin size={9} className="text-orange-600" />
              {c}
            </span>
          ))}
        </div>

        {/* Package Title */}
        <h3 className="font-playfair font-bold text-lg sm:text-xl text-divine-dark leading-snug mb-1">
          <Link href={`/packages/${pkg.id}`} className="hover:text-orange-600 transition-colors">
            {pkg.name}
          </Link>
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-gray-400 italic line-clamp-1 mb-3.5">
          {pkg.subtitle}
        </p>

        {/* Core Inclusions Cream Box */}
        <div className="bg-[#FFF9F2] border border-amber-200/60 rounded-2xl p-3 mb-3.5 grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
          <div className="flex items-center gap-2">
            <Car size={14} className="text-orange-600 flex-shrink-0" />
            <span>AC Transfer</span>
          </div>
          <div className="flex items-center gap-2">
            <Hotel size={14} className="text-orange-600 flex-shrink-0" />
            <span>Best Hotel</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-orange-600 flex-shrink-0" />
            <span>Sightseeing</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones size={14} className="text-orange-600 flex-shrink-0" />
            <span>24×7 Support</span>
          </div>
        </div>

        {/* Lock Price Pill */}
        <a
          href="#get-quote"
          onClick={() => {
            const event = new CustomEvent("select-tour", {
              detail: { tourId: pkg.id, mode: "lock" }
            });
            window.dispatchEvent(event);
          }}
          className="w-full flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-[#FFFBF0] border border-dashed border-amber-300 text-[11px] font-bold text-amber-900 mb-3.5 hover:bg-amber-100 transition-colors cursor-pointer"
        >
          <span>🔒</span>
          <span>LOCK PRICE FOR ₹{tokenAmount.toLocaleString("en-IN")}</span>
        </a>

        {/* Pricing Section */}
        <div className="mb-3.5">
          <div className="flex items-baseline gap-2 mb-0.5">
            <span className="text-xs text-gray-400 line-through">
              ₹{pkg.originalPrice.toLocaleString("en-IN")}
            </span>
            {discountPercent > 0 && (
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                SAVE {discountPercent}%
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-playfair font-bold text-2xl text-divine-dark">
              ₹{pkg.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs font-semibold text-gray-400 uppercase">
              /PERSON
            </span>
          </div>
          <p className="text-[9px] text-gray-400 mt-0.5 font-medium">
            *Excluding GST (5%) & monument entries.
          </p>
        </div>

        {/* Green Checkmarks List */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {pkg.features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Check size={10} className="text-emerald-600" strokeWidth={3} />
              </div>
              <span className="text-xs font-medium text-gray-700">{f}</span>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <Link
          href={`/packages/${pkg.id}`}
          className="w-full py-3.5 rounded-2xl font-bold text-white text-sm bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 shadow-md hover:shadow-lg text-center block hover:brightness-105 active:scale-[0.98] transition-all"
        >
          {pkg.ctaText || "Get Full Itinerary"}
        </Link>

        {/* Secondary Link */}
        <Link
          href={`/packages/${pkg.id}`}
          className="text-center text-xs font-semibold text-gray-500 hover:text-orange-600 mt-2.5 block transition-colors"
        >
          View Full Itinerary & Details
        </Link>
      </div>
    </div>
  );
}

export default function Packages() {
  const ref   = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [tokenAmount, setTokenAmount] = useState(1999);
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filterCategories = ["All", "Varanasi", "Ayodhya", "Prayagraj", "Ujjain", "Gaya"];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress((scrollLeft / totalScroll) * 100);
      }
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

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

  const filteredPackages = activeFilter === "All"
    ? packages
    : packages.filter(p => p.cities.some(c => c.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <section ref={ref} id="packages" className="py-24 sm:py-32 bg-sacred-cream" data-section="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-100 border border-saffron-200 mb-4">
            <span className="text-saffron-700 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold">
              ✨ SACRED EXPERIENCES
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-4 leading-tight">
            Varanasi & Kashi <span className="text-gradient-saffron">Tour Packages 2025</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            Every detail pre-arranged — hotel stays, private AC transport, and sightseeing — so you arrive and simply pray.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
            <MapPin size={13} className="text-saffron-500" />
            Departures from all major cities across India
          </div>
        </motion.div>

        {/* Filter Pills & Slide Control Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full sm:w-auto justify-start sm:justify-center">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-saffron-600 text-white shadow-md scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-saffron-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
            <button
              onClick={scrollLeft}
              aria-label="Previous package"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-saffron-50 hover:border-saffron-300 hover:text-saffron-600 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next package"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-saffron-50 hover:border-saffron-300 hover:text-saffron-600 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards grid / Mobile swipable carousel */}
        <div className="relative group/carousel w-full max-w-full">
          {/* Side Floating Nav Buttons for Desktop */}
          <button
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg items-center justify-center text-gray-800 hover:bg-saffron-600 hover:text-white hover:border-saffron-600 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg items-center justify-center text-gray-800 hover:bg-saffron-600 hover:text-white hover:border-saffron-600 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scroll-smooth scrollbar-none lg:grid lg:grid-cols-3 lg:gap-6 lg:pb-0"
          >
            {filteredPackages.map((pkg, i) => (
              <div key={pkg.id} className="snap-start flex-shrink-0 w-[85vw] max-w-[360px] lg:w-full lg:max-w-none">
                <PackageCard pkg={pkg} index={i} tokenAmount={tokenAmount} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Progress Indicator */}
        <div className="block lg:hidden mt-4 max-w-[140px] mx-auto">
          <div className="h-1.5 w-full bg-gray-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-saffron-600 rounded-full transition-all duration-150"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
        </div>

        {/* General Exclusions and Guidelines Disclaimer Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm"
        >
          <h3 className="font-playfair font-bold text-base sm:text-xl text-divine-dark text-center mb-6 flex items-center justify-center gap-2">
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

        {/* Early bird price lock warning card — Hidden on mobile per spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="hidden lg:flex mt-8 bg-amber-500/10 border border-amber-500/20 rounded-3xl p-5 sm:p-6 max-w-4xl mx-auto flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-semibold text-amber-900 text-sm mb-0.5">Early Bird Tip for Future Travels</h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              Traveling this month? Pay a 25% advance to confirm your dates immediately. Traveling in future months? Avoid seasonal price surges of up to 45% by securing a Flexi-Date Price Lock for just ₹{tokenAmount.toLocaleString("en-IN")} today. Finalize your exact dates later!
            </p>
          </div>
        </motion.div>

        {/* Custom nudge — Hidden on mobile per spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:block mt-12 text-center"
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
