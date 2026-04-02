/**
 * SEO Schema Utilities for JSON-LD Structured Data
 * Generates various schema.org schemas for search engine optimization
 */

export type SchemaType =
  | "Organization"
  | "LocalBusiness"
  | "Thing"
  | "Place"
  | "BreadcrumbList"
  | "Product"
  | "AggregateRating"
  | "Review"
  | "FAQPage"
  | "ImageObject"
  | "VideoObject"
  | "Event"
  | "ItemList";

interface BaseSchema {
  "@context": "https://schema.org";
  "@type": SchemaType;
}

import {
  ADDRESS_SCHEMA,
  OPENING_HOURS_SCHEMA,
  PHONE_E164,
  PHONE_E164_SECONDARY,
  SITE_BASE_URL,
  SITE_NAME,
  SOCIAL_FALLBACK_URL,
} from "@/lib/site";

/**
 * Organization Schema - Core identity of the gym business
 */
export const organizationSchema = (): BaseSchema & {
  name: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  sameAs: string[];
  contactPoint: {
    "@type": "ContactPoint";
    contactType: string;
    telephone: string;
    areaServed: string;
  };
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  }[];
  foundingDate: string;
  numberOfEmployees: {
    "@type": "QuantitativeValue";
    value: number;
  };
} => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  description:
    "Performance gym in Koye Feche, Addis Ababa — HIIT, strength, recovery, and combat conditioning.",
  url: SITE_BASE_URL,
  logo: `${SITE_BASE_URL}/logo-bright.png`,
  image: `${SITE_BASE_URL}/og-image.png`,
  sameAs: [SOCIAL_FALLBACK_URL],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    telephone: PHONE_E164,
    areaServed: "ET",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_SCHEMA.streetAddress,
      addressLocality: ADDRESS_SCHEMA.addressLocality,
      postalCode: "1000",
      addressCountry: ADDRESS_SCHEMA.addressCountry,
    },
  ],
  foundingDate: "2020",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 25,
  },
});

/**
 * LocalBusiness Schema - Geographic and operational information
 */
export const localBusinessSchema = (): BaseSchema & {
  name: string;
  image: string;
  description: string;
  url: string;
  telephone: string | string[];
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  }[];
  geo: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  }[];
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }[];
  priceRange: string;
  aggregateRating: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
} => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${SITE_BASE_URL}/og-image.png`,
  description:
    "Elite performance training in Koye Feche, Addis Ababa — strength, HIIT, yoga, combat fit.",
  url: SITE_BASE_URL,
  telephone: [PHONE_E164, PHONE_E164_SECONDARY],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_SCHEMA.streetAddress,
      addressLocality: ADDRESS_SCHEMA.addressLocality,
      postalCode: "1000",
      addressCountry: ADDRESS_SCHEMA.addressCountry,
    },
  ],
  geo: [
    {
      "@type": "GeoCoordinates",
      latitude: 9.024,
      longitude: 38.768,
    },
  ],
  openingHoursSpecification: OPENING_HOURS_SCHEMA.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: (Array.isArray(h.dayOfWeek)
      ? [...h.dayOfWeek]
      : h.dayOfWeek) as string | string[],
    opens: h.opens,
    closes: h.closes,
  })),
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 145,
    bestRating: 5,
    worstRating: 1,
  },
});

/**
 * BreadcrumbList Schema - Navigation path
 */
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
): BaseSchema & {
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
} => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Product Schema - For membership plans and services
 */
export const productSchema = (product: {
  name: string;
  description: string;
  image: string;
  url: string;
  price: number;
  priceCurrency: string;
  availability: string;
  rating: number;
  reviewCount: number;
}): BaseSchema & {
  name: string;
  description: string;
  image: string;
  url: string;
  offers: {
    "@type": "Offer";
    url: string;
    priceCurrency: string;
    price: string;
    availability: string;
    priceValidUntil: string;
  };
  aggregateRating: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
  };
} => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  url: product.url,
  offers: {
    "@type": "Offer",
    url: product.url,
    priceCurrency: product.priceCurrency,
    price: product.price.toString(),
    availability: product.availability,
    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split("T")[0],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: product.reviewCount,
  },
});

/**
 * FAQPage Schema - FAQ content structured data
 */
export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
): BaseSchema & {
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
} => ({
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
});

/**
 * Review Schema - Customer testimonials
 */
export const reviewSchema = (review: {
  author: string;
  rating: number;
  reviewBody: string;
  reviewDate: string;
}): BaseSchema & {
  itemReviewed: {
    "@type": "LocalBusiness";
    name: string;
    url: string;
  };
  author: {
    "@type": "Person";
    name: string;
  };
  reviewRating: {
    "@type": "Rating";
    ratingValue: number;
  };
  reviewBody: string;
  datePublished: string;
} => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "Fit Lab",
    url: "https://fitlab.et",
  },
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
  },
  reviewBody: review.reviewBody,
  datePublished: review.reviewDate,
});

/**
 * VideoObject Schema - For video content
 */
export const videoSchema = (video: {
  name: string;
  description: string;
  uploadDate: string;
  duration: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
}): BaseSchema & {
  name: string;
  description: string;
  uploadDate: string;
  duration: string;
  thumbnailUrl: string;
  contentUrl?: string;
  embedUrl?: string;
} => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.name,
  description: video.description,
  uploadDate: video.uploadDate,
  duration: video.duration,
  thumbnailUrl: video.thumbnailUrl,
  ...(video.contentUrl && { contentUrl: video.contentUrl }),
  ...(video.embedUrl && { embedUrl: video.embedUrl }),
});

/**
 * Event Schema - For fitness classes and events
 */
export const eventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: { name: string; address: string };
  image?: string;
  organizer?: string;
  eventStatus?: string;
}): BaseSchema & {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    "@type": "Place";
    name: string;
    address: string;
  };
  image?: string;
  organizer?: string;
  eventStatus?: string;
} => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    "@type": "Place",
    name: event.location.name,
    address: event.location.address,
  },
  ...(event.image && { image: event.image }),
  ...(event.organizer && { organizer: event.organizer }),
  ...(event.eventStatus && { eventStatus: event.eventStatus }),
});

/**
 * ImageObject Schema - For rich image display
 */
export const imageSchema = (image: {
  url: string;
  width: number;
  height: number;
  description?: string;
}): BaseSchema & {
  url: string;
  width: number;
  height: number;
  description?: string;
} => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: image.url,
  width: image.width,
  height: image.height,
  ...(image.description && { description: image.description }),
});

