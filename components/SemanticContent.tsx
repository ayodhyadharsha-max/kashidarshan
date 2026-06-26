"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Users, Calendar, Star, Check } from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const quickAnswers = [
  {
    question: "Which Kashi Varanasi tour package is best for a first-time pilgrim?",
    answer:
      "If this is your first visit to Varanasi, the Kashi Darshan Package (2 Nights / 3 Days, starting ₹22,000 for couple) covers everything essential — Kashi Vishwanath Temple VIP darshan, Kaal Bhairav Temple, Annapurna Temple, and Ganga Ghats. You get a pre-arranged VIP darshan pass, hotel near the temple, and a knowledgeable guide. No queuing, no logistics stress — just devotion.",
    icon: Star,
    accent: "#D4AF37",
    tag: "Best for beginners",
  },
  {
    question: "Can I do a Varanasi same-day tour?",
    answer:
      "Yes. A same-day Varanasi sightseeing tour is very popular for those with limited time. In a single day, you can comfortably cover Kashi Vishwanath Temple VIP darshan, Kaal Bhairav Temple, Annapurna Temple, Sarnath Buddhist Stupa, and witness the grand Evening Ganga Aarti. We arrange a dedicated AC cab and local guide. WhatsApp us your arrival time and we will curate the perfect schedule for you.",
    icon: Clock,
    accent: "#FF6B00",
    tag: "Same-day tour",
  },
  {
    question: "Which tour covers Varanasi, Prayagraj and Ayodhya together?",
    answer:
      "Our Kashi–Prayagraj–Ayodhya Tour Package (4 Nights / 5 Days, ₹40,000 for couple) is designed exactly for this. Spend Day 1–2 in Varanasi for Kashi Vishwanath VIP darshan and Ganga Aarti, Day 3 in Prayagraj for Triveni Sangam, and Day 4–5 in Ayodhya for Ram Mandir and Hanuman Garhi darshan. Everything is pre-arranged — hotels, AC transfers, darshan passes, and a guide.",
    icon: MapPin,
    accent: "#7C3AED",
    tag: "Triple circuit",
  },
  {
    question: "Is the Kashi Ayodhya package possible in 3 days?",
    answer:
      "Our Kashi Ayodhya tour is a 3 Nights / 4 Days package — the most efficient way to cover both holy cities properly. Because we provide pre-arranged VIP darshan passes, no time is wasted in long queues. You can explore Hanuman Garhi and Ram Mandir in Ayodhya, and Kashi Vishwanath Temple, Sarnath, and the world-famous Ganga Aarti in Varanasi. It is highly active, achievable, and deeply fulfilling.",
    icon: Calendar,
    accent: "#34D399",
    tag: "Ayodhya + Varanasi",
  },
  {
    question: "What makes a good Kashi Varanasi travel package?",
    answer:
      "A good Kashi Varanasi travel package must include five essential things: a confirmed Kashi Vishwanath Temple VIP darshan pass (so you don't spend hours in queues), a premium hotel within 10-15 minutes of the main temple ghats, all transfers in comfortable AC vehicles, a licensed local guide who knows the complex history and optimal darshan timings, and 24/7 support. Our packages include all five.",
    icon: Check,
    accent: "#60A5FA",
    tag: "What to look for",
  },
  {
    question: "Which Kashi package is best for large families and groups?",
    answer:
      "Our Custom Group Tour option is designed for families and groups of 8 or more. We arrange a dedicated AC tempo traveller or bus, block adjacent hotel rooms, arrange a group darshan slot at Kashi Vishwanath Temple, and assign a dedicated guide. Group bookings get priority scheduling and flexible meal arrangements. Rates are lower on a per-head basis for groups above 10 people.",
    icon: Users,
    accent: "#FB923C",
    tag: "Family & groups",
  },
];

const packageMatrix = [
  {
    name: "Kashi Darshan",
    duration: "2N / 3D",
    price: "₹22,000",
    best: "First-time pilgrims, short trips",
    includes: ["Kashi Vishwanath Temple darshan", "Kaal Bhairav Temple", "Annapurna Temple", "Ganga Ghats"],
  },
  {
    name: "Kashi – Ayodhya",
    duration: "3N / 4D",
    price: "₹32,000",
    best: "Most popular circuit",
    includes: ["Kashi Vishwanath Temple", "Kashi Vishwanath", "Ganga Aarti", "Sarnath"],
  },
  {
    name: "Kashi – Prayagraj – Ayodhya",
    duration: "4N / 5D",
    price: "₹40,000",
    best: "Three holy cities in one journey",
    includes: ["Kashi Vishwanath Temple", "Triveni Sangam", "Kashi Vishwanath", "Ganga Aarti"],
  },
  {
    name: "Full Ramayana Circuit",
    duration: "5N / 6D",
    price: "₹50,000",
    best: "Ultimate pilgrimage experience",
    includes: ["Ayodhya", "Prayagraj", "Varanasi", "Chitrakoot"],
  },
];

// ─── Components ────────────────────────────────────────────────────────────────

