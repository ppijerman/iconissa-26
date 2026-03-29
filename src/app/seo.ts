const siteName = "ICONISSA 2026";
const siteTitle = "ICONISSA 2026 | Sustainable, Green and Digital Future of Indonesia";
const siteDescription =
  "ICONISSA 2026 is an international conference and student summit in Munich exploring Indonesia's sustainable, green, and digital future.";
const siteKeywords = [
  "ICONISSA 2026",
  "Indonesia conference",
  "sustainability conference",
  "green economy Indonesia",
  "digital transformation Indonesia",
  "student summit",
  "Munich conference 2026",
  "PPI Jerman",
];

const organizationName = "PPI Jerman";
const eventVenueName = "Technical University of Munich";
const eventAddressLocality = "Munich";
const eventAddressCountry = "Germany";
const eventStartDate = "2026-08-27T09:00:00+02:00";
const eventEndDate = "2026-08-29T18:00:00+02:00";

function getSiteUrl(): URL | null {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return null;
  }

  return new URL(siteUrl);
}

export {
  eventAddressCountry,
  eventAddressLocality,
  eventEndDate,
  eventStartDate,
  eventVenueName,
  getSiteUrl,
  organizationName,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
};
