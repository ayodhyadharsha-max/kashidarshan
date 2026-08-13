"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ShieldCheck, Users, ChevronDown, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const WA_NUMBER = "917011960307";

const particles = [
  { size: 3, top: "12%", left: "7%",  delay: 0,   dur: 7 },
  { size: 5, top: "22%", left: "18%", delay: 1.5, dur: 9 },
  { size: 2, top: "38%", left: "4%",  delay: 0.8, dur: 6 },
  { size: 4, top: "58%", left: "13%", delay: 2,   dur: 8 },
  { size: 3, top: "74%", left: "23%", delay: 0.3, dur: 7.5 },
  { size: 6, top: "9%",  left: "78%", delay: 1,   dur: 8 },
  { size: 2, top: "28%", left: "87%", delay: 2.5, dur: 6.5 },
  { size: 4, top: "48%", left: "91%", delay: 0.5, dur: 9 },
  { size: 3, top: "68%", left: "83%", delay: 1.8, dur: 7 },
  { size: 5, top: "83%", left: "73%", delay: 0.7, dur: 8.5 },
];

const slides = [
  {
    id: "sawan-somvar-special",
    name: "Sawan Somvar Special Yatra",
    duration: "SAME DAY TOUR",
    price: "7,999",
    priceSuffix: " (For 3 Pax)",
    description: "Auspicious Kashi Sawan Monday pilgrimage with Ganga Jal Abhishek collection, VIP Vishwanath temple access assistance, and private AC Cab.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ayodhya-same-day",
    name: "Ayodhya Same Day Tour",
    duration: "SAME DAY TOUR",
    price: "5,999",
    priceSuffix: " (For 3 Pax)",
    description: "Complete Ayodhya day tour with private AC Cab and a dedicated Driver-cum-Guide. Perfect for visiting Ram Mandir and Hanuman Garhi.",
    image: "/gallery/gallery-1.jpg",
  },
  {
    id: "varanasi-same-day",
    name: "Varanasi Same Day Tour",
    duration: "SAME DAY TOUR",
    price: "7,999",
    priceSuffix: " (For 3 Pax)",
    description: "Varanasi local temples sightseeing with private AC Cab and dedicated Driver-cum-Guide. Includes Kashi Vishwanath and Ganga Aarti boat ride.",
    image: "/gallery/gallery-2.jpg",
  },
  {
    id: "ayodhya-1n-2d",
    name: "Ayodhya Yatra (1N/2D)",
    duration: "1 NIGHT / 2 DAYS",
    price: "4,999",
    priceSuffix: " / Person",
    description: "Blessed short pilgrimage package for Ram Mandir VIP Darshan, Saryu Aarti, and local temple visits with private AC transport.",
    image: "/gallery/gallery-4.jpg",
  },
  {
    id: "varanasi-1n-2d",
    name: "Varanasi Yatra (1N/2D)",
    duration: "1 NIGHT / 2 DAYS",
    price: "4,999",
    priceSuffix: " / Person",
    description: "Seek the blessings of Lord Shiva at Kashi Vishwanath. Includes comfortable hotel stay, Ganga Aarti private boat ride, and AC transfers.",
    image: "/gallery/gallery-3.jpg",
  }
];

