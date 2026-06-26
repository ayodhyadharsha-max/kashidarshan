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
    "Kashi Dharshan is a specialist pilgrimage tour operator based in Varanasi, Uttar Pradesh. We offer complete Varanasi tour packages including Kashi Vishwanath VIP darshan pass, Ganga Aarti boat ride, 3-star and 4-star hotel stays, AC transport, and expert guides. Our circuits cover Varanasi, Prayagraj, Ayodhya, and Chitrakoot. Packages start at ₹22,000 for a couple. We have served over 50,000 pilgrims since 2009.",
  telephone: "+917408763401",
  email: "kashidharshannn@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Kashi Vishwanath Temple",
    addressLocality: "Varanasi",
    addressRegion: "Uttar Pradesh",
    postalCode: "221001",
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
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ramesh Gupta" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Kashi Vishwanath VIP darshan was arranged perfectly — no queue, calm atmosphere. Evening Ganga Aarti boat view was spectacular. Highly recommend.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sunita Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Travelled as a family of 8 including elderly parents. The team made special arrangements — wheelchair access, priority Ganga Aarti boat seating, ground floor rooms. Highly satisfied.",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Kashi Varanasi Tour Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Kashi Darshan Package",
          description: "2 Nights 3 Days Kashi tour with Kashi Vishwanath VIP darshan, Ganga Aarti boat ride, hotel and transport",
          tripOrigin: { "@type": "TouristAttraction", name: "Varanasi" },
        },
        price: "22000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Kashi Ayodhya Tour Package",
          description: "3 Nights 4 Days Varanasi and Ayodhya tour package with Kashi Vishwanath VIP darshan, Ganga Aarti, and Ram Mandir darshan",
        },
        price: "32000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Kashi Prayagraj Ayodhya Tour Package",
          description: "4 Nights 5 Days complete tirthdham circuit covering Varanasi, Prayagraj and Ayodhya",
        },
        price: "40000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Sarnath Buddhist Tour",
          description: "2 Nights 3 Days tour focusing on Sarnath Buddhist Stupa, monasteries, Varanasi VIP darshan, and Ganga Aarti",
        },
        price: "24000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Buddhist Circuit Tour",
          description: "4 Nights 5 Days pilgrimage covering Varanasi, Sarnath, and Mahabodhi Temple in Bodhgaya",
        },
        price: "45000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Kashi Heritage & Lalit Ghat Tour",
          description: "2 Nights 3 Days Varanasi heritage tour covering Nepali wooden temple, local handlooms, and Ghat walks",
        },
        price: "24000",
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
  name: "How to Book a Kashi Varanasi Tour Package",
  description:
    "Follow these steps to book a complete Kashi Varanasi pilgrimage package with Kashi Vishwanath VIP darshan, hotel and transport in under 15 minutes.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: "1",
      name: "Share your travel details",
      text: "WhatsApp us your preferred travel dates, number of travellers, and the tour you are interested in. Our team responds within 2 minutes.",
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
      name: "Confirm with 20% advance",
      text: "Pay 20% of the package amount to confirm your booking and secure your VIP darshan pass and hotel rooms.",
    },
    {
      "@type": "HowToStep",
      position: "4",
      name: "Receive booking confirmation and guide contact",
      text: "You receive a written confirmation with hotel details, pickup timings, and your guide's contact number.",
    },
    {
      "@type": "HowToStep",
      position: "5",
      name: "Travel and pay balance on arrival",
      text: "Arrive at the airport or railway station. Our representative receives you. Pay the remaining balance on the first day of the tour.",
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
  name: "Kashi Varanasi Tour Packages",
  description:
    "Premium Kashi Varanasi pilgrimage packages with Kashi Vishwanath VIP darshan, hotel and transport included",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Kashi Darshan Package — 2 Nights / 3 Days",
        description:
          "Varanasi tour package with Kashi Vishwanath VIP darshan, 3★/4★ hotel, airport pickup & drop, and local guide.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG"
        ],
        sku: "kashi-darshan-2n3d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Ramesh Gupta" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Kashi Vishwanath VIP darshan was arranged perfectly — no queue, calm atmosphere. Hotels were clean. Highly recommend.",
        },
        offers: {
          "@type": "Offer",
          price: "22000",
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
        name: "Kashi Ayodhya Tour Package — 3 Nights / 4 Days",
        description:
          "Varanasi and Ayodhya tour package with Kashi Vishwanath VIP darshan, Ram Mandir visit, 3★/4★ hotels and AC transfers.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ram_Mandir%2C_Ayodhya.png/960px-Ram_Mandir%2C_Ayodhya.png"
        ],
        sku: "kashi-ayodhya-3n4d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Sunita Sharma" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Combine Kashi and Ayodhya was great. Beautiful evening Ganga Aarti and smooth Ram Lalla darshan.",
        },
        offers: {
          "@type": "Offer",
          price: "32000",
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
        name: "Kashi Prayagraj Ayodhya Package — 4 Nights / 5 Days",
        description:
          "Complete tirthdham circuit covering Varanasi, Prayagraj and Ayodhya with darshan pass, hotels and guide.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Triveni_Sangam.JPG/960px-Triveni_Sangam.JPG"
        ],
        sku: "kashi-prayagraj-ayodhya-4n5d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Anil Saxena" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Amazing triple circuit tour. The Triveni Sangam boat ride in Prayagraj and Ram Mandir in Ayodhya were highlights.",
        },
        offers: {
          "@type": "Offer",
          price: "40000",
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
        name: "Kashi Prayagraj Tour Package — 3 Nights / 4 Days",
        description:
          "Confluence and heritage tour covering Varanasi and Prayagraj with Kashi Vishwanath darshan and Triveni Sangam boat ride.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Viswanath_temple_Varanasi_02.jpg/960px-Viswanath_temple_Varanasi_02.jpg"
        ],
        sku: "kashi-prayagraj-3n4d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Preeti Mishra" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Excellent coordination. Prayagraj Sangam boat ride and Kashi Vishwanath VIP darshan was very smooth.",
        },
        offers: {
          "@type": "Offer",
          price: "30000",
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
        name: "Kashi Ayodhya Chitrakoot Package — 4 Nights / 5 Days",
        description:
          "Pilgrimage circuit tracing Lord Ram's journey and Shiva devotion covering Varanasi, Ayodhya, and Chitrakoot.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mandakini_River.jpg/960px-Mandakini_River.jpg"
        ],
        sku: "kashi-ayodhya-chitrakoot-4n5d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Deepak Rawat" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Chitrakoot Mandakini river and Kashi Vishwanath darshan made this a deeply holy experience.",
        },
        offers: {
          "@type": "Offer",
          price: "40000",
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
        name: "Sacred Ganga Circuit — 5 Nights / 6 Days",
        description:
          "The ultimate holy pilgrimage covering Varanasi, Prayagraj, Ayodhya and Chitrakoot with premium hotels and guided darshan.",
        image: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG/960px-Evening_Ganga_Aarti_at_Dashashwamedh_Ghat.JPG"
        ],
        sku: "full-kashi-circuit-5n6d",
        brand: {
          "@type": "Brand",
          name: "Kashi Dharshan"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "Vijay Kumar" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "The complete 6-day circuit is perfect. Premium hotels, dedicated AC SUV transfers, and guides who explained everything.",
        },
        offers: {
          "@type": "Offer",
          price: "50000",
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
