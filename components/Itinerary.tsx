"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Sunset, Moon, MapPin, MessageCircle } from "lucide-react";

const WA_NUMBER = "917011960307";

type DayActivity = {
  time: "Morning" | "Afternoon" | "Evening";
  activity: string;
};

type Day = {
  title: string;
  activities: DayActivity[];
};

type ItineraryItem = {
  id: string;
  destination: string;
  duration: string;
  package: string;
  days: Day[];
};

const itineraries: ItineraryItem[] = [
  {
    id: "kashi-darshan",
    destination: "Varanasi",
    duration: "2N / 3D",
    package: "Kashi Darshan Package",
    days: [
      {
        title: "Day 1 — Arrival & Kashi Vishwanath VIP Darshan",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport / Railway Station. Meet & greet by our representative. Transfer to hotel, check-in and freshen up."
          },
          {
            time: "Afternoon",
            activity: "Visit Kashi Vishwanath Temple — VIP darshan of the sacred Jyotirlinga with our pre-arranged pass. Guided tour of the corridor."
          },
          {
            time: "Evening",
            activity: "Private boat ride on the Ganga. Witness the spectacular Evening Ganga Aarti at Dashashwamedh Ghat from the water. Return to hotel."
          }
        ]
      },
      {
        title: "Day 2 — Sacred Temples & Sarnath Excursion",
        activities: [
          {
            time: "Morning",
            activity: "Early morning boat ride to witness Sunrise Subah-e-Banaras. Visit Kaal Bhairav temple (known as the Kotwal of Kashi) and Annapurna Mandir."
          },
          {
            time: "Afternoon",
            activity: "Excursion to Sarnath, where Lord Buddha gave his first sermon. Visit Dhamek Stupa, Archeological Museum, and Buddhist monasteries."
          },
          {
            time: "Evening",
            activity: "Explore local Varanasi bazaars for Banarasi silk sarees and local handicrafts. Enjoy local street food (chaat and lassi). Return to hotel."
          }
        ]
      },
      {
        title: "Day 3 — Heritage Temples & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Visit Banaras Hindu University (BHU) campus and the New Vishwanath Temple. Visit Sankat Mochan Temple and Durga Kund Temple."
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Final blessings and souvenir shopping. Transfer to Varanasi Airport / Railway Station for onward journey."
          },
          {
            time: "Evening",
            activity: "Depart from Varanasi with a heart full of divine blessings and peaceful memories. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "kashi-ayodhya",
    destination: "Varanasi & Ayodhya",
    duration: "3N / 4D",
    package: "Kashi Ayodhya Tour Package",
    days: [
      {
        title: "Day 1 — Arrival in Varanasi & Kashi Vishwanath Darshan",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport / Railway Station. Transfer to hotel, check-in and enjoy welcome lunch."
          },
          {
            time: "Afternoon",
            activity: "VIP Kashi Vishwanath Darshan and corridor tour. Visit Kaal Bhairav temple and Annapurna Mandir."
          },
          {
            time: "Evening",
            activity: "Witness the grand Evening Ganga Aarti at Dashashwamedh Ghat from a private boat. Dinner at hotel."
          }
        ]
      },
      {
        title: "Day 2 — Drive to Ayodhya & Saryu Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Sunrise Ganga boat ride. Drive to Ayodhya (approx 200 km, 4.5 hours) after a wholesome breakfast."
          },
          {
            time: "Afternoon",
            activity: "Arrive in Ayodhya, check-in at hotel and rest. Visit Hanuman Garhi and Kanak Bhawan temples."
          },
          {
            time: "Evening",
            activity: "Attend the divine Saryu River Aarti at Ram Ki Paidi. Enjoy a peaceful dinner at your Ayodhya hotel."
          }
        ]
      },
      {
        title: "Day 3 — Ram Mandir Darshan & Return to Varanasi",
        activities: [
          {
            time: "Morning",
            activity: "Morning visit to the magnificent new Ram Mandir for Ram Lalla darshan with pre-arranged pass. Explore the temple gardens."
          },
          {
            time: "Afternoon",
            activity: "Depart Ayodhya and drive back to Varanasi (approx 4.5 hours). Check-in at Varanasi hotel."
          },
          {
            time: "Evening",
            activity: "Leisurely evening in Varanasi to relax or try local street food delicacies. Overnight stay in Varanasi."
          }
        ]
      },
      {
        title: "Day 4 — Departure",
        activities: [
          {
            time: "Morning",
            activity: "Visit Sankat Mochan Temple and New Vishwanath Temple (BHU). Last-minute souvenir shopping."
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Transfer to Varanasi Airport / Railway Station for onward flight/train."
          },
          {
            time: "Evening",
            activity: "Depart with divine blessings from Lord Shiva and Lord Ram. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "kashi-prayagraj-ayodhya",
    destination: "Varanasi, Prayagraj & Ayodhya",
    duration: "4N / 5D",
    package: "Kashi Prayagraj Ayodhya Package",
    days: [
      {
        title: "Day 1 — Arrival in Varanasi & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport/Railway Station. Transfer to hotel, check-in and rest."
          },
          {
            time: "Afternoon",
            activity: "Visit Sarnath (Dhamek Stupa and museum), the birthplace of Buddhism. Visit local silk weavers."
          },
          {
            time: "Evening",
            activity: "Watch Ganga Aarti at Dashashwamedh Ghat from a private boat. Dinner at hotel."
          }
        ]
      },
      {
        title: "Day 2 — Kashi Vishwanath VIP Darshan & Local Temples",
        activities: [
          {
            time: "Morning",
            activity: "Sunrise Ganga boat ride. Kashi Vishwanath VIP Darshan, Kaal Bhairav, and Annapurna Temple visits."
          },
          {
            time: "Afternoon",
            activity: "Visit BHU Vishwanath Temple, Durga Kund Temple, and Sankat Mochan Temple."
          },
          {
            time: "Evening",
            activity: "Free time for shopping Banarasi Silk and tasting local delicacies. Overnight stay in Varanasi."
          }
        ]
      },
      {
        title: "Day 3 — Drive to Prayagraj, Triveni Sangam, Drive to Ayodhya",
        activities: [
          {
            time: "Morning",
            activity: "Check-out and drive to Prayagraj (120 km, 2.5 hours). Holy bath at Triveni Sangam (confluence of Ganga, Yamuna & Saraswati)."
          },
          {
            time: "Afternoon",
            activity: "Visit Anand Bhawan (historic Nehru home) and Hanuman Temple (sleeping idol). Depart for Ayodhya (170 km, 4 hours)."
          },
          {
            time: "Evening",
            activity: "Arrive in Ayodhya. Check-in at hotel and relax. Night stay in Ayodhya."
          }
        ]
      },
      {
        "title": "Day 4 — Ayodhya Ram Mandir Darshan & Drive to Varanasi",
        "activities": [
          {
            "time": "Morning",
            "activity": "Visit Shri Ram Janmabhoomi (Ram Mandir) for Ram Lalla darshan with pass. Visit Hanuman Garhi and Kanak Bhawan."
          },
          {
            "time": "Afternoon",
            "activity": "Drive back to Varanasi (approx 4.5 hours) after lunch. Check-in at Varanasi hotel."
          },
          {
            "time": "Evening",
            "activity": "Attend Ganga Aarti or relax at the ghats. Farewell dinner at Varanasi hotel."
          }
        ]
      },
      {
        "title": "Day 5 — Departure",
        "activities": [
          {
            "time": "Morning",
            "activity": "Breakfast at hotel. Last-minute packing and final blessings in Kashi."
          },
          {
            "time": "Afternoon",
            "activity": "Check-out and transfer to Varanasi Airport / Railway Station for onward journey."
          },
          {
            "time": "Evening",
            "activity": "Depart with holy memories of the complete tirthdham circuit. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "kashi-prayagraj",
    destination: "Varanasi & Prayagraj",
    duration: "3N / 4D",
    package: "Kashi Prayagraj Tour Package",
    days: [
      {
        title: "Day 1 — Arrival in Varanasi & Kashi Vishwanath Darshan",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport/Railway Station. Transfer to hotel, check-in."
          },
          {
            time: "Afternoon",
            activity: "Kashi Vishwanath Temple VIP Darshan, Kaal Bhairav, and Annapurna Temple visits."
          },
          {
            time: "Evening",
            activity: "Private boat ride on the Ganga. Attend Ganga Aarti at Dashashwamedh Ghat. Dinner at hotel."
          }
        ]
      },
      {
        title: "Day 2 — Sarnath Excursion & Local Sightseeing",
        activities: [
          {
            time: "Morning",
            activity: "Early morning boat ride to witness Sunrise Subah-e-Banaras. Breakfast at hotel."
          },
          {
            time: "Afternoon",
            activity: "Visit Sarnath (Dhamek Stupa and museum). Later visit BHU New Vishwanath Temple and Durga Temple."
          },
          {
            time: "Evening",
            activity: "Free time to explore local bazaars. Night stay in Varanasi."
          }
        ]
      },
      {
        title: "Day 3 — Prayagraj Excursion",
        activities: [
          {
            time: "Morning",
            activity: "Drive to Prayagraj (120 km, 2.5 hours). Take a boat ride to Triveni Sangam for holy snan/puja."
          },
          {
            time: "Afternoon",
            activity: "Visit Anand Bhawan, Alopi Devi Temple, and Bade Hanuman Ji Temple. Drive back to Varanasi."
          },
          {
            time: "Evening",
            activity: "Arrive back in Varanasi. Enjoy a peaceful dinner at hotel."
          }
        ]
      },
      {
        title: "Day 4 — Departure",
        activities: [
          {
            time: "Morning",
            activity: "Breakfast at hotel. Visit Sankat Mochan temple."
          },
          {
            time: "Afternoon",
            activity: "Check-out and transfer to Varanasi Airport/Railway Station for onward journey."
          },
          {
            time: "Evening",
            activity: "Depart with sacred memories of Kashi and Prayagraj. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "kashi-ayodhya-chitrakoot",
    destination: "Varanasi, Ayodhya & Chitrakoot",
    duration: "4N / 5D",
    package: "Kashi Ayodhya Chitrakoot Package",
    days: [
      {
        title: "Day 1 — Arrival in Varanasi & Kashi Vishwanath Darshan",
        activities: [
          {
            time: "Morning",
            activity: "Arrive in Varanasi. Transfer to hotel, check-in."
          },
          {
            time: "Afternoon",
            activity: "Kashi Vishwanath VIP Darshan. Annapurna Mandir and Kaal Bhairav visit."
          },
          {
            time: "Evening",
            activity: "Private boat ride on the Ganga. Witness the majestic Ganga Aarti. Return to hotel."
          }
        ]
      },
      {
        title: "Day 2 — Drive to Chitrakoot via Prayagraj",
        activities: [
          {
            time: "Morning",
            activity: "Sunrise boat ride. Drive to Chitrakoot (approx 260 km, 6 hours) via Prayagraj."
          },
          {
            time: "Afternoon",
            activity: "Brief stop at Triveni Sangam Prayagraj. Arrive in Chitrakoot, check-in at hotel."
          },
          {
            time: "Evening",
            activity: "Attend the serene Mandakini River Aarti at Ramghat. Night stay in Chitrakoot."
          }
        ]
      },
      {
        title: "Day 3 — Chitrakoot Sightseeing & Drive to Ayodhya",
        activities: [
          {
            time: "Morning",
            activity: "Visit Kamadgiri Temple, Sphatik Shila, and Sati Anusuya Ashram. Drive to Ayodhya (280 km, 6.5 hours)."
          },
          {
            time: "Afternoon",
            activity: "Travel enroute to Ayodhya. Arrive in Ayodhya, check-in at hotel."
          },
          {
            time: "Evening",
            activity: "Attend Saryu Aarti at Ram Ki Paidi. Dinner at hotel."
          }
        ]
      },
      {
        title: "Day 4 — Ayodhya Darshan & Return to Varanasi",
        activities: [
          {
            time: "Morning",
            activity: "Visit Ram Mandir for Ram Lalla darshan with pre-arranged pass. Visit Hanuman Garhi and Kanak Bhawan."
          },
          {
            time: "Afternoon",
            activity: "Drive back to Varanasi (approx 4.5 hours)."
          },
          {
            time: "Evening",
            activity: "Arrive in Varanasi. Check-in and relax at hotel. Overnight stay in Varanasi."
          }
        ]
      },
      {
        title: "Day 5 — Departure",
        activities: [
          {
            time: "Morning",
            activity: "Visit BHU Vishwanath Temple and Sankat Mochan Temple."
          },
          {
            time: "Afternoon",
            activity: "Check-out and transfer to Varanasi Airport/Railway Station for departure."
          },
          {
            time: "Evening",
            activity: "Depart with divine blessings. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "full-kashi-circuit",
    destination: "Varanasi, Prayagraj, Ayodhya & Chitrakoot",
    duration: "5N / 6D",
    package: "Sacred Ganga Circuit",
    days: [
      {
        title: "Day 1 — Arrival in Varanasi & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi. Transfer to hotel, check-in."
          },
          {
            time: "Afternoon",
            activity: "Visit Sarnath (Dhamek Stupa). Visit New Vishwanath Temple (BHU)."
          },
          {
            time: "Evening",
            activity: "Spectacular Ganga Aarti from a private boat. Dinner at hotel."
          }
        ]
      },
      {
        title: "Day 2 — Kashi Vishwanath VIP Darshan & Local Temples",
        activities: [
          {
            time: "Morning",
            activity: "Sunrise Ganga boat ride. Kashi Vishwanath VIP Darshan, Kaal Bhairav, and Annapurna Temple visits."
          },
          {
            time: "Afternoon",
            activity: "Visit Sankat Mochan and Durga Kund. Free time for silk saree shopping."
          },
          {
            time: "Evening",
            activity: "Relax at the Ganga ghats. Night stay in Varanasi."
          }
        ]
      },
      {
        title: "Day 3 — Varanasi to Chitrakoot via Prayagraj",
        activities: [
          {
            time: "Morning",
            activity: "Check-out. Drive to Prayagraj (120 km). Boat ride at Triveni Sangam for holy bath."
          },
          {
            time: "Afternoon",
            activity: "Visit Bade Hanuman Mandir and Anand Bhawan. Drive to Chitrakoot (140 km)."
          },
          {
            time: "Evening",
            activity: "Arrive in Chitrakoot, attend Mandakini Aarti at Ramghat. Night stay in Chitrakoot."
          }
        ]
      },
      {
        title: "Day 4 — Chitrakoot Sightseeing & Drive to Ayodhya",
        activities: [
          {
            time: "Morning",
            activity: "Visit Kamadgiri, Janaki Kund, Sphatik Shila, and Gupt Godavari caves."
          },
          {
            time: "Afternoon",
            activity: "Drive to Ayodhya (280 km, approx 6.5 hours). Rest enroute."
          },
          {
            time: "Evening",
            activity: "Arrive in Ayodhya. Check-in at hotel and relax. Night stay in Ayodhya."
          }
        ]
      },
      {
        title: "Day 5 — Ayodhya Ram Mandir Darshan & Return to Varanasi",
        activities: [
          {
            time: "Morning",
            activity: "Shri Ram Janmabhoomi (Ram Mandir) darshan with VIP pass. Visit Hanuman Garhi and Kanak Bhawan."
          },
          {
            time: "Afternoon",
            activity: "Attend Saryu River Ghat Walk. Drive back to Varanasi (200 km, 4.5 hours)."
          },
          {
            time: "Evening",
            activity: "Arrive in Varanasi. Check-in and farewell dinner at hotel."
          }
        ]
      },
      {
        title: "Day 6 — Departure",
        activities: [
          {
            time: "Morning",
            activity: "Breakfast at hotel. Packing and final blessings in Kashi."
          },
          {
            time: "Afternoon",
            activity: "Check-out and transfer to Varanasi Airport / Railway Station for onward journey."
          },
          {
            time: "Evening",
            activity: "Depart with pure devotion and memories of the complete circuit. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "sarnath-buddhist-tour",
    destination: "Varanasi & Sarnath",
    duration: "2N / 3D",
    package: "Sarnath Buddhist Tour",
    days: [
      {
        title: "Day 1 — Arrival, Sarnath Buddhist Stupa & Museums",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport/Railway Station. Warm welcome by our representative and transfer to hotel for check-in."
          },
          {
            time: "Afternoon",
            activity: "Explore Sarnath where Lord Buddha gave his first sermon. Visit Dhamekh Stupa, Chaukhandi Stupa, and the Archeological Museum containing the Lion Capital of Ashoka."
          },
          {
            time: "Evening",
            activity: "Visit the peaceful Mulagandha Kuti Vihar temple and attend the evening chanting. Return to Varanasi hotel for dinner."
          }
        ]
      },
      {
        title: "Day 2 — Divine Kashi Darshan & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Early morning boat ride to witness Sunrise Subah-e-Banaras. Kashi Vishwanath VIP Darshan, Kaal Bhairav Temple, and Annapurna Mandir darshan."
          },
          {
            time: "Afternoon",
            activity: "Visit the New Vishwanath Temple (BHU), Sankat Mochan Temple, and Durga Kund Temple."
          },
          {
            time: "Evening",
            activity: "Enjoy private boat ride to watch the spectacular Evening Ganga Aarti at Dashashwamedh Ghat from the river."
          }
        ]
      },
      {
        title: "Day 3 — Local Handloom Walk & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Guided walk through Varanasi's ancient streets. Observe traditional weavers making the famous Banarasi silk sarees."
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Final souvenirs shopping and tasting local Banarasi snacks. Transfer to Varanasi Airport / Railway Station."
          },
          {
            time: "Evening",
            activity: "Departure with peaceful spiritual memories of Kashi and Sarnath. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "buddhist-circuit-tour",
    destination: "Varanasi, Sarnath & Bodhgaya",
    duration: "4N / 5D",
    package: "Buddhist Circuit Tour",
    days: [
      {
        title: "Day 1 — Arrival in Varanasi & Sarnath Sightseeing",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport / Railway Station. Transfer to hotel for check-in and enjoy welcome drinks."
          },
          {
            time: "Afternoon",
            activity: "Drive to Sarnath to visit the sacred Dhamekh Stupa, Ashoka Pillar, and the Archeological Museum."
          },
          {
            time: "Evening",
            activity: "Attend the serene sunset prayers at the Sri Lankan Buddhist Temple. Return to Varanasi for overnight stay."
          }
        ]
      },
      {
        title: "Day 2 — Kashi Vishwanath Darshan & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "VIP Darshan of Kashi Vishwanath temple, followed by Kaal Bhairav Temple. Morning boat ride at Ganga Ghats."
          },
          {
            time: "Afternoon",
            activity: "Varanasi sightseeing: BHU Temple, Sankat Mochan, and shopping for spiritual artifacts."
          },
          {
            time: "Evening",
            activity: "Witness the magnificent Evening Ganga Aarti from a private boat. Overnight stay in Varanasi."
          }
        ]
      },
      {
        title: "Day 3 — Varanasi to Bodhgaya & Mahabodhi Temple",
        activities: [
          {
            time: "Morning",
            activity: "Check-out and embark on a scenic drive to Bodhgaya (approx 250 km, 5 hours) in a comfortable AC car."
          },
          {
            time: "Afternoon",
            activity: "Arrive in Bodhgaya, check-in at hotel. Visit the iconic Mahabodhi Temple — the seat of Buddha's enlightenment."
          },
          {
            time: "Evening",
            activity: "Meditation near the sacred Bodhi Tree. Visit the Giant Buddha Statue (80 ft). Dinner at hotel."
          }
        ]
      },
      {
        title: "Day 4 — International Monasteries & Sujata Stupa",
        activities: [
          {
            time: "Morning",
            activity: "Visit the Thai Monastery, Japanese Monastery, Bhutanese Monastery, and Tibetan Temple, experiencing diverse Buddhist architecture."
          },
          {
            time: "Afternoon",
            activity: "Visit Sujata Kuti (where Sujata offered milk-rice to Buddha) and the Niranjana River bank."
          },
          {
            time: "Evening",
            activity: "Free time for shopping of handmade Tibetan crafts. Relaxing evening and dinner at Bodhgaya hotel."
          }
        ]
      },
      {
        title: "Day 5 — Departure from Gaya / Varanasi",
        activities: [
          {
            time: "Morning",
            activity: "Check-out after breakfast. Transfer to Gaya Airport or drive back to Varanasi Airport/Railway Station for onward journey."
          },
          {
            time: "Afternoon",
            activity: "Transfer assistance at the airport/station for your departure flight/train."
          },
          {
            time: "Evening",
            activity: "Depart with profound inner peace and blessings of the Buddha Circuit. Namo Buddhaya! 🙏"
          }
        ]
      }
    ]
  },
  {
    id: "kashi-heritage-tour",
    destination: "Kashi Heritage",
    duration: "2N / 3D",
    package: "Kashi Heritage & Lalit Ghat Tour",
    days: [
      {
        title: "Day 1 — Arrival, Local Handloom & Craft Tour",
        activities: [
          {
            time: "Morning",
            activity: "Arrive at Varanasi Airport/Railway Station. Pickup by private AC vehicle and transfer to hotel for check-in."
          },
          {
            time: "Afternoon",
            activity: "Guided walk through the traditional weavers' colony. Watch local artisans hand-weaving premium Banarasi silk sarees."
          },
          {
            time: "Evening",
            activity: "Explore the bustling historical markets of Chowk and Godowlia. Try famous local street food (chaat, lassi, kachori)."
          }
        ]
      },
      {
        title: "Day 2 — Heritage Ghat Walk, Nepali Temple & Ganga Aarti",
        activities: [
          {
            time: "Morning",
            activity: "Sunrise Subah-e-Banaras private boat ride on the Ganga. Guided heritage walk exploring the history of major Ghats."
          },
          {
            time: "Afternoon",
            activity: "Exclusive visit to the historic wood-carved Nepali Temple (pagoda style) at Lalit Ghat. Pre-arranged Kashi Vishwanath VIP Darshan."
          },
          {
            time: "Evening",
            activity: "Private front-row boat seating to witness the spectacular Evening Ganga Aarti at Dashashwamedh Ghat."
          }
        ]
      },
      {
        title: "Day 3 — BHU Temple Visit & Departure",
        activities: [
          {
            time: "Morning",
            activity: "Visit the massive Birla Vishwanath Temple (BHU), Sankat Mochan Hanuman Temple, and Durga Kund Temple."
          },
          {
            time: "Afternoon",
            activity: "Check-out from hotel. Last-minute shopping for brass items and wooden toys. Transfer to Airport/Railway Station."
          },
          {
            time: "Evening",
            activity: "Departure with divine blessings and a heart filled with Kashi's heritage. Har Har Mahadev! 🙏"
          }
        ]
      }
    ]
  }
];
const timeIcons = {
  Morning: Sun,
  Afternoon: Sunset,
  Evening: Moon,
};

const timeColors = {
  Morning: "text-amber-500",
  Afternoon: "text-orange-500",
  Evening: "text-indigo-400",
};

function ItineraryDay({ day, index }: { day: Day; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <details
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
      className="group"
    >
      <summary
        className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-4 text-left hover:bg-gray-50/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
            <span className="text-saffron-700 font-bold text-xs">{index + 1}</span>
          </div>
          <span className="font-semibold text-divine-dark text-sm sm:text-base leading-snug">
            {day.title}
          </span>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-gray-50 group-open:bg-saffron-100 transition-colors duration-300"
        >
          <ChevronDown
            size={15}
            className="text-gray-400 group-open:text-saffron-600 group-open:rotate-180 transition-transform duration-300"
          />
        </div>
      </summary>

      <div className="px-6 sm:px-8 pb-5 space-y-4">
        {day.activities.map((act, ai) => {
          const Icon = timeIcons[act.time];
          return (
            <div key={ai} className="flex gap-4">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  <Icon size={15} className={timeColors[act.time]} />
                </div>
                {ai < day.activities.length - 1 && (
                  <div className="w-px flex-1 bg-gray-100 min-h-[20px]" />
                )}
              </div>
              <div className="pt-1 pb-2">
                <div className={`text-xs font-semibold mb-1.5 ${timeColors[act.time]}`}>
                  {act.time}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{act.activity}</p>
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}

function ItineraryCard({ item }: { item: ItineraryItem }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Card Header */}
      <div
        className="px-6 sm:px-8 py-6 border-b border-gray-50"
        style={{
          background:
            "linear-gradient(135deg, #FFF8F0 0%, #FFFAF5 100%)",
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-saffron-100 text-saffron-700">
                {item.duration}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500 px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
                <MapPin size={11} />
                {item.destination}
              </span>
            </div>
            <h3 className="font-playfair font-bold text-xl text-divine-dark">{item.package}</h3>
          </div>
          <a
            href="#get-quote"
            onClick={() => {
              const tourIdMapping: Record<string, string> = {
                "itinerary-ayodhya": "ayodhya-darshan",
                "itinerary-ayodhya-varanasi": "ayodhya-varanasi",
                "itinerary-ayodhya-prayagraj-varanasi": "ayodhya-prayagraj-varanasi",
              };
              const mappedId = tourIdMapping[item.id] || item.id;
              const event = new CustomEvent("select-tour", { detail: mappedId });
              window.dispatchEvent(event);
            }}
            className="flex items-center justify-center bg-saffron-600 hover:bg-saffron-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-md"
          >
            Book This Trip
          </a>
        </div>
      </div>

      {/* Days Accordion (Native <details> for 100% search engine/crawler indexing) */}
      <div className="divide-y divide-gray-50">
        {item.days.map((day, di) => (
          <ItineraryDay key={di} day={day} index={di} />
        ))}
      </div>
    </div>
  );
}

export default function Itinerary() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} id="itinerary" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="ornament-line max-w-xs mx-auto mb-4">
            <span className="text-gold-600 text-xs tracking-[0.3em] uppercase font-medium whitespace-nowrap px-4">
              Day-by-Day Travel Plan
            </span>
          </div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-divine-dark mb-5 leading-tight">
            Detailed{" "}
            <span className="text-gradient-saffron">Day-by-Day Plan</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Explore our carefully crafted pilgrimage plans — so you know exactly what to expect at every step of your sacred journey.
          </p>
        </motion.div>

        {/* Destination Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {itineraries.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? "bg-saffron-600 text-white shadow-md"
                  : "bg-gray-50 text-gray-600 border border-gray-100 hover:border-saffron-200 hover:text-saffron-600"
              }`}
            >
              {item.destination} ({item.duration})
            </button>
          ))}
        </motion.div>

        {/* All Itineraries (Rendered in DOM, toggled with hidden class for 100% crawlability) */}
        <div className="relative">
          {itineraries.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={activeTab === i ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.45 }}
              className={activeTab === i ? "block" : "hidden"}
            >
              <ItineraryCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          All itineraries are customisable.{" "}
          <a
            href="#get-quote"
            className="text-saffron-600 font-semibold hover:underline"
          >
            Enquire here to personalise your plan →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
