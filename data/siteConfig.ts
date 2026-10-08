export const siteConfig = {
  name: "Kashi Darshan",
  brandName: "Kashi Darshan — Premium Pilgrimage",
  tagline: "Authentic Kashi Vishwanath VIP Darshan, Dev Diwali & Pilgrimage Tours",
  domain: "https://kashi-darshan-gold.vercel.app",
  phone: "+91 7011960307",
  rawPhone: "+917011960307",
  phoneHref: "tel:+917011960307",
  whatsapp: "917011960307",
  whatsappHref: "https://wa.me/917011960307?text=Har%20Har%20Mahadev!%20I%20want%20to%20inquire%20about%20Kashi%20Varanasi%20Tour%20Packages.",
  email: "kashidharshannn@gmail.com",
  gstin: "09CJPPJ6346G1ZR",
  address: {
    street: "Godowlia, Dashashwamedh Ghat Road",
    city: "Varanasi",
    state: "Uttar Pradesh",
    pincode: "221001",
    country: "IN",
    fullAddress: "Godowlia, Dashashwamedh Ghat Road, Varanasi, Uttar Pradesh 221001",
  },
  geo: {
    latitude: "25.3176",
    longitude: "82.9739",
  },
  socialLinks: [
    "https://www.instagram.com/kashidharshannn/",
    "https://www.facebook.com/Kashidharshannn/",
  ],
  defaultMetaDescription:
    "Book authentic Kashi Vishwanath VIP Darshan, Dev Diwali, Ganga Aarti boat rides, and customized pilgrimage tour packages for Varanasi, Ayodhya & Prayagraj with Kashi Darshan.",
};

// ─── JSON-LD Schema Generators ───────────────────────────────────────────────

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TourOperator", "TravelAgency", "LocalBusiness"],
    name: siteConfig.name,
    alternateName: ["Kashi Darshan Tours", "Kashi Dharshan Tours & Travels"],
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/icon.png`,
    image: `${siteConfig.domain}/icon.png`,
    description: siteConfig.defaultMetaDescription,
    telephone: siteConfig.rawPhone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Varanasi" },
      { "@type": "City", name: "Ayodhya" },
      { "@type": "City", name: "Prayagraj" },
      { "@type": "City", name: "Chitrakoot" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Kashi Vishwanath Temple VIP Darshan",
      "Dashashwamedh Ghat Ganga Aarti",
      "Dev Diwali Varanasi Yatra",
      "Ayodhya Ram Mandir Tour",
      "Triveni Sangam Prayagraj",
      "Sarnath Buddhist Pilgrimage",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.rawPhone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.rawPhone,
        contactType: "reservations",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English"],
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer, Credit Card",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
    sameAs: siteConfig.socialLinks,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kashi Varanasi Pilgrimage Tour Packages",
      itemListElement: tourPackagesData.map((pkg) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: pkg.name,
          description: pkg.subtitle,
          offers: {
            "@type": "Offer",
            price: pkg.price.toString(),
            priceCurrency: "INR",
          },
        },
      })),
    },
  };
}

export function getDestinationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Varanasi (Kashi)",
    description:
      "Varanasi, also known as Kashi, is the spiritual capital of India situated on the holy banks of River Ganga. Home to the sacred Kashi Vishwanath Jyotirlinga, Dashashwamedh Ghat Evening Ganga Aarti, and Sarnath.",
    url: siteConfig.domain,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    includesAttraction: [
      {
        "@type": "TouristAttraction",
        name: "Kashi Vishwanath Temple",
        description: "Sacred Jyotirlinga temple dedicated to Lord Shiva in Varanasi.",
      },
      {
        "@type": "TouristAttraction",
        name: "Dashashwamedh Ghat Ganga Aarti",
        description: "Famous grand evening ritual prayers on the banks of River Ganges.",
      },
      {
        "@type": "TouristAttraction",
        name: "Sarnath Dhamek Stupa",
        description: "Holy Buddhist site where Lord Buddha gave his first sermon.",
      },
    ],
  };
}

export function getBookingHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book a Kashi Varanasi Pilgrimage Package",
    description:
      "Step-by-step process to book your Kashi Vishwanath VIP Darshan and Varanasi tour package.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: "1",
        name: "Select Your Package",
        text: "Browse our handpicked Kashi Varanasi, Ayodhya, and Prayagraj yatra packages.",
      },
      {
        "@type": "HowToStep",
        position: "2",
        name: "Submit Inquiry Form or Call",
        text: "Fill out the lead capture form or call +91 7011960307 for instant custom quotes.",
      },
      {
        "@type": "HowToStep",
        position: "3",
        name: "Confirm Booking with Advance",
        text: "Confirm your hotel stay, AC vehicle, and VIP Darshan assistance with a small deposit.",
      },
      {
        "@type": "HowToStep",
        position: "4",
        name: "Enjoy Blessed Pilgrimage",
        text: "Our dedicated driver cum guide receives you at Varanasi Airport/Station for a seamless trip.",
      },
    ],
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function getProductSchema(pkg: {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  duration?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: pkg.subtitle,
    image: [pkg.image],
    sku: pkg.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      price: pkg.price.toString(),
      priceCurrency: "INR",
      priceValidUntil: "2027-12-31",
      url: `${siteConfig.domain}/packages/${pkg.id}`,
      availability: "https://schema.org/InStock",
    },
  };
}

export const tourPackagesData = [
  {
    id: "varanasi-same-day",
    name: "Varanasi Ganga Aarti Special Yatra",
    subtitle: "Full day Kashi Vishwanath VIP Darshan, Sarnath & Boat Aarti",
    price: 7499,
    image: "/destinations/kashi-vishwanath-gate.jpg",
  },
  {
    id: "ayodhya-same-day",
    name: "Ayodhya Same Day Tour",
    subtitle: "Complete day trip with private AC cab & driver cum guide",
    price: 5999,
    image: "/destinations/ram-mandir-ayodhya.png",
  },
  {
    id: "varanasi-ayodhya-2n3d",
    name: "Varanasi Ayodhya Yatra",
    subtitle: "Fast-track yatra for Ram Mandir & Kashi Vishwanath",
    price: 13998,
    image: "/destinations/saryu-ghat-ayodhya.jpg",
  },
  {
    id: "ayodhya-varanasi",
    name: "Dev Diwali Special Kashi Yatra",
    subtitle: "3N/4D Kashi Dev Diwali Ghat Lighting, Boat Aarti & Ayodhya Yatra",
    price: 25998,
    image: "/destinations/dev-diwali-aerial-ghats.jpg",
  },
  {
    id: "ayodhya-prayagraj-varanasi",
    name: "Kashi Ayodhya Prayagraj Yatra",
    subtitle: "4N/5D Complete Tirth Yatra covering Kashi, Sangam & Ram Mandir",
    price: 31998,
    image: "/destinations/prayagraj-sangam-boat.jpg",
  },
];

export function getItemListSchema(
  pkgs: { id: string; name: string; subtitle: string; price: number; image: string }[] = tourPackagesData
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kashi Varanasi Pilgrimage Tour Packages",
    description:
      "Handcrafted Kashi Vishwanath VIP Darshan, Ganga Aarti & Ayodhya Tour Packages with Hotel Stays & AC Transfers",
    itemListElement: pkgs.map((pkg, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: getProductSchema(pkg),
    })),
  };
}
