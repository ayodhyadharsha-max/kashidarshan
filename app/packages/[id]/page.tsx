"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Check, Star, BadgeCheck, ShieldCheck, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import LeadCapture from "@/components/LeadCapture";
import { packages, coreInclusions } from "@/components/Packages";
import { itineraries } from "@/components/Itinerary";

interface PageProps {
  params: {
    id: string;
  };
}

const customItineraries: Record<string, { title: string; activities: { time: string; activity: string }[] }[]> = {
  "sawan-somvar-special": [
    {
      title: "Day 1 — Sawan Somvar Abhishek & Kashi VIP Darshan",
      activities: [
        { time: "07:30 AM", activity: "Early morning pickup from Varanasi Airport / Railway Station. Drive to local hotel/lounge to freshen up." },
        { time: "09:00 AM", activity: "Collect holy Ganga water (Ganga Jal) at Dashashwamedh Ghat for Abhishek." },
        { time: "10:30 AM", activity: "VIP Kashi Vishwanath Darshan with Sawan-dedicated priority pass. Perform jal-abhishek." },
        { time: "01:30 PM", activity: "Traditional Satvik lunch. Visit Annapurna Mandir, Kaal Bhairav, and Mrityunjay Mahadev." },
        { time: "04:30 PM", activity: "Visit Sawan devotional markets. Complimentary Kanwar/pilgrim kit for yatris." },
        { time: "06:30 PM", activity: "Drop-off at Varanasi Airport / Railway Station for departure train/flight. Har Har Mahadev!" }
      ]
    }
  ],
  "kashi-kanwar-yatra-2n3d": [
    {
      title: "Day 1 — Kashi Sawan Arrival, Ganga water collection & Ganga Aarti",
      activities: [
        { time: "Morning", activity: "Arrive at Varanasi Airport / Railway Station. Transfer to hotel, check-in and freshen up." },
        { time: "Afternoon", activity: "Head to the ghats for holy Ganga water collection. Visit Kaal Bhairav (Kotwal of Kashi) for permission." },
        { time: "Evening", activity: "Watch the spectacular Ganga Aarti from a pre-booked private boat. Overnight stay in Varanasi." }
      ]
    },
    {
      title: "Day 2 — VIP Kashi Vishwanath Sawan Abhishek & Mrityunjay Mahadev",
      activities: [
        { time: "08:00 AM", activity: "Head for VIP Kashi Vishwanath Sawan Darshan. Complete puja and abhishek." },
        { time: "Afternoon", activity: "Lunch and visit BHU Vishwanath temple, Durga Kund, and Sankat Mochan Mandir." },
        { time: "Evening", activity: "Visit Mrityunjay Mahadev temple (renowned for healing powers). Evening free for shopping Banarasi silk or local crafts. Night stay in Varanasi." }
      ]
    },
    {
      title: "Day 3 — Sarnath Buddhist Site & Departure",
      activities: [
        { time: "Morning", activity: "Breakfast at hotel. Visit the peaceful Sarnath archaeological site (where Buddha gave his first sermon)." },
        { time: "Afternoon", activity: "Check-out from hotel. Final souvenir shopping for religious souvenirs." },
        { time: "Evening", activity: "Transfer to Varanasi Airport / Railway Station for departure. Har Har Mahadev!" }
      ]
    }
  ],
  "sawan-shiva-circuit-3n4d": [
    {
      title: "Day 1 — Varanasi Arrival & Evening Ganga Aarti",
      activities: [
        { time: "Morning", activity: "Arrive at Varanasi Airport / Railway Station. Transfer to hotel and check-in." },
        { time: "Afternoon", activity: "Visit Kaal Bhairav and local temples. Enjoy a heritage walk of Kashi's ghats." },
        { time: "Evening", activity: "Private boat ride on Ganga to witness the evening Ganga Aarti. Overnight stay in Varanasi." }
      ]
    },
    {
      title: "Day 2 — Sawan Kashi Vishwanath VIP Darshan & travel to Prayagraj",
      activities: [
        { time: "08:00 AM", activity: "Seek blessings at Kashi Vishwanath Temple with VIP Sawan access assistance." },
        { time: "11:30 AM", activity: "Drive to Prayagraj in private AC Cab. Check-in at hotel." },
        { time: "Afternoon", activity: "Visit Triveni Sangam for a holy dip, Bade Hanuman Ji temple, and Alopi Devi Shaktipeeth." },
        { time: "Evening", activity: "Dinner and overnight stay in Prayagraj." }
      ]
    },
    {
      title: "Day 3 — Travel to Ayodhya & Ram Ki Paidi Saryu Aarti",
      activities: [
        { time: "Morning", activity: "Drive from Prayagraj to Ayodhya in private AC Cab. Check-in at hotel." },
        { time: "Afternoon", activity: "Visit Hanuman Garhi and Kanak Bhawan temples." },
        { time: "Evening", activity: "Attend Saryu River evening Aarti at Ram Ki Paidi. Overnight stay in Ayodhya." }
      ]
    },
    {
      title: "Day 4 — Ram Mandir VIP Darshan & Departure",
      activities: [
        { time: "Morning", activity: "Morning visit to the magnificent new Ram Mandir for VIP Ram Lalla darshan. Visit Dashrath Mahal." },
        { time: "Afternoon", activity: "Check-out from hotel. Final souvenir shopping." },
        { time: "Evening", activity: "Transfer to Ayodhya Airport / Railway Station for departure flight/train. Jai Shri Ram!" }
      ]
    }
  ],
  "ayodhya-same-day": [
    {
      title: "Day 1 — Complete Ayodhya Day Sightseeing & Ram Mandir VIP Darshan",
      activities: [
        { time: "09:00 AM", activity: "Morning pickup from Ayodhya Airport / Railway Station (or Lucknow, optional). Drive to local hotel/lounge to freshen up." },
        { time: "10:30 AM", activity: "VIP Ram Mandir Darshan with pre-arranged entry passes. Explore the majestic temple complex and corridors." },
        { time: "01:30 PM", activity: "Traditional satvik lunch. Visit Hanuman Garhi and Kanak Bhawan temples with our guide." },
        { time: "04:30 PM", activity: "Explore Ram Ki Paidi ghats, Dashrath Mahal, and take in the local heritage atmosphere." },
        { time: "06:00 PM", activity: "Attend the divine Saryu River evening Aarti. Transfer back to your departure terminal. Jai Shri Ram!" }
      ]
    }
  ],
  "varanasi-same-day": [
    {
      title: "Day 1 — Complete Varanasi Temples & Ganga Aarti",
      activities: [
        { time: "08:30 AM", activity: "Morning pickup from Varanasi Airport / Railway Station. Freshen up and start the yatra." },
        { time: "09:30 AM", activity: "VIP Kashi Vishwanath Temple Darshan. Visit adjacent Annapurna Mandir and Kaal Bhairav temple." },
        { time: "01:00 PM", activity: "Traditional Banarasi satvik lunch. Visit Banaras Hindu University (BHU) Vishwanath temple." },
        { time: "03:00 PM", activity: "Excursion to Sarnath Buddhist site - explore Dhamek Stupa, ancient ruins, and museum." },
        { time: "05:30 PM", activity: "Experience the spectacular Ganga Aarti at Dashashwamedh Ghat from a pre-booked private boat. Departure drop at Airport/Station." }
      ]
    }
  ],
  "ayodhya-1n-2d": [
    {
      title: "Day 1 — Arrival in Ayodhya & Local Sightseeing",
      activities: [
        { time: "Morning", activity: "Arrive at Ayodhya Airport / Railway Station. Meet & greet, transfer to hotel and check-in." },
        { time: "Afternoon", activity: "Visit Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Sugreev Kila." },
        { time: "Evening", activity: "Attend Saryu River evening Aarti at Ram Ki Paidi. Overnight stay in Ayodhya." }
      ]
    },
    {
      title: "Day 2 — Ram Mandir VIP Darshan & Departure",
      activities: [
        { time: "Morning", activity: "Morning visit to the magnificent new Ram Mandir for VIP Ram Lalla darshan. Visit Karsevakpuram." },
        { time: "Afternoon", activity: "Check-out from hotel. Final souvenir shopping for Ram Mandir models and local handicrafts." },
        { time: "Evening", activity: "Transfer to Ayodhya Airport / Railway Station for departure flight/train. Jai Shri Ram!" }
      ]
    }
  ],
  "varanasi-1n-2d": [
    {
      title: "Day 1 — Kashi Vishwanath VIP Darshan & Ganga Aarti",
      activities: [
        { time: "Morning", activity: "Arrive at Varanasi Airport / Railway Station. Transfer to hotel, check-in and freshen up." },
        { time: "Afternoon", activity: "VIP Kashi Vishwanath Mandir Darshan, Annapurna Temple, and Kaal Bhairav Temple." },
        { time: "Evening", activity: "Witness the magical evening Ganga Aarti from a private boat ride on the holy river. Night stay in Varanasi." }
      ]
    },
    {
      title: "Day 2 — Sarnath Excursion & Departure",
      activities: [
        { time: "Morning", activity: "Drive to Sarnath. Explore Dhamek Stupa, Buddhist monasteries, and Sarnath Museum." },
        { time: "Afternoon", activity: "Check-out and enjoy a heritage walk. Souvenir shopping for Banarasi silk sarees and metal crafts." },
        { time: "Evening", activity: "Transfer to Varanasi Airport / Railway Station for departure. Har Har Mahadev!" }
      ]
    }
  ],
  "prayagraj-same-day": [
    {
      title: "Day 1 — Triveni Sangam Holy Dip & Prayagraj Sightseeing",
      activities: [
        { time: "08:00 AM", activity: "Morning pickup from Prayagraj Airport / Railway Station. Meet & greet and start the tour." },
        { time: "09:30 AM", activity: "Head to Triveni Sangam (confluence of Ganga, Yamuna, & invisible Saraswati) for a holy dip with private boat ride." },
        { time: "12:30 PM", activity: "Visit the historical Bade Hanuman Ji Temple (Lete Hanuman Mandir) and the Akshaya Vat tree." },
        { time: "02:00 PM", activity: "Traditional North Indian lunch. Visit Anand Bhawan (historic Nehru family ancestral home) and Swaraj Bhawan." },
        { time: "04:30 PM", activity: "Visit Alopi Devi Mandir and explore local Prayagraj craft markets." },
        { time: "06:30 PM", activity: "Transfer to Prayagraj Airport / Railway Station for departure flight/train." }
      ]
    }
  ],
  "varanasi-ayodhya-2n3d": [
    {
      title: "Day 1 — Varanasi Arrival & Ganga Aarti",
      activities: [
        { time: "Morning", activity: "Arrive at Varanasi Airport / Railway Station. Transfer to hotel and check-in." },
        { time: "Afternoon", activity: "Visit Kashi Vishwanath VIP Darshan, Kal Bhairav temple, and Annapurna Mandir." },
        { time: "Evening", activity: "Experience the spectacular Ganga Aarti from a pre-booked private boat. Overnight stay in Varanasi." }
      ]
    },
    {
      title: "Day 2 — Travel to Ayodhya & Saryu Aarti",
      activities: [
        { time: "Morning", activity: "Breakfast at hotel, check-out and drive to Ayodhya in private AC Cab." },
        { time: "Afternoon", activity: "Arrive in Ayodhya, check-in at hotel. Visit Hanuman Garhi and Kanak Bhawan." },
        { time: "Evening", activity: "Attend Saryu River evening Aarti at Ram Ki Paidi. Overnight stay in Ayodhya." }
      ]
    },
    {
      title: "Day 3 — Ram Mandir VIP Darshan & Departure",
      activities: [
        { time: "Morning", activity: "Morning visit to the magnificent new Ram Mandir for VIP Ram Lalla darshan. Visit Dashrath Mahal." },
        { time: "Afternoon", activity: "Check-out from hotel. Final souvenir shopping for Ram Mandir models and local handicrafts." },
        { time: "Evening", activity: "Transfer to Ayodhya Airport / Railway Station for departure flight/train. Jai Shri Ram!" }
      ]
    }
  ],
  "ayodhya-darshan": [
    {
      title: "Day 1 — Arrival in Ayodhya & Saryu Aarti",
      activities: [
        { time: "Morning", activity: "Arrive at Ayodhya Airport / Railway Station. Meet & greet by our representative. Transfer to hotel, check-in and freshen up." },
        { time: "Afternoon", activity: "Visit Hanuman Garhi and Kanak Bhawan temples. Witness the historic footprints of Lord Ram's capital." },
        { time: "Evening", activity: "Attend the divine Saryu River Aarti at Ram Ki Paidi. Enjoy a peaceful dinner at your Ayodhya hotel." }
      ]
    },
    {
      title: "Day 2 — Ram Mandir VIP Darshan & Local Sightseeing",
      activities: [
        { time: "Morning", activity: "Morning visit to the magnificent new Ram Mandir for Ram Lalla darshan with pre-arranged pass. Explore the temple corridor." },
        { time: "Afternoon", activity: "Visit Dashrath Mahal, Mani Parvat, and Sugreev Kila. Learn the glorious history of Treta Yuga." },
        { time: "Evening", activity: "Relax at Ram Ki Paidi ghats. Enjoy local sweet treats and a traditional dinner at the hotel." }
      ]
    },
    {
      title: "Day 3 — Holy Bath & Departure",
      activities: [
        { time: "Morning", activity: "Take a holy dip in the Saryu River. Visit Guptar Ghat, where Lord Ram took his Jal Samadhi." },
        { time: "Afternoon", activity: "Check-out from hotel. Final souvenir shopping for Ram Mandir models and local handicrafts." },
        { time: "Evening", activity: "Transfer to Ayodhya Airport / Railway Station for onward journey. Jai Shri Ram! 🙏" }
      ]
    }
  ],
  "lucknow-ayodhya": [
    {
      title: "Day 1 — Arrival in Lucknow & Heritage Sightseeing",
      activities: [
        { time: "Morning", activity: "Arrive at Lucknow Airport / Railway Station. Transfer to hotel and check-in." },
        { time: "Afternoon", activity: "Visit the grand Bara Imambara, Chhota Imambara, and the historic British Residency." },
        { time: "Evening", activity: "Explore the bustling Hazratganj bazaar. Taste the world-famous Awadhi cuisine (kebabs and biryani)." }
      ]
    },
    {
      title: "Day 2 — Drive to Ayodhya & Saryu Aarti",
      activities: [
        { time: "Morning", activity: "Check-out and drive to Ayodhya (135 km, approx 3 hours). Check-in at Ayodhya hotel and rest." },
        { time: "Afternoon", activity: "Visit Kanak Bhawan, Hanuman Garhi, and Dashrath Mahal. Soak in the spiritual vibes." },
        { time: "Evening", activity: "Attend the grand Saryu River Aarti at Ram Ki Paidi. Overnight stay in Ayodhya." }
      ]
    },
    {
      title: "Day 3 — Ram Mandir VIP Darshan & Local Explorations",
      activities: [
        { time: "Morning", activity: "Early morning darshan of Ram Lalla at the new Ram Mandir with pre-arranged slot. Visit Ram Janmabhoomi complex." },
        { time: "Afternoon", activity: "Visit Karsevakpuram and Mani Parvat. Explore the local crafts and devotional souvenir shops." },
        { time: "Evening", activity: "A peaceful evening walk along Saryu Ghats. Dinner and overnight stay in Ayodhya." }
      ]
    },
    {
      title: "Day 4 — Departure via Lucknow",
      activities: [
        { time: "Morning", activity: "Breakfast at hotel. Check-out and drive back to Lucknow (approx 3 hours)." },
        { time: "Afternoon", activity: "Transfer to Lucknow Airport / Railway Station for departure flight/train." },
        { time: "Evening", activity: "Depart with hearts filled with the blessings of Lord Ram. Jai Shri Ram! 🙏" }
      ]
    }
  ]
};

