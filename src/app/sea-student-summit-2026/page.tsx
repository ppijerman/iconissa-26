import type { Metadata } from "next";
import SSSContent from "@/src/components/SSS/SSSContent";
import NavigationBar from "@/src/components/navigation-bar";
import { getSiteUrl, organizationName, siteName } from "@/src/app/seo";

const seaStudentSummitTitle = "SEA Student Summit 2026";
const seaStudentSummitDescription =
  "SEA Student Summit 2026 is a student platform in Munich focused on regional collaboration and sustainable transition across Southeast Asia.";

const siteUrl = getSiteUrl();
const pageUrl = siteUrl
  ? new URL("/sea-student-summit-2026", siteUrl).toString()
  : undefined;

export const metadata: Metadata = {
  title: seaStudentSummitTitle,
  description: seaStudentSummitDescription,
  authors: [{ name: organizationName }],
  alternates: pageUrl ? { canonical: pageUrl } : undefined,
  openGraph: {
    type: "article",
    title: seaStudentSummitTitle,
    description: seaStudentSummitDescription,
    url: pageUrl,
    siteName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seaStudentSummitTitle,
    description: seaStudentSummitDescription,
  },
};

export default function SeaStudentSummit2026Page() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f0fdfa_0%,_#f3fbff_48%,_#ffffff_100%)]">
      <NavigationBar />
      <SSSContent />
    </main>
  );
}
