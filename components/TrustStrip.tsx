"use client";

import { motion } from "framer-motion";
import { Building2, Car, BookOpen, HeadphonesIcon, BadgeCheck } from "lucide-react";

const itemsLine1 = [
  { icon: Building2,      label: "Verified Hotels",        sub: "Pre-inspected properties" },
  { icon: Car,            label: "AC Transport",           sub: "Private vehicle throughout" },
  { icon: BookOpen,       label: "Pilgrimage Experts",     sub: "15+ years experience" },
];

const itemsLine2 = [
  { icon: HeadphonesIcon, label: "24/7 Support",           sub: "On-trip helpline" },
  { icon: BadgeCheck,     label: "Govt. Registered",       sub: "GSTIN: 09CJPPJ6346G1ZR" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-saffron-600 py-3 sm:py-5 overflow-hidden">
      {/* subtle inner top shadow */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/15" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/10" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Desktop Layout — 1 Horizontal Line */}
        <div className="hidden lg:flex items-center justify-around py-1">
          {[...itemsLine1, ...itemsLine2].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center gap-2.5 px-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-[13px] leading-tight">{item.label}</div>
                  <div className="text-white/65 text-[11px] leading-tight">{item.sub}</div>
                </div>
              </div>
              {i < 4 && <div className="w-px h-7 bg-white/20 flex-shrink-0 ml-4" />}
            </div>
          ))}
        </div>

        {/* Mobile Layout — EXACTLY 2 LINES */}
        <div className="lg:hidden space-y-2.5">
          {/* Line 1 — 3 Items */}
          <div className="grid grid-cols-3 gap-1 text-center">
            {itemsLine1.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-1">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <item.icon size={13} className="text-white" />
                </div>
                <div className="text-white font-bold text-[10px] leading-tight">{item.label}</div>
                <div className="text-white/70 text-[8px] leading-tight mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Line 2 — 2 Items Centered */}
          <div className="flex justify-center gap-4 text-center border-t border-white/15 pt-2">
            {itemsLine2.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-1 min-w-[110px]">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <item.icon size={13} className="text-white" />
                </div>
                <div className="text-white font-bold text-[10px] leading-tight">{item.label}</div>
                <div className="text-white/70 text-[8px] leading-tight mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
