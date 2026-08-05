import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadCapture from "@/components/LeadCapture";
import TrustStrip from "@/components/TrustStrip";
import YatraPhotoMarquee from "@/components/YatraPhotoMarquee";
import TrustMetrics from "@/components/TrustMetrics";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Itinerary from "@/components/Itinerary";
import HotelShowcase from "@/components/HotelShowcase";
import LuxuryPartnersStrip from "@/components/LuxuryPartnersStrip";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import SemanticContent from "@/components/SemanticContent";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import OfferPopup from "@/components/OfferPopup";
import { faqData } from "@/lib/faqData";

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TourOperator", "LocalBusiness"],
  name: "Kashi Dharshan",
  alternateName: ["Kashi Darshan Tours", "Kashi Dharshan Tours & Travels"],
  url: "https://yatra.kashidharshan.com",
  logo: "https://yatra.kashidharshan.com/logo.png",
  image: "https://yatra.kashidharshan.com/logo.png",
  description:
    "Kashi Dharshan is a specialist pilgrimage tour operator based in Ayodhya, Uttar Pradesh. We offer complete yatra packages including best hotel stays, private AC cab transfers, and temple sightseeing. Our circuits cover Ayodhya, Varanasi, Prayagraj, and Chitrakoot. Packages start at ₹7,499 / person (₹14,998 total for couple). We have served over 50,000 pilgrims since 2009.",
  telephone: "+917011960307",
  email: "kashidharshannn@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Second Floor, Plot No 12, Transport Nagar",
    addressLocality: "Ayodhya",
    addressRegion: "Uttar Pradesh",
    postalCode: "224001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.3176",
    longitude: "82.9739",
  },
  areaServed: [
    { "@type": "City", name: "Varanasi" },
    { "@type": "City", name: "Prayagraj" },
    { "@type": "City", name: "Ayodhya" },
    { "@type": "City", name: "Chitrakoot" },
    { "@type": "Country", name: "India" },
  ],
  touristType: ["Religious pilgrims", "Family pilgrims", "Senior citizens", "Hindu devotees"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ramesh Gupta" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Ram Mandir darshan was arranged perfectly. Best hotel stay and AC transport made our trip very comfortable. Highly recommend.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sunita Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Travelled as a family of 8 including elderly parents. The team made special arrangements — wheelchair access, priority yatra transfers, ground floor rooms. Highly satisfied.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ayodhya Varanasi Tour Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Darshan Package",
          description: "2 Nights 3 Days Ayodhya tour package with best hotel stay, AC transport, and sightseeing",
          tripOrigin: { "@type": "TouristAttraction", name: "Ayodhya" },
        },
        price: "14998",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Varanasi Tour Package",
          description: "3 Nights 4 Days Ayodhya and Varanasi tour package with best hotel stays, AC transfers, and sightseeing support",
        },
        price: "25998",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Prayagraj Varanasi Tour Package",
          description: "4 Nights 5 Days yatra circuit covering Ayodhya, Prayagraj and Varanasi with AC transfers",
        },
        price: "31998",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Lucknow Ayodhya Tour Package",
          description: "3 Nights 4 Days yatra covering Lucknow and Ayodhya with best hotels and AC cab transfers",
        },
        price: "29998",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Ayodhya Varanasi Chitrakoot Package",
          description: "4 Nights 5 Days yatra tracing Lord Ram's journey covering Ayodhya, Varanasi, and Chitrakoot",
        },
        price: "33998",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Full Ramayana Circuit",
          description: "5 Nights 6 Days complete pilgrimage circuit covering Ayodhya, Prayagraj, Varanasi, and Chitrakoot",
        },
        price: "36998",
        priceCurrency: "INR",
      },
    ],
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "07:00",
    closes: "22:00",
  },
  sameAs: [
    "https://www.instagram.com/kashidharshannn/",
    "https://www.facebook.com/Kashidharshannn/",
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#packages", "#why-us", "#faq"],
  },
};

