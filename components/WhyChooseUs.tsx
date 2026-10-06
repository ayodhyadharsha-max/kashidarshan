"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Star,
  BookOpen,
  HeadphonesIcon,
  Banknote,
  MapPin,
  Utensils,
  Users,
} from "lucide-react";

const usps = [
  {
    icon: Star,
    title: "Spiritual Peace of Mind",
    description:
      "We handle hotel bookings and private transfers so you can focus entirely on temple darshans and prayer.",
    iconColor: "#D4AF37",
    iconBg: "rgba(212,175,55,0.12)",
  },
  {
    icon: BookOpen,
    title: "Experienced Yatra Drivers",
    description:
      "Our friendly yatra drivers act as guides throughout the journey, ensuring safe and smooth temple visits.",
    iconColor: "#FF8C00",
    iconBg: "rgba(255,140,0,0.12)",
  },
  {
    icon: ShieldCheck,
    title: "Handpicked Pilgrim Hotels",
    description:
      "Every hotel is personally inspected — close to ghats & mandir, clean, with vegetarian dining.",
    iconColor: "#34D399",
    iconBg: "rgba(52,211,153,0.12)",
  },
  {
    icon: Banknote,
    title: "Zero Hidden Charges",
    description:
      "The price you see is exactly what you pay. Hotel, meals, transfers — all included transparently.",
    iconColor: "#60A5FA",
    iconBg: "rgba(96,165,250,0.12)",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 On-Trip Support",
    description:
      "Instant response team before, during and after your yatra. You are never alone on your journey.",
    iconColor: "#A78BFA",
    iconBg: "rgba(167,139,250,0.12)",
  },
  {
    icon: Utensils,
    title: "Pure Sattvic Meals",
    description:
      "100% vegetarian, hygienically prepared sattvic food — onion-garlic free options available.",
    iconColor: "#FB923C",
    iconBg: "rgba(251,146,60,0.12)",
  },
  {
    icon: Users,
    title: "Senior Citizen Specialist",
    description:
      "Wheelchair assistance, priority entry, ground-floor rooms, and gentle pace for elderly devotees.",
    iconColor: "#2DD4BF",
    iconBg: "rgba(45,212,180,0.12)",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="why-us"
      className="py-24 sm:py-32 bg-divine-dark relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Saffron glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,140,0,0.1) 0%, transparent 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4">
            <span className="text-[#D4AF37] text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
              THE DIVINE STANDARD
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-[3.4rem] text-white mb-4 leading-tight">
            Why Pilgrims Choose <span className="text-gradient-gold">Divine Journeys</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t sell tours. We craft stress-free pilgrimages that let you focus entirely on your devotion.
          </p>
        </motion.div>

        {/* USP Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative group rounded-2xl p-4 sm:p-6 border border-white/[0.07] hover:border-white/[0.15] transition-all duration-350 overflow-hidden bg-[#141722]/90 backdrop-blur-md ${
                i === 6 ? "col-span-2 lg:col-span-1 max-w-md mx-auto sm:max-w-none w-full" : ""
              }`}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${usp.iconBg} 0%, transparent 70%)`,
                }}
              />

              {/* Number */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: usp.iconBg }}
                >
                  <usp.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: usp.iconColor }} />
                </div>
                <span
                  className="card-number text-[10px] sm:text-[11px] font-bold tabular-nums"
                  style={{ color: `${usp.iconColor}40` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-playfair font-semibold text-white text-sm sm:text-[17px] mb-1.5 sm:mb-2 leading-snug group-hover:text-white transition-colors">
                {usp.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed group-hover:text-white/90 transition-colors">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-8 sm:mt-10 rounded-2xl border border-emerald-500/20 p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left bg-[#141722]/90 backdrop-blur-md"
        >
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-playfair font-bold text-white text-lg sm:text-xl mb-1 sm:mb-1.5">
              Direct Confirmation or Flexi-Date Price Lock
            </h3>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Planning your tirth yatra? Confirm your dates with a 25% advance for immediate travel, or lock package rates using our ₹1,999 Flexi-Date token.
            </p>
          </div>
          <div className="flex-shrink-0 text-emerald-400 font-playfair font-bold text-xl sm:text-3xl whitespace-nowrap">
            Flexible Booking
          </div>
        </motion.div>
      </div>
    </section>
  );
}
