import {
  eventAddressCountry,
  eventAddressLocality,
  eventEndDate,
  eventStartDate,
  eventVenueName,
  getSiteUrl,
  organizationName,
  siteDescription,
  siteName,
} from "@/src/app/seo";
import HeroPage from "../components/HomePage/HeroPage";
import InformationPage from "../components/HomePage/InformationPage";
import ComingSoonPage from "../components/HomePage/ComingSoonPage";

export default function Home() {
  const siteUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteName,
        url: siteUrl?.toString(),
        description: siteDescription,
      },
      {
        "@type": "Organization",
        name: organizationName,
        url: siteUrl?.toString(),
      },
      {
        "@type": "Event",
        name: siteName,
        description: siteDescription,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
        url: siteUrl?.toString(),
      },
    ],
  };

  return (
    <main
      className="w-full"
      style={{
        background:
          "linear-gradient(50deg, rgba(234,242,224,1) 0%, rgba(246,247,237,1) 50%, rgba(234,242,224,1) 100%)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroPage />
      <InformationPage />
      <ComingSoonPage />
    </main>
  );
}