// Ayodhya as a tourist destination — helps AI understand topical context
const destinationSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Varanasi",
  description:
    "Varanasi, also known as Kashi, is one of the oldest continuously inhabited cities in the world and the holiest of the seven sacred cities in Hinduism. It is situated on the banks of the sacred Ganga River and is home to the famous Kashi Vishwanath Jyotirlinga Temple, ancient ghats, Sarnath, and the spectacular evening Ganga Aarti.",
  url: "https://yatra.kashidharshan.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.3176",
    longitude: "82.9739",
  },
  includesAttraction: [
    {
      "@type": "TouristAttraction",
      name: "Kashi Vishwanath Temple",
      description:
        "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva, housing one of the twelve sacred Jyotirlingas.",
    },
    {
      "@type": "TouristAttraction",
      name: "Dashashwamedh Ghat",
      description:
        "Dashashwamedh Ghat is the main and most spectacular ghat on the Ganga River in Varanasi, famous for its daily grand Evening Ganga Aarti.",
    },
    {
      "@type": "TouristAttraction",
      name: "Sarnath",
      description:
        "Sarnath is a sacred Buddhist pilgrimage site located near Varanasi, where Lord Buddha gave his first sermon after attaining enlightenment.",
    },
    {
      "@type": "TouristAttraction",
      name: "Kaal Bhairav Temple",
      description:
        "Kaal Bhairav Temple is one of the oldest Shiva temples in Varanasi, dedicated to the fierce guardian deity of the city.",
    },
  ],
};