const packageToItineraryIdMap: Record<string, string> = {
  "ayodhya-varanasi": "kashi-ayodhya",
  "ayodhya-prayagraj-varanasi": "kashi-prayagraj-ayodhya",
  "ayodhya-varanasi-chitrakoot": "kashi-ayodhya-chitrakoot",
  "full-ramayana-circuit": "full-kashi-circuit",
  "sarnath-buddhist-tour": "sarnath-buddhist-tour",
  "buddhist-circuit-tour": "buddhist-circuit-tour",
  "kashi-heritage-tour": "kashi-heritage-tour"
};

export default function PackageDetailPage({ params }: PageProps) {
  const { id } = params;
  const pkg = packages.find((p) => p.id === id);

  // Accordion open/close state for itinerary days
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 0: true });

  const toggleDay = (idx: number) => {
    setOpenDays((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#100500] flex flex-col items-center justify-center text-center p-6 font-inter">
        <h1 className="text-white text-3xl font-bold mb-4 font-playfair">Package Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md">The pilgrimage package you are looking for does not exist or has been updated.</p>
        <Link href="/" className="bg-saffron-gradient text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg transition-transform hover:scale-105 active:scale-95">
          Return to Home
        </Link>
      </div>
    );
  }

  // Find day-by-day itinerary
  let daysData = customItineraries[id] || [];
  if (daysData.length === 0) {
    const matchedIt = itineraries.find((it) => it.id === packageToItineraryIdMap[id]);
    if (matchedIt) {
      daysData = matchedIt.days;
    }
  }

  const defaultTourSelect = `${pkg.name} (${pkg.duration.replace(" Nights / ", "N/").replace(" Days", "D")})`;

  return (
    <div className="bg-cream min-h-screen text-divine-dark font-inter">
      <AnnouncementBar />
      <Navbar />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        
        {/* Back Link & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-saffron-600 hover:text-saffron-700 font-semibold text-sm transition-colors group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to All Packages
          </Link>
          <div className="text-xs text-gray-400">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 font-medium">{pkg.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Details & Itinerary */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Main Header / Title Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-700">
                  <Clock size={11} />
                  {pkg.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700">
                  <MapPin size={11} />
                  {pkg.cities.join(" · ")}
                </span>
                {pkg.popular && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded-full bg-amber-500 text-white shadow-sm uppercase tracking-wide">
                    <Sparkles size={10} className="fill-white" />
                    Best Value
                  </span>
                )}
              </div>

              <h1 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-divine-dark mb-4 leading-tight">
                {pkg.name} Tour Package
              </h1>
              <p className="text-gray-500 text-base sm:text-lg mb-6">
                {pkg.subtitle}
              </p>

              {/* Pricing Showcase */}
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-gray-100 pt-6">
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-1">PROMOTIONAL RATE</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm line-through text-gray-400">₹{(pkg.originalPrice / 2).toLocaleString("en-IN")}</span>
                    <span className="font-playfair font-bold text-3xl sm:text-4xl text-saffron-600">₹{(pkg.price / 2).toLocaleString("en-IN")}</span>
                    <span className="text-xs text-gray-500 font-medium">/ person</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1.5 font-medium">
                    (₹{pkg.price.toLocaleString("en-IN")} total for couple on double sharing)
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-divine-dark uppercase tracking-wider">Govt. Registered</h4>
                    <p className="text-[10px] text-gray-400">GSTIN: 09CJPPJ6346G1ZR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Showcase Image */}
            <div className="relative h-64 sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-md">
              <img
                src={pkg.image}
                alt={`${pkg.name} Destination Banner`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Inclusions / Highlights */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-playfair font-bold text-xl text-divine-dark mb-6 flex items-center gap-2.5">
                <span className="text-lg">✅</span> What's Included in Your Stay & Transport
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-emerald-600 stroke-[3px]" />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>

              {/* Core Features Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100 text-center">
                {coreInclusions.map(({ icon: Icon, label }) => (
                  <div key={label} className="bg-cream-dark/30 border border-gray-50 rounded-2xl p-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-saffron-500/10 flex items-center justify-center text-saffron-600 mb-2">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-semibold text-divine-dark">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordions */}
            {daysData.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-playfair font-bold text-xl text-divine-dark flex items-center gap-2.5">
                    <span className="text-lg">🗺️</span> Day-by-Day Devotional Itinerary
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">Collapsible daily itinerary details. Click any day to view activities.</p>
                </div>

                <div className="space-y-4">
                  {daysData.map((day, dIdx) => {
                    const isOpen = openDays[dIdx];
                    return (
                      <div key={dIdx} className="border border-gray-100 rounded-2xl overflow-hidden">
                        
                        {/* Day Header Trigger */}
                        <button
                          onClick={() => toggleDay(dIdx)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 text-left transition-colors"
                        >
                          <span className="font-semibold text-sm sm:text-base text-divine-dark flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-saffron-500 text-white text-[11px] font-bold flex items-center justify-center">
                              {dIdx + 1}
                            </span>
                            {day.title}
                          </span>
                          {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                        </button>

                        {/* Day Activities Content */}
                        {isOpen && (
                          <div className="p-4 sm:p-6 bg-white space-y-4 border-t border-gray-50">
                            {day.activities.map((act, aIdx) => (
                              <div key={aIdx} className="flex gap-4 items-start relative group">
                                {aIdx < day.activities.length - 1 && (
                                  <div className="absolute left-[34px] top-6 bottom-0 w-px bg-gray-100 group-hover:bg-saffron-500/20 transition-colors" />
                                )}
                                <div className="text-[10px] font-bold uppercase tracking-wider text-saffron-600 bg-saffron-500/10 border border-saffron-500/20 px-2.5 py-1 rounded-lg w-20 text-center flex-shrink-0 mt-0.5">
                                  {act.time}
                                </div>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed pt-0.5 flex-1">
                                  {act.activity}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Travel Guidelines Card */}
            <div className="bg-amber-500/10 border border-amber-500/25 rounded-3xl p-6 sm:p-8 space-y-4">
              <h4 className="font-bold text-amber-200 text-base flex items-center gap-2">
                <span>⚠️</span> Guidelines & Exclusion Terms
              </h4>
              <ul className="space-y-3.5 text-xs text-gray-300 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-sm">✈️</span>
                  <span><strong>Flight/Train Tickets:</strong> Transport tickets are excluded from starting package totals. You can book them on your own or authorize our executive to arrange bookings at actual cost during confirmation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>GST:</strong> A standard 5% GST / Service Tax is not included in the pre-tax rates displayed and will be itemized clearly in the invoice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 font-bold">⚠️</span>
                  <span><strong>Complete Package:</strong> To maintain premium services and logistics safety, we operate strictly on full-trip package bookings (stating hotel rooms, transfers, and sightseeing). Single element bookings are not available.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Sticky Lead Capture Form Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Pre-configured Form Card */}
            <div className="bg-divine-dark border border-gold-500/15 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="mb-6 border-b border-white/[0.08] pb-4">
                <h3 className="font-playfair font-bold text-white text-lg">Inquire for this Package</h3>
                <p className="text-white/40 text-[11px] mt-1">Pre-selected: <span className="text-gold-400 font-semibold">{pkg.name}</span></p>
              </div>

              {/* Render the core lead capture form component pre-configured */}
              <div className="lead-capture-page-scope">
                <LeadCapture defaultTour={defaultTourSelect} />
              </div>
            </div>

            {/* Quick Trust Badges */}
            <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-divine-dark uppercase tracking-wider text-center border-b border-gray-100 pb-3">
                Why book with us?
              </h4>
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron-500/10 flex items-center justify-center text-saffron-600 flex-shrink-0">
                    <Star size={14} className="fill-saffron-600" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-divine-dark">4.9★ on Google Reviews</h5>
                    <p className="text-[10px] text-gray-400">Based on 312+ verified yatris</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-divine-dark">Zero Hidden Charges</h5>
                    <p className="text-[10px] text-gray-400">Prices are transparent and pre-agreed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <BadgeCheck size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-divine-dark">25% Advance Booking</h5>
                    <p className="text-[10px] text-gray-400">Balance paid during the yatra</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}
