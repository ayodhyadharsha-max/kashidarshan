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
    title: "Darshan Without the Wait",
    description:
      "Our ground team holds pre-arranged darshan slots — you walk in while others wait hours in queue. No stress, no crowds.",
    iconColor: "#D4AF37",
    iconBg: "rgba(212,175,55,0.12)",
  },
  {
    icon: BookOpen,
    title: "Certified Expert Guides",
    description:
      "Vedic-trained guides with 10+ years of pilgrimage experience bring every temple story to life with depth and devotion.",
    iconColor: "#FF8C00",
    iconBg: "rgba(255,140,0,0.12)",
  },
  {
    icon: ShieldCheck,
    title: "Hotels We'd Stay In Ourselves",
    description:
      "Every hotel is personally inspected by us — proximity to Ram Mandir, cleanliness, vegetarian kitchen and pilgrim-friendly staff.",
    iconColor: "#34D399",
    iconBg: "rgba(52,211,153,0.12)",
  },
  {
    icon: Banknote,
    title: "Zero Hidden Charges",
    description:
      "The price you see is exactly what you pay. Hotel, meals, transfers, guide, darshan pass — all included. Period.",
    iconColor: "#60A5FA",
    iconBg: "rgba(96,165,250,0.12)",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 On-Trip Support",
    description:
      "Our WhatsApp line responds in under 2 minutes — before, during and after your yatra. You are never alone.",
    iconColor: "#A78BFA",
    iconBg: "rgba(167,139,250,0.12)",
  },
  {
    icon: MapPin,
    title: "15 Years of Local Insight",
    description:
      "We know the quietest darshan hour, the best prasad shop and the hidden ghats that tourists never find.",
    iconColor: "#F87171",
    iconBg: "rgba(248,113,113,0.12)",
  },
  {
    icon: Utensils,
    title: "Pure Sattvic Meals",
    description:
      "100% vegetarian, hygienically prepared sattvic food throughout the tour — no onion, no garlic on request.",
    iconColor: "#FB923C",
    iconBg: "rgba(251,146,60,0.12)",
  },
  {
    icon: Users,
    title: "Senior Citizen Specialist",
    description:
      "Wheelchair assistance, priority entry, slower pace, ground-floor rooms, special dietary care — all arranged with love.",
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
          className="text-center mb-16 sm:mb-20"
        >
          <div className="ornament-line max-w-[220px] mx-auto mb-5">
            <span className="text-gold-400 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Why 50,000+ Families Choose Us
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-white mb-5 leading-tight">
            The Difference You{" "}
            <span className="text-gradient-gold">Feel on Day One</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t sell tours. We craft stress-free pilgrimages that let you focus entirely on your devotion.
          </p>
        </motion.div>

        {/* USP Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group rounded-2xl p-6 border border-white/[0.07] hover:border-white/[0.15] transition-all duration-350 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* Subtle hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${usp.iconBg} 0%, transparent 70%)`,
                }}
              />

              {/* Number */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: usp.iconBg }}
                >
                  <usp.icon size={20} style={{ color: usp.iconColor }} />
                </div>
                <span
                  className="card-number text-[11px] font-bold tabular-nums"
                  style={{ color: `${usp.iconColor}40` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-playfair font-semibold text-white text-[17px] mb-2 leading-snug group-hover:text-white transition-colors">
                {usp.title}
              </h3>
              <p className="text-white/70 text-[13px] leading-relaxed group-hover:text-white/90 transition-colors">
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
          className="mt-10 rounded-2xl border border-emerald-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          style={{ background: "rgba(52,211,153,0.05)" }}
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
            <ShieldCheck size={28} className="text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-playfair font-bold text-white text-xl mb-1.5">
              Direct Confirmation or Flexi-Date Price Lock
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Planning your tirth yatra? For immediate travel this month, confirm your dates with a 25% advance. If you are planning for future months, lock today's special package rates using our ₹1,999 Flexi-Date token to protect yourself from seasonal tariff increases.
            </p>
          </div>
          <div className="flex-shrink-0 text-emerald-400 font-playfair font-bold text-2xl sm:text-3xl whitespace-nowrap">
            Flexible Booking
          </div>
        </motion.div>
      </div>
    </section>
  );
}
