"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, MessageCircle, Clock, MapPin, Hotel, Car, UserCheck, Ticket, Sparkles } from "lucide-react";

const WA_NUMBER = "917408763401";

const packages = [
  {
    id: "kashi-darshan",
    name: "Kashi Darshan",
    subtitle: "Ideal for a short, focused pilgrimage to Varanasi",
    duration: "2 Nights / 3 Days",
    cities: ["Varanasi"],
    price: 22000,
    originalPrice: 28000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#FF6B00",
    features: [
      "AC Car Sightseeing Transfers",
      "Airport / Railway Pickup & Drop",
      "Kashi Vishwanath VIP Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Kaal Bhairav & Annapurna Temple",
      "Ganga Aarti Private Boat Ride",
      "24/7 WhatsApp Support",
    ],
    note: "Ideal for a short divine weekend escape",
  },
  {
    id: "kashi-ayodhya",
    name: "Kashi Ayodhya",
    subtitle: "Our most booked Kashi tour with Ayodhya",
    duration: "3 Nights / 4 Days",
    cities: ["Varanasi", "Ayodhya"],
    price: 32000,
    originalPrice: 42000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png",
    popular: true,
    featured: false,
    ctaText: "Get Full Itinerary",
    accent: "#D4AF37",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Kashi Vishwanath VIP Darshan",
      "Kashi Vishwanath VIP Darshan Included",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Hanuman Garhi & Kanak Bhawan",
    ],
    note: "8 of 12 seats booked this week",
  },
  {
    id: "kashi-prayagraj-ayodhya",
    name: "Kashi · Prayagraj · Ayodhya",
    subtitle: "The complete tirthdham circuit",
    duration: "4 Nights / 5 Days",
    cities: ["Varanasi", "Prayagraj", "Ayodhya"],
    price: 40000,
    originalPrice: 52000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triveni_Sangam.JPG/960px-Triveni_Sangam.JPG",
    popular: false,
    featured: true,
    ctaText: "Get Full Itinerary",
    accent: "#7C3AED",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Kashi Vishwanath VIP Darshan",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Triveni Sangam Prayagraj Visit",
      "Kashi Vishwanath VIP Darshan",
      "Ganga Aarti at Dashashwamedh Ghat",
    ],
    note: "Covers three of India's holiest cities",
  },
  {
    id: "kashi-prayagraj",
    name: "Kashi · Prayagraj",
    subtitle: "Sacred confluence and heritage tour",
    duration: "3 Nights / 4 Days",
    cities: ["Varanasi", "Prayagraj"],
    price: 30000,
    originalPrice: 38000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Viswanath_temple_Varanasi_02.jpg/960px-Viswanath_temple_Varanasi_02.jpg",
    popular: false,
    featured: false,
    ctaText: "Get Tour Details",
    accent: "#0891B2",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Kashi Vishwanath VIP Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Triveni Sangam Prayagraj Visit",
      "Ganga Aarti & Boat Ride",
      "24/7 WhatsApp Support",
    ],
    note: "Ancient ghats meet holy Triveni Sangam",
  },
  {
    id: "kashi-ayodhya-chitrakoot",
    name: "Kashi · Ayodhya · Chitrakoot",
    subtitle: "Tracing the sacred path of devotion",
    duration: "4 Nights / 5 Days",
    cities: ["Varanasi", "Ayodhya", "Chitrakoot"],
    price: 40000,
    originalPrice: 52000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mandakini_River.jpg/960px-Mandakini_River.jpg",
    popular: false,
    featured: false,
    ctaText: "Talk To Tour Expert",
    accent: "#059669",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Kashi Vishwanath VIP Darshan",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "Kamadgiri Parikrama Chitrakoot",
      "Ramghat & Sati Anusuya Ashram",
      "Kashi Vishwanath VIP Darshan",
    ],
    note: "Follow the sacred trails from Kashi to Chitrakoot",
  },
  {
    id: "full-kashi-circuit",
    name: "Sacred Ganga Circuit",
    subtitle: "The ultimate holy pilgrimage",
    duration: "5 Nights / 6 Days",
    cities: ["Varanasi", "Prayagraj", "Ayodhya", "Chitrakoot"],
    price: 50000,
    originalPrice: 65000,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG",
    popular: false,
    featured: true,
    ctaText: "Talk To Tour Expert",
    accent: "#8B0000",
    features: [
      "Intercity AC Car Transfers",
      "Airport / Railway Pickup & Drop",
      "Kashi Vishwanath VIP Darshan Pass",
      "Professional Licensed Guide",
      "3 Star / 4 Star Hotel Stay",
      "All 4 Sacred Destinations Covered",
      "Triveni Sangam + Kamadgiri Parikrama",
      "Ganga Aarti + Kashi Vishwanath VIP Darshan",
    ],
    note: "Most complete sacred tirth circuit — limited slots",
  },
];

