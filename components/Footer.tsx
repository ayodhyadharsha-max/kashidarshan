"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube, ChevronDown, AlertCircle, CreditCard, RefreshCw, Ban, Clock } from "lucide-react";
import Image from "next/image";

import { siteConfig } from "@/data/siteConfig";

const WA_NUMBER    = siteConfig.whatsapp;
const WA_MESSAGE   = encodeURIComponent(
  "Har Har Mahadev 🙏 I want to book a Kashi Varanasi tour package. Please share full details."
);
const EMAIL        = siteConfig.email;
const PHONE_DISPLAY = siteConfig.phone;

const socialLinks = [
  {
    Icon: Instagram,
    label: "Instagram",
    href: siteConfig.socialLinks[0] || "https://www.instagram.com/kashidharshannn/",
    hoverColor: "hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 hover:text-[#E1306C]",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: siteConfig.socialLinks[1] || "https://www.facebook.com/Kashidharshannn/",
    hoverColor: "hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 hover:text-[#1877F2]",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@AyodhyaDharshan_official",
    hoverColor: "hover:bg-[#FF0000]/20 hover:border-[#FF0000]/40 hover:text-[#FF0000]",
  },
];

const footerLinks = {
  packages: [
    { label: "Kashi Darshan Package",       href: "#packages" },
    { label: "Varanasi Ayodhya Yatra",      href: "#packages" },
    { label: "Dev Diwali Special",          href: "#packages" },
    { label: "Varanasi Ganga Aarti Yatra",  href: "#packages" },
    { label: "Full Ramayana Circuit",       href: "#packages" },
  ],
  destinations: [
    { label: "Kashi Vishwanath Temple", href: "#" },
    { label: "Dashashwamedh Ghat",      href: "#" },
    { label: "Sarnath Buddhist Stupa",  href: "#" },
    { label: "Kaal Bhairav Temple",     href: "#" },
    { label: "Triveni Sangam",          href: "#" },
  ],
  company: [
    { label: "About Us",       href: "#" },
    { label: "Why Choose Us",  href: "#why-us" },
    { label: "Testimonials",   href: "#testimonials" },
    { label: "FAQ",            href: "#faq" },
  ],
};

const policyItems = [
  {
    icon: CreditCard,
    title: "Advance Payment",
    color: "#D4AF37",
    points: [
      "Pay 20% as an advance to reserve your seat.",
      "Remaining balance must be paid after check-in at hotel.",
    ],
  },
  {
    icon: CreditCard,
    title: "Credit Card Charges",
    color: "#60A5FA",
    points: [
      "2.5% gateway charge applies for Indian credit cards.",
      "4.5% gateway charge applies for international cards.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Rescheduling",
    color: "#FB923C",
    points: ["25% rescheduling charges will be applicable."],
  },
  {
    icon: Ban,
    title: "Cancellation Policy",
    color: "#F87171",
    points: [
      "Booking amount is non-refundable.",
      "Inform at least 7 days prior to arrival.",
    ],
  },
];

function PolicyAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
      {policyItems.map((item, i) => {
        const isOpen = openIndex === i;
        const Icon   = item.icon;
        return (
          <div
            key={item.title}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-white/[0.14] bg-white/[0.06]"
                : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-1.5 p-2.5 sm:px-4 sm:py-3.5 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  <Icon size={12} style={{ color: item.color }} />
                </div>
                <span className="text-white/70 text-[10px] sm:text-[13px] font-medium leading-tight">{item.title}</span>
              </div>
              <ChevronDown
                size={12}
                className={`text-white/30 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="p-2 sm:px-4 sm:pb-4">
                    <div className="h-px bg-white/[0.06] mb-2" />
                    <ul className="space-y-1.5">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span
                            className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-white/60 text-[10px] sm:text-[12px] leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D0400] border-t border-white/5">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">

          {/* Brand column — 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src="/logo.png"
                alt={siteConfig.name}
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <div>
                <div className="font-playfair font-bold text-white text-lg sm:text-xl leading-tight tracking-wide">
                  {siteConfig.name}
                </div>
                <div className="text-saffron-500 text-[10px] tracking-[0.24em] uppercase mt-0.5">
                  Premium Pilgrimage Specialists
                </div>
              </div>
            </div>

            <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
              India&apos;s most trusted Kashi pilgrimage specialists. Serving 50,000+ devotees
              since 2009 with premium yatra experiences, VIP darshan arrangements, and
              unforgettable spiritual journeys.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-white/50 hover:text-white text-xs sm:text-sm transition-colors group"
                data-cta="call"
                data-source="footer"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-saffron-600/20 transition-colors flex-shrink-0">
                  <Phone size={14} className="text-saffron-500" />
                </div>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/50 hover:text-white text-xs sm:text-sm transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-saffron-600/20 transition-colors flex-shrink-0">
                  <Mail size={14} className="text-saffron-500" />
                </div>
                {EMAIL}
              </a>
              <div className="flex items-start gap-3 text-white/50 text-xs sm:text-sm">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-saffron-500" />
                </div>
                <span>
                  {siteConfig.address.street},
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} — {siteConfig.address.pincode}
                  <br />
                  <span className="text-[10px] text-white/30">GSTIN: {siteConfig.gstin}</span>
                </span>
              </div>
            </div>

            {/* Quote CTA */}
            <a
              href="#get-quote"
              className="inline-flex items-center justify-center gap-2 mt-5 bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              data-cta="scroll-quote"
              data-source="footer"
            >
              Get Free Tour Quote
            </a>
          </div>

          {/* 3 Quick Link Columns in 1 Horizontal Row on Mobile */}
          <div className="grid grid-cols-3 gap-2 lg:col-span-5">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-[10px] sm:text-xs tracking-[0.18em] uppercase mb-3 sm:mb-5 leading-tight">
                Our Packages
              </h4>
              <ul className="space-y-2">
                {footerLinks.packages.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-saffron-400 text-[11px] sm:text-sm transition-colors leading-tight block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Temples */}
            <div>
              <h4 className="text-white font-semibold text-[10px] sm:text-xs tracking-[0.18em] uppercase mb-3 sm:mb-5 leading-tight">
                Temples We Cover
              </h4>
              <ul className="space-y-2">
                {footerLinks.destinations.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-saffron-400 text-[11px] sm:text-sm transition-colors leading-tight block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-[10px] sm:text-xs tracking-[0.18em] uppercase mb-3 sm:mb-5 leading-tight">
                Company
              </h4>
              <ul className="space-y-2 mb-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-saffron-400 text-[11px] sm:text-sm transition-colors leading-tight block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social + Policy — 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-3">
              Follow Us
            </h4>
            <div className="flex gap-2 mb-6">
              {socialLinks.map(({ Icon, label, href, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 transition-all duration-250 ${hoverColor}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={13} className="text-saffron-400 flex-shrink-0" />
              <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase">
                Booking Policy
              </h4>
            </div>
            <PolicyAccordion />
          </div>

        </div>
      </div>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.2) 30%, rgba(212,175,55,0.2) 50%, rgba(255,107,0,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Bottom bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/25 text-xs">
            © 2025 Kashi Dharshan. All rights reserved. |{" "}
            <span className="text-saffron-600/50">Har Har Mahadev 🙏</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/25 text-xs">
            <span>IATA Certified</span>
            <span className="text-white/10">•</span>
            <span>Ministry of Tourism Registered</span>
            <span className="text-white/10">•</span>
            <span>UP Tourism Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
