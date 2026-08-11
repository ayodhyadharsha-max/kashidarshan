"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  User, Phone, CalendarDays, Mail, MessageSquare, ChevronDown,
  ChevronLeft, ChevronRight, CheckCircle2, Loader2, AlertCircle,
  Star, Users, ShieldCheck, BadgeCheck, MessageCircle,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY      = "c79c0151-6af3-404d-9736-d65fe15d1e6b";
const REDIRECT    = "/thank-you";

const TOURS = [
  "Ayodhya Same Day Tour (For 3 Persons)",
  "Varanasi Same Day Tour (For 3 Persons)",
  "Prayagraj Same Day Tour (For 3 Persons)",
  "Ayodhya Yatra (1N/2D)",
  "Varanasi Yatra (1N/2D)",
  "Varanasi Ayodhya Yatra (2N/3D)",
  "Ayodhya Darshan (2N/3D)",
  "Ayodhya Varanasi (3N/4D)",
  "Ayodhya Prayagraj Varanasi (4N/5D)",
  "Lucknow Ayodhya (3N/4D)",
  "Ayodhya Varanasi Chitrakoot (4N/5D)",
  "Full Ramayana Circuit (5N/6D)",
  "Custom Trip",
];

const inclusions = [
  "Best hotel stays pre-confirmed",
  "Private AC transfers from day one",
  "Covers major sightseeing",
  "24/7 yatra customer support",
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS_ABBR = ["Mo","Tu","We","Th","Fr","Sa","Su"];

// ─── Mini Calendar ─────────────────────────────────────────────────────────────
function Calendar({
  selected,
  onSelect,
  onClose,
}: {
  selected?: Date;
  onSelect: (d: Date) => void;
  onClose: () => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const initDate = selected && selected >= today ? selected : today;
  const [view, setView] = useState({ month: initDate.getMonth(), year: initDate.getFullYear() });

  const daysInMonth    = new Date(view.year, view.month + 1, 0).getDate();
  const rawFirstDay    = new Date(view.year, view.month, 1).getDay();
  const startOffset    = (rawFirstDay + 6) % 7; // Monday-first

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const isSelected = (d: number) =>
    !!selected &&
    selected.getDate() === d &&
    selected.getMonth() === view.month &&
    selected.getFullYear() === view.year;

  const isDisabled = (d: number) =>
    new Date(view.year, view.month, d) < today;

  const isToday = (d: number) =>
    today.getDate() === d &&
    today.getMonth() === view.month &&
    today.getFullYear() === view.year;

  const prevMonth = () =>
    setView(v =>
      v.month === 0
        ? { month: 11, year: v.year - 1 }
        : { month: v.month - 1, year: v.year }
    );

  const nextMonth = () =>
    setView(v =>
      v.month === 11
        ? { month: 0, year: v.year + 1 }
        : { month: v.month + 1, year: v.year }
    );

  const canGoPrev =
    view.year > today.getFullYear() ||
    (view.year === today.getFullYear() && view.month > today.getMonth());

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-[#160800] border border-white/[0.15] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08]">
        <button
          type="button"
          onClick={prevMonth}
          disabled={!canGoPrev}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={14} />
        </button>
        <span className="font-playfair font-semibold text-white text-sm">
          {MONTHS[view.month]} {view.year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="p-3">
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1.5">
          {DAYS_ABBR.map(d => (
            <div
              key={d}
              className="flex items-center justify-center h-7 text-white/30 text-[10px] font-semibold tracking-wide"
            >
              {d}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-0.5">
          {cells.map((day, i) => {
            if (!day) return <div key={`e-${i}`} className="h-8" />;
            const disabled  = isDisabled(day);
            const sel       = isSelected(day);
            const tod       = isToday(day);
            return (
              <button
                key={day}
                type="button"
                disabled={disabled}
                onClick={() => {
                  onSelect(new Date(view.year, view.month, day));
                  onClose();
                }}
                className={[
                  "h-8 w-full rounded-lg text-[13px] flex items-center justify-center transition-all duration-150",
                  disabled
                    ? "text-white/18 cursor-not-allowed"
                    : "text-white/75 cursor-pointer hover:bg-white/10 hover:text-white",
                  sel
                    ? "!bg-saffron-500 !text-white font-semibold shadow-[0_2px_12px_rgba(255,107,0,0.4)]"
                    : "",
                  tod && !sel
                    ? "border border-saffron-400/50 text-saffron-400"
                    : "",
                ].join(" ")}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] px-4 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            onSelect(today);
            onClose();
          }}
          className="text-saffron-400 text-[12px] font-medium hover:text-saffron-300 transition-colors"
        >
          Select today
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-white/30 text-[12px] hover:text-white/60 transition-colors"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
}

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2">
        {label}
        {required && <span className="text-saffron-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-white/[0.06] border border-white/[0.12] rounded-xl px-4 py-3.5 text-white placeholder-white/25 text-[14px] focus:outline-none focus:border-saffron-400/70 focus:bg-white/[0.09] focus:ring-2 focus:ring-saffron-400/15 transition-all duration-200 appearance-none";

// ─── Format date ────────────────────────────────────────────────────────────
function fmtDate(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// ─── Form Component ───────────────────────────────────────────────────────────
function LeadForm({ defaultTour, tokenAmount, setTokenAmount }: { defaultTour?: string; tokenAmount: number; setTokenAmount: React.Dispatch<React.SetStateAction<number>> }) {
  const [fields, setFields] = useState({
    name: "", phone: "", tour: defaultTour || "", email: "", request: "", packageType: "",
  });
  const [date,    setDate]    = useState<Date | undefined>(undefined);
  const [calOpen, setCalOpen] = useState(false);
  const [errors,  setErrors]  = useState<Record<string, string>>({});
  const [status,  setStatus]  = useState<"idle" | "submitting" | "error">("idle");
  const [bookingType, setBookingType] = useState<"confirm" | "lock">("confirm");
  const [flexMonth, setFlexMonth] = useState("");
  const [step, setStep] = useState(1);
  const calRef = useRef<HTMLDivElement>(null);

  const WA_NUMBER = "919235222399";

  // Sync defaultTour if it changes
  useEffect(() => {
    if (defaultTour) {
      setFields(f => ({ ...f, tour: defaultTour }));
    }
  }, [defaultTour]);

  // Auto-select package on select-tour event & handle discount
  useEffect(() => {
    const handleApplyDiscount = () => {
      setBookingType("lock");
      setTokenAmount(1749);
    };

    const handleSelectTour = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      const tourId = typeof detail === "string" ? detail : detail?.tourId;
      const mode = typeof detail === "object" ? detail?.mode : undefined;

      const tourMapping: Record<string, string> = {
        "ayodhya-same-day": "Ayodhya Same Day Tour (For 3 Persons)",
        "varanasi-same-day": "Varanasi Same Day Tour (For 3 Persons)",
        "prayagraj-same-day": "Prayagraj Same Day Tour (For 3 Persons)",
        "ayodhya-1n-2d": "Ayodhya Yatra (1N/2D)",
        "varanasi-1n-2d": "Varanasi Yatra (1N/2D)",
        "varanasi-ayodhya-2n3d": "Varanasi Ayodhya Yatra (2N/3D)",
        "ayodhya-darshan": "Ayodhya Darshan (2N/3D)",
        "ayodhya-varanasi": "Ayodhya Varanasi (3N/4D)",
        "ayodhya-prayagraj-varanasi": "Ayodhya Prayagraj Varanasi (4N/5D)",
        "lucknow-ayodhya": "Lucknow Ayodhya (3N/4D)",
        "ayodhya-varanasi-chitrakoot": "Ayodhya Varanasi Chitrakoot (4N/5D)",
        "full-ramayana-circuit": "Full Ramayana Circuit (5N/6D)",
        "sarnath-buddhist-tour": "Custom Trip",
        "buddhist-circuit-tour": "Custom Trip",
        "kashi-heritage-tour": "Custom Trip",
      };
      const tourName = tourMapping[tourId];
      if (tourName) {
        setFields(f => ({ ...f, tour: tourName }));
      }
      if (mode === "lock") {
        setBookingType("lock");
      } else if (mode === "confirm") {
        setBookingType("confirm");
      }
      setStep(1);
    };

    window.addEventListener("select-tour", handleSelectTour);
    window.addEventListener("apply-discount", handleApplyDiscount);
    return () => {
      window.removeEventListener("select-tour", handleSelectTour);
      window.removeEventListener("apply-discount", handleApplyDiscount);
    };
  }, [setTokenAmount]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(er => { const n = { ...er }; delete n[k]; return n; });
  };

  // Close calendar on outside click
  useEffect(() => {
    if (!calOpen) return;
    const handler = (e: MouseEvent) => {
      if (calRef.current && !calRef.current.contains(e.target as Node)) setCalOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [calOpen]);

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!fields.tour)         e.tour  = "Please select a tour";
    if (!fields.packageType)  e.packageType = "Please select package class / budget preference";
    if (bookingType === "confirm" && !date) e.date  = "Please select your travel date";
    if (bookingType === "lock" && !flexMonth) e.flexMonth = "Please select tentative travel month";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!fields.name.trim())  e.name  = "Please enter your name";
    if (!fields.phone.trim()) e.phone = "Please enter your phone number";
    if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit Indian mobile number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
      return;
    }

    if (!validateStep2()) return;
    setStatus("submitting");

    const travelDateString = bookingType === "lock" ? `Flexible - ${flexMonth}` : (date ? fmtDate(date) : "");

    try {
      const payload: Record<string, string> = {
        access_key:     WEB3FORMS_KEY,
        name:           fields.name,
        phone:          fields.phone,
        tour:           fields.tour,
        package_type:   fields.packageType,
        travel_date:    travelDateString,
        booking_type:   bookingType === "confirm" ? "Direct Confirmation (25% Advance)" : `Flexi-Date Price Lock (₹${tokenAmount})`,
        special_request:fields.request || "(none)",
      };

      if (fields.email.trim()) {
        payload.email = fields.email.trim();
      }

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        if (typeof window !== "undefined") {
          const w = window as unknown as { dataLayer?: object[] };
          if (w.dataLayer) {
            w.dataLayer.push({
              event: "form_submit",
              form_name: "lead_capture",
              tour_selected: fields.tour,
              travel_date: travelDateString,
              booking_type: bookingType,
            });
          }
        }
        const queryParams = new URLSearchParams({
          name: fields.name,
          phone: fields.phone,
          tour: fields.tour,
          package_type: fields.packageType,
          date: travelDateString,
          booking_type: bookingType,
          is_flexible: bookingType === "lock" ? "true" : "false",
          token_amount: tokenAmount.toString(),
        }).toString();
        window.location.href = `${REDIRECT}?${queryParams}`;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Progress indicators */}
      <div className="flex items-center justify-between mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/40">
        <span className={step === 1 ? "text-saffron-400 font-bold" : "text-white/30"}>Step 1: Plan Trip</span>
        <div className={`h-0.5 flex-1 mx-4 transition-all duration-300 ${step === 2 ? "bg-saffron-500/50" : "bg-white/10"}`} />
        <span className={step === 2 ? "text-saffron-400 font-bold" : "text-white/30"}>Step 2: Contact Details</span>
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Row 1: Tour & Package Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Spiritual Tour" required>
              <div className="relative">
                <select
                  value={fields.tour}
                  onChange={set("tour")}
                  className={`${inputClass} pr-10 ${errors.tour ? "border-red-400/60" : ""} cursor-pointer`}
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <option value="" disabled style={{ background: "#160800" }}>Select your tour</option>
                  {TOURS.map(t => (
                    <option key={t} value={t} style={{ background: "#160800" }}>{t}</option>
                  ))}
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
              </div>
              {errors.tour && <p className="text-red-400 text-[11px] mt-1.5">{errors.tour}</p>}
            </Field>

            <Field label="Package Class & Budget" required>
              <div className="relative">
                <select
                  value={fields.packageType}
                  onChange={set("packageType")}
                  className={`${inputClass} pr-10 ${errors.packageType ? "border-red-400/60" : ""} cursor-pointer`}
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <option value="" disabled style={{ background: "#160800" }}>Select category</option>
                  <option value="Standard / Budget" style={{ background: "#160800" }}>Standard / Budget (Clean Hotels & AC Travel)</option>
                  <option value="Deluxe" style={{ background: "#160800" }}>Deluxe (3★ Hotels, Dedicated AC Sedan)</option>
                  <option value="Premium / Luxury" style={{ background: "#160800" }}>Premium / Luxury (4★/5★ Hotels, AC SUV & VIP Help)</option>
                </select>
                <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
              </div>
              {errors.packageType && <p className="text-red-400 text-[11px] mt-1.5">{errors.packageType}</p>}
            </Field>
          </div>

          {/* Row 2: Booking Type & Date Selection */}
          <div className="space-y-3">
            <label className="block text-white/60 text-[11px] font-semibold tracking-[0.14em] uppercase">
              Select Booking Type & Timeline
            </label>
            
            {/* Tab Toggle */}
            <div className="grid grid-cols-2 gap-2 bg-white/[0.04] p-1.5 rounded-xl border border-white/[0.08]">
              <button
                type="button"
                onClick={() => {
                  setBookingType("confirm");
                  setFlexMonth("");
                  if (errors.flexMonth || errors.date) {
                    setErrors(er => { const n = { ...er }; delete n.date; delete n.flexMonth; return n; });
                  }
                }}
                className={`py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  bookingType === "confirm"
                    ? "bg-saffron-600 text-white shadow-[0_2px_8px_rgba(255,107,0,0.3)]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                Direct Confirm (25% Adv)
              </button>
              <button
                type="button"
                onClick={() => {
                  setBookingType("lock");
                  setDate(undefined);
                  if (errors.flexMonth || errors.date) {
                    setErrors(er => { const n = { ...er }; delete n.date; delete n.flexMonth; return n; });
                  }
                }}
                className={`py-2.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  bookingType === "lock"
                    ? "bg-saffron-600 text-white shadow-[0_2px_8px_rgba(255,107,0,0.3)]"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                Flexi-Price Lock (₹{tokenAmount})
              </button>
            </div>

            {/* Date Input */}
            <div>
              {bookingType === "lock" ? (
                <div className="relative">
                  <select
                    value={flexMonth}
                    onChange={(e) => {
                      setFlexMonth(e.target.value);
                      if (errors.flexMonth) setErrors(er => { const n = { ...er }; delete n.flexMonth; return n; });
                    }}
                    className={`${inputClass} pr-10 ${errors.flexMonth ? "border-red-400/60" : ""} cursor-pointer`}
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <option value="" disabled style={{ background: "#160800" }}>Select tentative travel month</option>
                    <option value="June 2026" style={{ background: "#160800" }}>June 2026</option>
                    <option value="July 2026" style={{ background: "#160800" }}>July 2026</option>
                    <option value="August 2026" style={{ background: "#160800" }}>August 2026</option>
                    <option value="September 2026" style={{ background: "#160800" }}>September 2026</option>
                    <option value="October 2026" style={{ background: "#160800" }}>October 2026 (Festive Season)</option>
                    <option value="November 2026" style={{ background: "#160800" }}>November 2026</option>
                    <option value="December 2026" style={{ background: "#160800" }}>December 2026</option>
                    <option value="Later / Undecided" style={{ background: "#160800" }}>Later / Undecided</option>
                  </select>
                  <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                  {errors.flexMonth && <p className="text-red-400 text-[11px] mt-1.5">{errors.flexMonth}</p>}
                </div>
              ) : (
                <div className="relative" ref={calRef}>
                  <button
                    type="button"
                    onClick={() => setCalOpen(o => !o)}
                    className={`${inputClass} flex items-center gap-3 text-left ${errors.date ? "border-red-400/60" : ""} ${calOpen ? "border-saffron-400/70 bg-white/[0.09] ring-2 ring-saffron-400/15" : ""}`}
                  >
                    <CalendarDays size={15} className={date ? "text-saffron-400" : "text-white/25"} />
                    <span className={date ? "text-white" : "text-white/25"}>
                      {date ? fmtDate(date) : "Select travel date"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {calOpen && (
                      <Calendar
                        selected={date}
                        onSelect={d => { setDate(d); if (errors.date) setErrors(er => { const n = {...er}; delete n.date; return n; }); }}
                        onClose={() => setCalOpen(false)}
                      />
                    )}
                  </AnimatePresence>
                  {errors.date && <p className="text-red-400 text-[11px] mt-1.5">{errors.date}</p>}
                </div>
              )}
            </div>
          </div>

          {/* Continue button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-bold text-[14px] sm:text-[15px] text-white relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,107,0,0.4)] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #D4AF37 100%)",
              boxShadow: "0 4px 24px rgba(255,107,0,0.3)",
            }}
          >
            Next: Contact Details ➜
          </button>

          {/* Quick WhatsApp option divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-3 text-white/20 text-[10px] font-bold uppercase tracking-wider">OR</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              `Jai Shri Ram! I want to enquire about Kashi Yatra packages.\n\n` +
              `*Selected Tour*: ${fields.tour || "(Custom Selection)"}\n` +
              `*Budget Preference*: ${fields.packageType || "Standard"}\n` +
              `*Travel Period*: ${bookingType === "lock" ? `Flexible - ${flexMonth || "Not Decided"}` : (date ? fmtDate(date) : "Not Decided")}\n` +
              `*Booking Option*: ${bookingType === "confirm" ? "Direct Confirmation (25% Advance)" : "Flexi-Date Price Lock"}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] font-bold text-white text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle size={17} className="fill-white text-[#25D366]" />
            <span>Plan Instantly on WhatsApp</span>
          </a>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Row 1: Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full Name" required>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input
                  type="text"
                  value={fields.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={`${inputClass} pl-10 ${errors.name ? "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15" : ""}`}
                  autoComplete="name"
                />
              </div>
              {errors.name && <p className="text-red-400 text-[11px] mt-1.5">{errors.name}</p>}
            </Field>

            <Field label="Phone Number" required>
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                <input
                  type="tel"
                  value={fields.phone}
                  onChange={set("phone")}
                  placeholder="+91 XXXXX XXXXX"
                  className={`${inputClass} pl-10 ${errors.phone ? "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15" : ""}`}
                  autoComplete="tel"
                  inputMode="numeric"
                />
              </div>
              {errors.phone && <p className="text-red-400 text-[11px] mt-1.5">{errors.phone}</p>}
            </Field>
          </div>

          {/* Row 2: Email */}
          <Field label="Email Address">
            <div className="relative">
              <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
              <input
                type="email"
                value={fields.email}
                onChange={set("email")}
                placeholder="your@email.com (optional)"
                className={`${inputClass} pl-10`}
                autoComplete="email"
              />
            </div>
          </Field>

          {/* Row 3: Special Request */}
          <Field label="Special Request">
            <div className="relative">
              <MessageSquare size={15} className="absolute left-3.5 top-4 text-white/25 pointer-events-none" />
              <textarea
                value={fields.request}
                onChange={set("request")}
                placeholder="Senior citizens, wheelchair, Jain food, extra nights... (optional)"
                rows={3}
                className={`${inputClass} pl-10 resize-none leading-relaxed`}
              />
            </div>
          </Field>

          {/* Error message */}
          {status === "error" && (
            <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-400/20 rounded-xl px-4 py-3">
              <AlertCircle size={15} className="text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-[13px]">
                Something went wrong. Please try WhatsApp or call us directly.
              </p>
            </div>
          )}

          {/* Buttons row */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-4 py-4 rounded-2xl font-bold text-[14px] text-white/60 hover:text-white border border-white/10 hover:bg-white/5 transition-all duration-200"
            >
              ❮ Back
            </button>
            
            <button
              type="submit"
              disabled={status === "submitting"}
              className="wa-shimmer flex-1 py-4 rounded-2xl font-bold text-[14px] sm:text-[15px] text-white relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,107,0,0.4)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              data-cta="form-submit"
              data-source="lead-capture"
              style={{
                background: status === "submitting"
                  ? "rgba(255,107,0,0.6)"
                  : "linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #D4AF37 100%)",
                boxShadow: "0 4px 24px rgba(255,107,0,0.3)",
              }}
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={17} className="animate-spin" />
                  Sending...
                </span>
              ) : bookingType === "confirm" ? (
                "Confirm & Submit"
              ) : (
                `Lock Rates & Submit (₹${tokenAmount})`
              )}
            </button>
          </div>
        </motion.div>
      )}

      {/* Trust line */}
      <p className="text-center text-[13px] font-medium" style={{ color: "rgba(255,200,80,0.75)" }}>
        ⏱️ We will call you within 2 hours
      </p>

      {/* Micro-trust strip */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
        {[
          bookingType === "confirm" ? "25% Advance Payment" : "Price Lock Guarantee",
          bookingType === "confirm" ? "Exact Dates Confirmed" : "Flexible Dates",
          "Govt. Registered Agency",
        ].map(t => (
          <span key={t} className="text-white/70 text-[11px] flex items-center gap-1">
            <CheckCircle2 size={10} className="text-emerald-400/80 flex-shrink-0" />
            {t}
          </span>
        ))}
      </div>
    </form>
  );
}
// ─── Section ─────────────────────────────────────────────────────────────────
const proofPoints = [
  { icon: Star,         text: "4.9★ on Google",      sub: "312 verified reviews" },
  { icon: Users,        text: "50,000+ pilgrims",     sub: "Trusted since 2009" },
  { icon: ShieldCheck,  text: "Zero hidden charges",  sub: "Price you see is what you pay" },
  { icon: BadgeCheck,   text: "Govt. Registered Agency", sub: "GSTIN: 09CJPPJ6346G1ZR" },
];

export default function LeadCapture({ defaultTour }: { defaultTour?: string }) {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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
    <section
      ref={ref}
      id="get-quote"
      className="relative overflow-hidden"
      data-section="lead-form"
      style={{
        background:
          "linear-gradient(180deg, #100500 0%, #160800 40%, #1c0a00 80%, #1f0c00 100%)",
      }}
    >
      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 30%, rgba(255,107,0,0.3) 50%, rgba(212,175,55,0.25) 70%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 65% 50%, rgba(255,107,0,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left: Value Proposition ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pt-4"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-saffron-500/40" />
              <span className="text-saffron-400 text-[10px] font-bold tracking-[0.35em] uppercase">
                Quick Enquiry
              </span>
            </div>

            <h2 className="font-playfair font-bold text-white leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.85rem, 4vw, 2.8rem)" }}
            >
              Plan Your Divine{" "}
              <span className="text-gradient-gold">Kashi Yatra</span>
            </h2>

            <p className="text-white/50 text-[15px] leading-relaxed mb-8 max-w-sm">
              Fill in your details. Our pilgrimage expert will call you within 2 hours
              with a personalised itinerary and the best available price.
            </p>

            {/* Inclusions */}
            <ul className="space-y-3 mb-10">
              {inclusions.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-saffron-500/15 border border-saffron-400/25 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={11} className="text-saffron-400" />
                  </div>
                  <span className="text-white/65 text-[14px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Proof grid */}
            <div className="grid grid-cols-2 gap-3">
              {proofPoints.map(({ icon: Icon, text, sub }) => (
                <div
                  key={text}
                  className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4"
                >
                  <Icon size={16} className="text-saffron-400 mb-2.5" />
                  <div className="text-white font-semibold text-[13px] leading-tight">{text}</div>
                  <div className="text-white/35 text-[11px] mt-0.5 leading-tight">{sub}</div>
                </div>
              ))}
            </div>

            {/* Testimonial snippet */}
            <div
              className="mt-8 rounded-2xl p-5 border border-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-0.5 mb-2.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>
              <p className="text-white/55 text-[13px] leading-relaxed italic mb-3">
                &ldquo;Everything was arranged perfectly — hotel, darshan, transport. We just
                came with devotion and they handled everything else. Priceless experience.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-saffron-500/20 flex items-center justify-center text-saffron-400 text-[11px] font-bold flex-shrink-0">
                  RS
                </div>
                <div>
                  <div className="text-white/60 text-[12px] font-medium">Ramesh Sharma</div>
                  <div className="text-white/30 text-[10px]">Delhi · Verified pilgrim</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-3xl p-6 sm:p-8 border"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.04) 100%)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                borderColor: "rgba(212,175,55,0.2)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Form header */}
              <div className="mb-7 pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.25) 0%, rgba(212,175,55,0.15) 100%)" }}
                  >
                    <span className="font-playfair text-gold-400 text-lg font-bold leading-none">ॐ</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-white text-[1.25rem] leading-tight">
                      Get Your Free Tour Quote
                    </h3>
                    <p className="text-white/40 text-[12px] mt-0.5">
                      Confirm Travel This Month (25% Adv) OR Lock Future Rates (₹{tokenAmount})
                    </p>
                  </div>
                </div>
              </div>

              <LeadForm defaultTour={defaultTour} tokenAmount={tokenAmount} setTokenAmount={setTokenAmount} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.15) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}
