"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, X, Volume2, VolumeX, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aarti & Family",
    location: "Delhi NCR",
    yatra: "Ayodhya Darshan (2N/3D)",
    videoSrc: "/videos/review1.mp4",
    thumb: "/videos/review1.jpg?v=2",
    initials: "AS",
    isHorizontal: true,
  },
  {
    id: 2,
    name: "Rajesh Dwivedi",
    location: "Mumbai, MH",
    yatra: "Full Ramayana Circuit (5N/6D)",
    videoSrc: "/videos/review2.mp4",
    thumb: "/videos/review2.jpg?v=2",
    initials: "RD",
  },
  {
    id: 3,
    name: "Sunita Verma",
    location: "Bhopal, MP",
    yatra: "Ayodhya Varanasi (3N/4D)",
    videoSrc: "/videos/review3.mp4",
    thumb: "/videos/review3.jpg?v=2",
    initials: "SV",
  },
  {
    id: 4,
    name: "Devendra Patel",
    location: "Ahmedabad, GJ",
    yatra: "Ayodhya Prayagraj Varanasi (4N/5D)",
    videoSrc: "/videos/review4.mp4",
    thumb: "/videos/review4.jpg?v=2",
    initials: "DP",
    isHorizontal: true,
  },
  {
    id: 5,
    name: "Meera Nair",
    location: "Bengaluru, KA",
    yatra: "Ayodhya Darshan (2N/3D)",
    videoSrc: "/videos/review5.mp4",
    thumb: "/videos/review5.jpg?v=2",
    initials: "MN",
  },
  {
    id: 6,
    name: "Karan Johar",
    location: "Jaipur, RJ",
    yatra: "Lucknow Ayodhya (3N/4D)",
    videoSrc: "/videos/review6.mp4",
    thumb: "/videos/review6.jpg?v=2",
    initials: "KJ",
    isHorizontal: true,
  },
  {
    id: 7,
    name: "Pooja & Vinay",
    location: "Kolkata, WB",
    yatra: "Ayodhya Varanasi (3N/4D)",
    videoSrc: "/videos/review7.mp4",
    thumb: "/videos/review7.jpg?v=2",
    initials: "PV",
  },
  {
    id: 8,
    name: "Satish Mishra",
    location: "Patna, Bihar",
    yatra: "Full Ramayana Circuit (5N/6D)",
    videoSrc: "/videos/review8.mp4",
    thumb: "/videos/review8.jpg?v=2",
    initials: "SM",
  },
];

export default function VideoTestimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<typeof reviews[0] | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="video-reviews" className="py-24 sm:py-32 bg-gradient-to-b from-[#180900] via-divine-dark to-divine-dark relative overflow-hidden">
      {/* Background Aesthetics */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,107,0,0.1) 0%, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="ornament-line max-w-xl mx-auto mb-4">
            <span className="text-gold-600 text-[11px] tracking-[0.32em] uppercase font-semibold whitespace-nowrap px-4">
              Devotee Feedback
            </span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Pilgrims' Real <br />
            <span className="text-gradient-gold">Yatra Video Reviews</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Watch honest feedback recordings of families who completed their spiritual tour packages with us.
          </p>
        </div>

        {/* Reels-style Horizontal Track */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4 -mx-4 sm:px-0 sm:mx-0"
          >
            {reviews.map((rev) => (
              <motion.div
                key={rev.id}
                className="w-[260px] sm:w-[280px] h-[400px] sm:h-[430px] rounded-3xl overflow-hidden border border-white/10 bg-black/40 flex-shrink-0 relative group snap-start cursor-pointer hover:shadow-2xl hover:shadow-saffron-500/5 transition-all duration-300"
                whileHover={{ y: -6 }}
                onClick={() => setActiveVideo(rev)}
              >
                {/* Overlay Thumbnail */}
                <img
                  src={rev.thumb}
                  alt={`${rev.name} Review`}
                  className="w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Gold Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-saffron-600 group-hover:bg-saffron-500 text-white flex items-center justify-center shadow-lg transition-transform duration-350 scale-90 group-hover:scale-100">
                    <Play size={18} className="fill-white translate-x-[1px]" />
                  </div>
                </div>

                {/* Video Info Footer */}
                <div className="absolute bottom-5 left-5 right-5 font-inter">
                  <div className="flex items-center gap-1 text-gold-400 text-xs mb-1.5 font-medium">
                    <Star size={11} className="fill-gold-400" />
                    <Star size={11} className="fill-gold-400" />
                    <Star size={11} className="fill-gold-400" />
                    <Star size={11} className="fill-gold-400" />
                    <Star size={11} className="fill-gold-400" />
                    <span className="ml-1 text-white text-[11px]">5.0 Rated</span>
                  </div>
                  <h4 className="text-white font-semibold text-[15px]">{rev.name}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold mt-0.5">{rev.location}</p>
                  <div className="mt-3 text-[11px] font-medium text-saffron-400 bg-saffron-500/10 border border-saffron-500/20 rounded-lg px-2.5 py-1 inline-block">
                    🙏 {rev.yatra}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all"
              aria-label="Next reviews"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Modal Player popup */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              {/* Tap backdrop to close */}
              <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className={`relative w-full bg-divine-dark rounded-[2.5rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 flex flex-col justify-end transition-all duration-300 ${
                  activeVideo.isHorizontal 
                    ? "max-w-[640px] aspect-video h-auto" 
                    : "max-w-[360px] aspect-[9/16] h-auto"
                }`}
              >
                {/* Custom HTML5 Video */}
                <video
                  ref={videoPlayerRef}
                  src={activeVideo.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                />

                {/* Top Control Bar overlay */}
                <div className="absolute top-0 inset-x-0 p-5 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-saffron-500/20 border border-saffron-500/30 flex items-center justify-center text-saffron-400 font-playfair font-bold text-sm">
                      {activeVideo.initials}
                    </div>
                    <div>
                      <h4 className="text-white text-xs font-semibold leading-tight">{activeVideo.name}</h4>
                      <p className="text-white/40 text-[9px] uppercase tracking-wider font-semibold">{activeVideo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Mute Toggle */}
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all"
                      aria-label={isMuted ? "Unmute video" : "Muted video"}
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    {/* Close Modal */}
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all"
                      aria-label="Close review player"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>

                {/* Bottom Overlay Info & Booking details */}
                <div className="relative p-6 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10 font-inter">
                  <div className="text-xs text-saffron-400 font-semibold mb-1">
                    Verified Pilgrim Review
                  </div>
                  <h3 className="text-white text-base font-bold mb-2">
                    🙏 Had a blissful yatra package experience
                  </h3>
                  <div className="text-white/60 text-xs leading-relaxed mb-5">
                    Package Taken: <strong className="text-white">{activeVideo.yatra}</strong>
                  </div>

                  {/* Quick Inquiry CTA button */}
                  <a
                    href="#get-quote"
                    onClick={() => setActiveVideo(null)}
                    className="flex items-center justify-center gap-2.5 w-full bg-saffron-gradient text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Inquire for this package
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
