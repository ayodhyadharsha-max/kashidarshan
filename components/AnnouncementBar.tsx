"use client";

const announcements = [
  "🛡️ Govt. Registered & GST Approved — GSTIN: 09CJPPJ6346G1ZR",
  "✨ New Ayodhya Varanasi packages available starting ₹12,999/person",
  "✈️ Flight, Train & Bus bookings arranged by us from any city in India",
  "⭐ 4.9★ on Google · 312 verified reviews",
  "🏨 Best hotels pre-confirmed near Ram Mandir",
  "✅ IATA Certified · Ministry of Tourism Approved",
  "🚗 Airport pickup & drop included in all packages",
  "📿 Special Akhand Puja arrangements on request",
  "💬 24/7 WhatsApp support · Reply in 2 minutes",
];

export default function AnnouncementBar() {
  const text = announcements.join("    •    ");

  return (
    <div className="bg-divine-dark border-b border-gold-500/15 overflow-hidden py-2.5 relative z-50">
      {/* Top gold line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="flex" aria-label="Announcements" aria-live="polite">
        <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
          <span className="text-gold-400/85 text-[11px] font-medium tracking-wide pr-20">{text}</span>
          <span className="text-gold-400/85 text-[11px] font-medium tracking-wide pr-20">{text}</span>
        </div>
      </div>
    </div>
  );
}
