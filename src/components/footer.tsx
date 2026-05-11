import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { iconissaLogo, ppijLogo } from "@/src/assets";

type FooterLink = {
  href: string;
  label: string;
};

type FooterColumn = {
  links: FooterLink[];
  title: string;
};

type SocialLink = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};

const footerColumns: FooterColumn[] = [
  {
    title: "Events",
    links: [
      {
        href: "/iconic-2026",
        label: "ICONIC 2026",
      },
      {
        href: "/sea-student-summit-2026",
        label: "Sea Student Summit 2026",
      },
      {
        href: "/ppij-70th-anniversary",
        label: "PPI Jerman 70th Anniversary",
      },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    ariaLabel: "Instagram",
    href: "https://www.instagram.com/iconissa.ppij/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
    ),
  },
];

const legalLinks: FooterLink[] = [
  {
    href: "/credits",
    label: "Credits",
  },
];

function renderFooterColumn(footerColumn: FooterColumn) {
  return (
    <div
      key={footerColumn.title}
      className="min-w-[200px] flex-1 basis-[220px] space-y-4"
    >
      <h3 className="text-lg font-bold text-emerald-400">{footerColumn.title}</h3>
      <nav className="flex flex-col items-start space-y-2">
        {footerColumn.links.map((footerLink) => (
          <Link
            key={footerLink.href}
            href={footerLink.href}
            className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
          >
            {footerLink.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function renderSocialLink(socialLink: SocialLink) {
  return (
    <a
      key={socialLink.ariaLabel}
      href={socialLink.href}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/20 transition-colors hover:bg-emerald-600"
      aria-label={socialLink.ariaLabel}
    >
      {socialLink.icon}
    </a>
  );
}

function renderLegalLink(legalLink: FooterLink) {
  return (
    <Link
      key={legalLink.label}
      href={legalLink.href}
      className="text-sm text-gray-500 transition-colors hover:text-emerald-400"
    >
      {legalLink.label}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black px-4 py-12 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-x-12 gap-y-10 pb-12">
          <div className="max-w-sm flex-1 basis-[280px] space-y-4">
            <Image
              src={iconissaLogo}
              alt="ICONISSA"
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Pathways Towards a Sustainable, Green and Digital Future of Indonesia
            </p>
            <div className="flex gap-3">{socialLinks.map(renderSocialLink)}</div>
          </div>

          {footerColumns.map(renderFooterColumn)}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex w-full flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-1 md:flex-row">
              <Image
                src={ppijLogo}
                alt="PPI Jerman"
                className="h-10 w-auto object-contain"
              />
              <span className="text-sm text-gray-500">
                &copy; 2026 ICONISSA. All rights reserved.
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-end">
              {legalLinks.map(renderLegalLink)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