const coreInclusions = [
  { icon: Car,      label: "AC Transfer" },
  { icon: Hotel,    label: "3★/4★ Hotel" },
  { icon: Ticket,   label: "Darshan Pass" },
  { icon: UserCheck,label: "Expert Guide" },
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
      className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 ${
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
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
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
          {pkg.name}
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
        <div className={`mb-6 flex items-center justify-between gap-3 border-t border-b py-4 ${
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
            className={`flex items-center gap-1 px-3 py-2 rounded-xl text-[12px] font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm ${
              isPopular
                ? "bg-gradient-to-r from-saffron-500/25 to-amber-500/25 text-amber-200 border border-saffron-500/40 hover:from-saffron-500/35 hover:to-amber-500/35"
                : "bg-gradient-to-r from-amber-50 to-amber-100/60 text-amber-900 border border-amber-200/80 hover:from-amber-100 hover:to-amber-200/50"
            }`}
          >
            <span className="text-[11px]">🔒</span>
            <span>Lock Price at ₹{tokenAmount.toLocaleString("en-IN")}</span>
            <span className="text-[9px] opacity-70">❯</span>
          </a>

          {/* Pricing */}
          <div className="text-right">
            <div className="flex items-baseline justify-end gap-1.5">
              <span className={`text-[12px] line-through ${
                isPopular ? "text-white/35" : "text-gray-400"
              }`}>
                ₹{pkg.originalPrice.toLocaleString("en-IN")}
              </span>
              <span className={`font-playfair font-bold text-2xl sm:text-[1.7rem] leading-none ${
                isPopular ? "text-gold-400" : "text-divine-dark"
              }`}>
                ₹{pkg.price.toLocaleString("en-IN")}
              </span>
            </div>
            <p className={`text-[10px] mt-1 ${isPopular ? "text-white/30" : "text-gray-400"}`}>
              Onwards / couple
            </p>
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
              <span className="text-red-500 font-bold text-[10px] mt-[1.5px] flex-shrink-0">✕</span>
              <span className={isPopular ? "text-white/60" : "text-gray-500"}>
                Transport tickets (Bus, Train, Flight) are NOT included
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
                Darshan pass is ONLY provided with complete package
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <a
          href="#get-quote"
          onClick={() => {
            const event = new CustomEvent("select-tour", {
              detail: { tourId: pkg.id, mode: "confirm" }
            });
            window.dispatchEvent(event);
          }}
          className={`wa-shimmer flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl text-white font-bold text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            isPopular
              ? "bg-gold-gradient text-divine-dark hover:brightness-105"
              : "hover:brightness-110"
          }`}
          style={
            isPopular
              ? {}
              : { backgroundColor: pkg.accent }
          }
          data-cta="scroll-quote"
          data-source="packages"
          data-package={pkg.id}
        >
          {pkg.ctaText}
        </a>

        <p className={`text-center text-[11px] mt-2.5 ${
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
          <div className="ornament-line max-w-[200px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Choose Your Journey
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Ayodhya Tour{" "}
            <span className="text-gradient-saffron">Packages 2025</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Every detail pre-arranged — hotel, darshan pass, AC transport and expert guide — so you arrive and simply pray.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 bg-white border border-gray-100 shadow-sm rounded-full px-5 py-2.5">
            <MapPin size={13} className="text-saffron-500" />
            Departures from all major cities across India
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} tokenAmount={tokenAmount} />
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
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600 font-bold text-sm">✕</div>
              <div>
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">No Transport Tickets</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Any type of transportation tickets (like flights, train tickets, or interstate buses) are not included. Devotees must book their own travel, or we can assist at actual cost.</p>
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
                <h4 className="font-semibold text-divine-dark text-[13px] mb-1">Darshan Pass Booking</h4>
                <p className="text-gray-400 text-xs leading-relaxed">Ram Mandir darshan passes are arranged strictly as part of our complete tour packages. We do not provide or sell standalone passes without hotel/transport booking.</p>
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