const trustBadges = [
  { icon: Star,         label: "GOOGLE RATED",      sub: "4.9/5 Star Rating" },
  { icon: ShieldCheck,  label: "GST REGISTERED",    sub: "100% Secure Billing" },
  { icon: Users,        label: "HAPPY TRAVELLERS",  sub: "12,000+ Journeys" },
  { icon: CheckCircle2, label: "24X7 ASSISTANCE",   sub: "On-Trip Support" },
];

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-play timing
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const handleGetItinerary = (id: string) => {
    const event = new CustomEvent("select-tour", {
      detail: { tourId: id, mode: "confirm" }
    });
    window.dispatchEvent(event);
    
    const element = document.getElementById("get-quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentSlide = slides[currentIdx];

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#100500]"
      id="home"
      data-section="hero"
    >
      {/* ── Background Carousel with Zoom/Fade ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.name}
              className="w-full h-full object-cover brightness-[0.35]"
            />
            {/* Dark & Warm Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-[#100500]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Background OM symbol ── */}
      <div
        className="om-breathe absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-playfair text-white select-none"
          style={{ fontSize: "clamp(280px, 50vw, 640px)", lineHeight: 1, opacity: 0.03 }}
        >
          ॐ
        </span>
      </div>

      {/* ── Floating Particles ── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle-animate absolute rounded-full pointer-events-none z-10"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            backgroundColor: "#FFD700",
            opacity: 0.45,
            boxShadow: `0 0 ${p.size * 4}px ${p.size * 1.5}px rgba(255,215,0,0.35)`,
            "--duration": `${p.dur}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Spacer to align content nicely with fixed navbar */}
      <div className="h-28" />

      {/* ── Main Content Slide Overlay ── */}
      <div className="relative z-20 text-center px-4 sm:px-8 max-w-5xl mx-auto flex-1 flex flex-col justify-center py-10">
        
        {/* Government Registration Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium tracking-wide mb-6 shadow-[0_0_15px_rgba(16,185,129,0.08)] mx-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Govt. Registered Agency (GSTIN: 09CJPPJ6346G1ZR)</span>
        </motion.div>

        {/* ॐ Har Har Mahadev ॐ Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/40" />
          <span className="text-gold-400 text-[10px] font-semibold tracking-[0.4em] uppercase">
            ॐ &nbsp; Har Har Mahadev &nbsp; ॐ
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/40" />
        </motion.div>

        {/* Dynamic Slide Content AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Bold Playfair Headline */}
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-[1.1] tracking-tight text-balance">
              {currentSlide.name}
            </h1>

            {/* Light Text Description */}
            <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-6 font-light leading-relaxed">
              {currentSlide.description}
            </p>

            {/* Varanasi Travelers style Badge Pill (Placed below description) */}
            <div className="inline-flex items-center gap-2.5 bg-black/40 border border-white/10 text-white/80 px-5 py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="text-white/95 font-bold">{currentSlide.duration}</span>
              <span className="text-white/20">|</span>
              <span>
                Starting From{" "}
                <span className="text-gold-400 font-extrabold text-sm sm:text-base ml-0.5">
                  ₹{currentSlide.price}
                </span>{" "}
                <span className="text-white/60 ml-0.5">
                  {currentSlide.priceSuffix}
                </span>
              </span>
            </div>

            {/* Dynamic CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              
              {/* Primary: Get Free Itinerary */}
              <button
                onClick={() => handleGetItinerary(currentSlide.id)}
                className="wa-shimmer bg-saffron-gradient hover:brightness-105 text-white px-8 py-4 rounded-full font-bold text-[14px] sm:text-[15px] uppercase tracking-wider transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] w-full sm:w-auto justify-center text-center shadow-[0_4px_24px_rgba(255,107,0,0.3)]"
              >
                Get Free Itinerary
              </button>

              {/* WhatsApp: Transparent Green-bordered */}
              <a
                href={`https://wa.me/917011960307?text=${encodeURIComponent(
                  `Har Har Mahadev 🙏 I want to get the details and itinerary for "${currentSlide.name}" (${currentSlide.duration}) starting from ₹${currentSlide.price}/Person.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-emerald-500/50 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-7 py-4 rounded-full font-semibold text-[14px] uppercase tracking-wider backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              {/* Call Now: White-bordered */}
              <a
                href="tel:+917011960307"
                className="flex items-center justify-center gap-2.5 border border-white/28 hover:border-white/55 text-white hover:bg-white/[0.08] px-7 py-4 rounded-full font-semibold text-[14px] uppercase tracking-wider backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
              >
                <Phone size={15} />
                Call Now
              </a>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ── Slide Arrows Navigation (Hidden on Mobile, Visible on Desktop) ── */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 hover:border-white/25 bg-black/20 hover:bg-black/40 text-white items-center justify-center transition-all cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 hover:border-white/25 bg-black/20 hover:bg-black/40 text-white items-center justify-center transition-all cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Pagination Indicator Dots & Trust Section Footer ── */}
      <div className="relative z-20 w-full flex flex-col items-center">
        
        {/* Pagination indicator dots */}
        <div className="flex items-center gap-2 mb-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIdx === idx ? "bg-saffron-500 scale-125 w-6" : "bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Full-width horizontal divider line */}
        <div className="w-full h-px bg-white/10" />

        {/* ── Hero Bottom Trust Badges Grid ── */}
        <div className="w-full bg-[#100500]/60 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center sm:text-left">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start text-white">
                <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/[0.15] flex items-center justify-center flex-shrink-0">
                  <badge.icon size={15} className="text-gold-400" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-white text-[11px] font-bold tracking-wider uppercase leading-tight">{badge.label}</div>
                  <div className="text-white/40 text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