// HowTo schema for booking process — voice search and AI Overview optimized
const bookingHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book an Ayodhya Varanasi Tour Package",
  description:
    "Follow these steps to book a complete Ayodhya Varanasi pilgrimage package with hotel and transport in under 15 minutes.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: "1",
      name: "Share your travel details",
      text: "Submit a quote request with your preferred travel dates, number of travellers, and the tour package you are interested in.",
    },
    {
      "@type": "HowToStep",
      position: "2",
      name: "Receive personalised itinerary and quote",
      text: "We send you a detailed day-wise itinerary, hotel options and a transparent invoice with no hidden charges.",
    },
    {
      "@type": "HowToStep",
      position: "3",
      name: "Confirm with advance deposit",
      text: "Pay the booking deposit to confirm your yatra booking and secure your hotel rooms.",
    },
    {
      "@type": "HowToStep",
      position: "4",
      name: "Receive booking confirmation",
      text: "You receive a written confirmation with hotel details, vehicle details, and pickup timings.",
    },
    {
      "@type": "HowToStep",
      position: "5",
      name: "Travel and pay balance on arrival",
      text: "Arrive at the starting point airport or railway station. Our team receives you. Pay the remaining balance on the first day of the tour.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const tourSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ayodhya Varanasi Tour Packages",
  description:
    "Premium Ayodhya Varanasi pilgrimage packages with best hotels and AC transport included",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Ayodhya Darshan Package — 2 Nights / 3 Days",
        description:
          "Ayodhya tour package with best hotel stay, private AC vehicle, airport pickup & drop.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png"
        ],
        sku: "ayodhya-darshan-2n3d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "312",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Ramesh Gupta" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Ram Mandir darshan was arranged perfectly. Hotels were clean. Highly recommend.",
        },
        offers: {
          "@type": "Offer",
          price: "14998",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://yatra.kashidharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Ayodhya Varanasi Tour Package — 3 Nights / 4 Days",
        description:
          "Varanasi and Ayodhya tour package with best hotels, private AC vehicle transfers, and sightseeing.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png"
        ],
        sku: "ayodhya-varanasi-3n4d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "312",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Sunita Sharma" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Combine Varanasi and Ayodhya was great. Beautiful evening Ganga Aarti and smooth Ram Lalla darshan.",
        },
        offers: {
          "@type": "Offer",
          price: "25998",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://yatra.kashidharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Ayodhya Prayagraj Varanasi Package — 4 Nights / 5 Days",
        description:
          "Complete yatra circuit covering Ayodhya, Prayagraj and Varanasi with best hotel stay and AC transport.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triveni_Sangam.JPG/960px-Triveni_Sangam.JPG"
        ],
        sku: "ayodhya-prayagraj-varanasi-4n5d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "312",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Anil Saxena" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Amazing tirthdham tour. The Triveni Sangam boat ride in Prayagraj and Ram Mandir in Ayodhya were highlights.",
        },
        offers: {
          "@type": "Offer",
          price: "31998",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://yatra.kashidharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Lucknow Ayodhya Tour Package — 3 Nights / 4 Days",
        description:
          "Pilgrimage tour covering Lucknow and Ayodhya with best hotel stays and AC vehicle transfers.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Viswanath_temple_Varanasi_02.jpg/960px-Viswanath_temple_Varanasi_02.jpg"
        ],
        sku: "lucknow-ayodhya-3n4d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "312",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Preeti Mishra" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Excellent coordination. Ayodhya Ram Mandir and local sightseeing transfers were very smooth.",
        },
        offers: {
          "@type": "Offer",
          price: "29998",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://yatra.kashidharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Ayodhya Varanasi Chitrakoot Package — 4 Nights / 5 Days",
        description:
          "Pilgrimage circuit tracing Lord Ram's journey covering Ayodhya, Varanasi, and Chitrakoot.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mandakini_River.jpg/960px-Mandakini_River.jpg"
        ],
        sku: "ayodhya-varanasi-chitrakoot-4n5d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "312",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Deepak Rawat" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Chitrakoot Mandakini river and Ayodhya darshan made this a deeply holy experience.",
        },
        offers: {
          "@type": "Offer",
          price: "33998",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://yatra.kashidharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Full Ramayana Circuit — 5 Nights / 6 Days",
        description:
          "The ultimate holy pilgrimage covering Ayodhya, Prayagraj, Varanasi and Chitrakoot with best hotel stay and AC transport.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG"
        ],
        sku: "full-ramayana-circuit-5n6d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "312",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Vijay Kumar" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "The complete 6-day circuit is perfect. Premium hotels and dedicated AC SUV transfers.",
        },
        offers: {
          "@type": "Offer",
          price: "36998",
          priceCurrency: "INR",
          priceValidUntil: "2027-12-31",
          url: "https://yatra.kashidharshan.com/#get-quote",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yatra.kashidharshan.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kashi Varanasi Tour Packages",
      item: "https://yatra.kashidharshan.com/packages",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup — TourOperator + LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* FAQPage — 20 Q&As for AI Overview and voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ItemList — 6 tour packages with pricing */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      {/* BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* TouristDestination — Varanasi with key attractions */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }} />
      {/* HowTo — booking process for voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingHowToSchema) }} />

      <AnnouncementBar />
      <Navbar />

      <main>
        {/* 1. Hero — above-the-fold conversion section */}
        <Hero />

        {/* 2. Lead Capture — form immediately after hero for Google Ads conversion */}
        <LeadCapture />

        {/* 3. Trust Strip — immediate social proof */}
        <TrustStrip />

        {/* 3b. Yatra Photo Marquee — sliding track of real devotee group photos */}
        <YatraPhotoMarquee />

        {/* 3c. Trust Metrics — animated numbers */}
        <TrustMetrics />

        {/* 4. Luxury Partners Strip — luxury 5-star brand trust strip */}
        <LuxuryPartnersStrip />

        {/* 5. Packages — 6 destination packages */}
        <Packages />

        {/* 6. Why Choose Us — USP grid */}
        <WhyChooseUs />

        {/* 7. Itinerary — day-wise expandable plans */}
        <Itinerary />

        {/* 8. Hotel Showcase — trust signal for hotel searches */}
        <HotelShowcase />

        {/* 9. Testimonials — social proof carousel */}
        <Testimonials />

        {/* 9a. Video Testimonials */}
        <VideoTestimonial />

        {/* 9b. Gallery — real pilgrim memories to build devotee trust */}
        <Gallery />

        {/* 10. Google Reviews — verified third-party trust signal */}
        <GoogleReviews />

        {/* 10. Semantic Content — conversational Q&A + package matrix for AI/voice SEO */}
        <SemanticContent />

        {/* 11. FAQ — 20 Q&As for featured snippets and Google AI Overview */}
        <FAQ />

        {/* 12. Final CTA — conversion push */}
        <FinalCTA />
      </main>

      <Footer />
      <StickyWhatsApp />
      <OfferPopup />
    </>
  );
}