function AnswerCard({
  item,
  index,
}: {
  item: (typeof quickAnswers)[0];
  index: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-350"
    >
      {/* Tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
          style={{ color: item.accent, backgroundColor: `${item.accent}14` }}
        >
          {item.tag}
        </span>
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${item.accent}12` }}
        >
          <Icon size={15} style={{ color: item.accent }} />
        </div>
      </div>

      {/* Question as H3 for semantic structure */}
      <h3 className="font-playfair font-semibold text-divine-dark text-[16px] leading-snug mb-3">
        {item.question}
      </h3>

      {/* Answer */}
      <p className="text-gray-500 text-[13.5px] leading-relaxed">{item.answer}</p>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function SemanticContent() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="kashi-tour-guide"
      aria-label="Kashi tour package guide and frequently asked questions"
      className="py-20 sm:py-28 bg-sacred-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="ornament-line max-w-[240px] mx-auto mb-5">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Your Questions Answered
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-divine-dark mb-4 leading-tight">
            Everything About{" "}
            <span className="text-gradient-saffron">Kashi Tour Packages</span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            From same-day Kashi tours to the full Ramayana circuit — clear, honest answers
            to help you choose the right pilgrimage package.
          </p>
        </motion.div>

        {/* ── Answer Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {quickAnswers.map((item, i) => (
            <AnswerCard key={item.tag} item={item} index={i} />
          ))}
        </div>

        {/* ── Package Comparison Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm"
        >
          {/* Table header */}
          <div className="px-6 sm:px-8 py-6 border-b border-gray-50">
            <h2 className="font-playfair font-bold text-divine-dark text-2xl sm:text-3xl">
              Varanasi Kashi Tour Package Comparison
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              All packages include hotel, darshan pass, AC transport, and expert guide.
            </p>
          </div>

          {/* Mobile: stacked cards */}
          <div className="lg:hidden divide-y divide-gray-50">
            {packageMatrix.map((pkg) => (
              <div key={pkg.name} className="px-6 py-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-playfair font-semibold text-divine-dark text-[15px] leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-saffron-600 text-[12px] font-medium mt-0.5">{pkg.best}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-playfair font-bold text-divine-dark text-xl">{pkg.price}</div>
                    <div className="text-gray-400 text-[11px]">{pkg.duration}</div>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 text-gray-500 text-[12px] bg-gray-50 rounded-lg px-2.5 py-1"
                    >
                      <Check size={9} className="text-saffron-500 flex-shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100">
                  <th className="text-left px-8 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Package</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Duration</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Starting Price</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Best For</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-[11px] font-semibold tracking-[0.15em] uppercase">Destinations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {packageMatrix.map((pkg, i) => (
                  <tr
                    key={pkg.name}
                    className="hover:bg-saffron-50/40 transition-colors group"
                  >
                    <td className="px-8 py-5">
                      <span className="font-playfair font-semibold text-divine-dark text-[15px] group-hover:text-saffron-700 transition-colors">
                        {pkg.name}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-gray-500 text-[13px] font-medium">{pkg.duration}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-playfair font-bold text-divine-dark text-[17px]">{pkg.price}</span>
                      <span className="text-gray-300 text-[11px] ml-1">/couple</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-saffron-600 text-[13px]">{pkg.best}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.includes.map((dest) => (
                          <span
                            key={dest}
                            className="text-gray-500 text-[11px] bg-gray-50 border border-gray-100 rounded-lg px-2 py-0.5"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="px-6 sm:px-8 py-5 bg-gray-50/50 border-t border-gray-50">
            <p className="text-gray-400 text-[12px]">
              * All prices are for a couple on double-sharing basis · inclusive of hotel, darshan pass, AC transport, meals (3N+ packages) and professional guide ·{" "}
              <span className="text-saffron-600 font-medium">
                Same-day Varanasi sightseeing packages also available — WhatsApp us for details.
              </span>
            </p>
          </div>
        </motion.div>

        {/* ── Pilgrimage Context Block — Topical authority for AI ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {[
            {
              heading: "About Kashi Pilgrimage",
              body: "Varanasi, also known as Kashi, is the sacred abode of Lord Shiva and one of the oldest continuously inhabited cities in the world. The grand Kashi Vishwanath Temple housing the sacred Jyotirlinga is the heart of Kashi's spiritual life. A pilgrimage here is considered highly auspicious, offering liberation and peace.",
            },
            {
              heading: "Why Book a Guided Kashi Tour",
              body: "Kashi's temple circuit — including the Kashi Vishwanath Temple, Kaal Bhairav Temple, Annapurna Temple, and Sarnath Buddhist Stupa — spans several areas and is best explored with a local guide. A guided Kashi tour ensures you visit every sacred site in the proper ritual order without queue hassle.",
            },
            {
              heading: "Kashi as Part of a Larger Circuit",
              body: "Many pilgrims choose to combine Varanasi with Prayagraj (Triveni Sangam), Ayodhya (Ram Mandir), and Bodhgaya (Buddhist circuit) to complete their spiritual journey across Uttar Pradesh and Bihar. Our multi-city packages are structured with optimal travel time to keep you relaxed and focused on devotion.",
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              className="bg-white rounded-2xl border border-gray-100 p-6"
            >
              <h3 className="font-playfair font-semibold text-divine-dark text-[16px] mb-3 leading-snug">
                {heading}
              </h3>
              <p className="text-gray-500 text-[13.5px] leading-relaxed">{body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
