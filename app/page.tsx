import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadCapture from "@/components/LeadCapture";
import Packages from "@/components/Packages";
import TrustStrip from "@/components/TrustStrip";
import TrustMetrics from "@/components/TrustMetrics";
import YatraPhotoMarquee from "@/components/YatraPhotoMarquee";
import LuxuryPartnersStrip from "@/components/LuxuryPartnersStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import Itinerary from "@/components/Itinerary";
import HotelShowcase from "@/components/HotelShowcase";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import SemanticContent from "@/components/SemanticContent";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { faqData } from "@/lib/faqData";
import {
  getOrganizationSchema,
  getDestinationSchema,
  getBookingHowToSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getItemListSchema,
} from "@/data/siteConfig";

const organizationSchema = getOrganizationSchema();
const destinationSchema = getDestinationSchema();
const bookingHowToSchema = getBookingHowToSchema();
const faqSchema = getFAQSchema(faqData);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Kashi Varanasi Tour Packages", url: "/#packages" },
]);
const itemListSchema = getItemListSchema();

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup — TourOperator + LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* ItemList Schema — All Tour Packages with Prices & Ratings */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* FAQPage — 20 Q&As for AI Overview and voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* TouristDestination — Varanasi with key attractions */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }} />
      {/* HowTo — booking process for voice search */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingHowToSchema) }} />

      <AnnouncementBar />
      <Navbar />

      <main className="w-full max-w-[100vw] overflow-x-hidden relative">
        {/* 1. Hero — above-the-fold conversion section */}
        <Hero />

        {/* 2. Lead Capture — form immediately after hero */}
        <LeadCapture />

        {/* 3. Packages — tour packages carousel & cards */}
        <Packages />

        {/* 4. 5 Key Trust Badges — positioned above Trust Metrics */}
        <TrustStrip />

        {/* 5. Trust Metrics — compact dark glass cards */}
        <TrustMetrics />

        {/* 6. Live Yatra Photo Marquee — sliding track of real devotee group photos */}
        <YatraPhotoMarquee />

        {/* 7. Luxury Partners Strip — luxury 5-star brand trust strip */}
        <LuxuryPartnersStrip />

        {/* 8. Why Choose Us — The Divine Standard USP grid */}
        <WhyChooseUs />

        {/* 9. Day-by-Day Itinerary — day-wise expandable plans */}
        <Itinerary />

        {/* 10. Handpicked Pilgrimage Hotels — stays showcase */}
        <HotelShowcase />

        {/* 11. Testimonials & Reviews */}
        <Testimonials />
        <VideoTestimonial />
        <Gallery />
        <GoogleReviews />

        {/* 12. Semantic Content — Q&A block (desktop) */}
        <SemanticContent />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Final CTA — conversion push */}
        <FinalCTA />
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
}
