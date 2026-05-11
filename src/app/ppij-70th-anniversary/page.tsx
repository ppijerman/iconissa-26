import type { Metadata } from "next";
import PPIJAnnivContent from "@/src/components/PPIJAnniversary/PPIJAnnivContent";
import NavigationBar from "@/src/components/navigation-bar";
import { getSiteUrl, organizationName, siteName } from "@/src/app/seo";

const anniversaryTitle = "PPI Jerman 70th Anniversary";
const anniversaryDescription =
  "PPI Jerman 70th Anniversary celebrates seven decades of community, contribution, and intergenerational connection among Indonesian students in Germany.";

const siteUrl = getSiteUrl();
const pageUrl = siteUrl
  ? new URL("/ppij-jerman-70th-anniversary", siteUrl).toString()
  : undefined;

export const metadata: Metadata = {
  title: anniversaryTitle,
  description: anniversaryDescription,
  authors: [{ name: organizationName }],
  alternates: pageUrl ? { canonical: pageUrl } : undefined,
  openGraph: {
    type: "article",
    title: anniversaryTitle,
    description: anniversaryDescription,
    url: pageUrl,
    siteName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: anniversaryTitle,
    description: anniversaryDescription,
  },
};

export default function PPIJJerman70thAnniversaryPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#ecfeff_0%,_#f5faff_48%,_#ffffff_100%)]">
      <NavigationBar />
      <PPIJAnnivContent />
    </main>
  );
}
