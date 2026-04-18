import type { Metadata } from "next";
import Iconic2026Content from "@/src/components/Iconic2026/Iconic2026Content";
import NavigationBar from "@/src/components/navigation-bar";
import { getSiteUrl, organizationName } from "@/src/app/seo";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "ICONIC 2026",
  description:
    "ICONIC 2026 is the International Conference of Integrated Intellectual Community within ICONISSA 2026 in Munich.",
  authors: [{ name: organizationName }],
  alternates: siteUrl ? { canonical: "/iconic-2026" } : undefined,
  openGraph: {
    title: "ICONIC 2026",
    description:
      "Explore the ICONIC 2026 conference theme, tracks, and submission information.",
    url: siteUrl ? "/iconic-2026" : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "ICONIC 2026",
    description:
      "Explore the ICONIC 2026 conference theme, tracks, and submission information.",
  },
};

export default function Iconic2026Page() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#ecfdf5_0%,_#f4fffb_48%,_#ffffff_100%)]">
      <NavigationBar />
      <Iconic2026Content />
    </main>
  );
}
