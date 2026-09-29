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
import { faqData } from "@/lib/faqData";
import {
  getOrganizationSchema,
  getDestinationSchema,
  getBookingHowToSchema,
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/data/siteConfig";

const organizationSchema = getOrganizationSchema();
const destinationSchema = getDestinationSchema();
const bookingHowToSchema = getBookingHowToSchema();
const faqSchema = getFAQSchema(faqData);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Kashi Varanasi Tour Packages", url: "/#packages" },
]);

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup — TourOperator + LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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
    </>
  );
}
