import type { Metadata } from "next";
import Iconic2026Content from "@/src/components/Iconic2026/Iconic2026Content";
import NavigationBar from "@/src/components/navigation-bar";
import {
  eventAddressCountry,
  eventAddressLocality,
  eventEndDate,
  eventStartDate,
  eventVenueName,
  getSiteUrl,
  iconic2026Description,
  iconic2026Keywords,
  iconic2026Title,
  organizationName,
  siteName,
} from "@/src/app/seo";

const siteUrl = getSiteUrl();
const pageUrl = siteUrl ? new URL("/iconic-2026", siteUrl).toString() : undefined;

export const metadata: Metadata = {
  title: iconic2026Title,
  description: iconic2026Description,
  keywords: iconic2026Keywords,
  authors: [{ name: organizationName }],
  alternates: pageUrl ? { canonical: pageUrl } : undefined,
  openGraph: {
    type: "article",
    title: iconic2026Title,
    description: iconic2026Description,
    url: pageUrl,
    siteName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: iconic2026Title,
    description: iconic2026Description,
  },
};

export default function Iconic2026Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ICONIC 2026",
    description: iconic2026Description,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    startDate: eventStartDate,
    endDate: eventEndDate,
    location: {
      "@type": "Place",
      name: eventVenueName,
      address: {
        "@type": "PostalAddress",
        addressLocality: eventAddressLocality,
        addressCountry: eventAddressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: organizationName,
      url: siteUrl?.toString(),
    },
    isPartOf: {
      "@type": "Event",
      name: siteName,
      url: siteUrl?.toString(),
    },
    url: pageUrl,
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#ecfdf5_0%,_#f4fffb_48%,_#ffffff_100%)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NavigationBar />
      <Iconic2026Content />
    </main>
  );
}
