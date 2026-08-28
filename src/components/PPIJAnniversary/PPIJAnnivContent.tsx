"use client";

import {
  afoPhoto,
  asepMSPhoto,
  bujanganTangguhPhoto,
  deuphoriaPhoto,
  iramandaPhoto,
  ppij70thLogo,
} from "@/src/assets";
import Image, { type StaticImageData } from "next/image";
import { useState, type ReactNode } from "react";
import { CalendarDays, Instagram, MapPin, ShoppingCart } from "lucide-react";
import Script from "next/script";
import Dialog from "../ui/Dialog";

type AnniversaryDetail = {
  description: string;
  icon: ReactNode;
};

const anniversaryDetails: AnniversaryDetail[] = [
  {
    description: "29 August 2026, 17:00-22:30 CEST",
    icon: <CalendarDays className="h-5 w-5 text-white" />,
  },
  {
    description: "Technikum, Speicherstraße 26, 81671 München",
    icon: <MapPin className="h-5 w-5 text-white" />,
  },
  {
    description: "70 Years of Excellence",
    icon: (
      <svg
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

type RundownItem = {
  time: string;
  activity: string;
  note?: string;
  badge?: string;
  highlighted?: boolean;
};

const rundownItems: RundownItem[] = [
  { time: "17:00 – 18:00", activity: "Open Gate" },
  {
    time: "18:00 – 18:30",
    activity: "Opening Speech",
    note: "PPIJ (18:10 – 18:20), KBRI/KJRI (18:20 – 18:30)",
    badge: "Opening",
  },
  {
    time: "18:30 – 19:02",
    activity: "Gombong Standup Comedy",
    badge: "Performers",
    highlighted: true,
  },
  {
    time: "19:02 – 19:14",
    activity: "Iramanda",
    badge: "Performers",
    highlighted: true,
  },
  {
    time: "19:14 – 19:40",
    activity: "AFO (Angklung Frankfurt Orchestra)",
    badge: "Performers",
    highlighted: true,
  },
  {
    time: "19:40 – 20:25",
    activity: "AsepMS",
    badge: "Band Performers",
    highlighted: true,
  },
  {
    time: "20:25 – 21:10",
    activity: "DEuphoria",
    badge: "Band Performers",
    highlighted: true,
  },
  {
    time: "21:10 – 21:50",
    activity: "Bujangan Tangguh x Kezia",
    badge: "Band Performers",
    highlighted: true,
  },
  { time: "21:50 – 22:00", activity: "Closing" },
];

type Performer = {
  name: string;
  type: string;
  handle: string;
  url: string;
  photo?: StaticImageData;
  bio: string;
};

const performers: Performer[] = [
  {
    name: "Gombong Standup Comedy",
    type: "Stand-up Comedy",
    handle: "@_mbongmbong",
    url: "https://www.instagram.com/_mbongmbong/",
    bio: "Solo stand-up comedian opening the night with a set built for laughs.",
  },
  {
    name: "Angklung Frankfurt Orchestra",
    type: "Traditional Ensemble",
    handle: "@angklungfrankfurt",
    url: "https://www.instagram.com/angklungfrankfurt/",
    photo: afoPhoto,
    bio: "A bamboo angklung ensemble based in Frankfurt, performing Indonesian repertoire across Germany.",
  },
  {
    name: "Iramanda",
    type: "Traditional Dance",
    handle: "@gruptari.iramanda",
    url: "https://www.instagram.com/gruptari.iramanda/",
    photo: iramandaPhoto,
    bio: "Indonesian dance group bringing regional choreography and full traditional costume to the stage.",
  },
  {
    name: "DEuphoria",
    type: "Band",
    handle: "@de_uphoria",
    url: "https://www.instagram.com/de_uphoria/",
    photo: deuphoriaPhoto,
    bio: "From Indonesia to European stages, a band mixing horns, keys and vocals.",
  },
  {
    name: "AsepMS",
    type: "Solo Performer",
    handle: "@asepkdi4",
    url: "https://www.instagram.com/asepkdi4/",
    photo: asepMSPhoto,
    bio: "Solo vocalist performing dangdut and Indonesian pop favourites.",
  },
  {
    name: "Bujangan Tangguh x Kezia",
    type: "Band",
    handle: "@bujangan_tggh",
    url: "https://www.instagram.com/bujangan_tggh/",
    photo: bujanganTangguhPhoto,
    bio: "Indonesian band collaborating with vocalist Kezia for a set built for a crowd.",
  },
];

function renderAnniversaryDetailCard(anniversaryDetail: AnniversaryDetail) {
  return (
    <article
      key={anniversaryDetail.description}
      className="flex h-full items-center rounded-2xl border border-[#FBD9DB] bg-white/80 p-6 shadow-lg backdrop-blur-sm"
    >
      <div className="flex w-full items-center gap-4 text-left">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F5C518] to-[#D81E27]">
          {anniversaryDetail.icon}
        </div>
        <p className="flex-1 text-lg font-semibold leading-relaxed text-gray-600">
          {anniversaryDetail.description}
        </p>
      </div>
    </article>
  );
}

function renderRundownItem(item: RundownItem, index: number) {
  return (
    <li
      key={`${item.time}-${item.activity}-${index}`}
      className="relative flex gap-4 pb-8 last:pb-0"
    >
      <div className="flex flex-shrink-0 flex-col items-center">
        <span
          className={`z-10 h-3 w-3 flex-shrink-0 rounded-full ${
            item.highlighted
              ? "bg-[#D81E27] ring-4 ring-[#FDE8E9]"
              : "bg-[#F3B8BB]"
          }`}
        />
        <span className="mt-1 w-px flex-1 bg-[#FBD9DB] last:hidden" />
      </div>

      <div
        className={`flex-1 rounded-2xl border p-4 sm:p-5 ${
          item.highlighted
            ? "border-[#F6C9CB] bg-[#FEF6F6] shadow-md"
            : "border-gray-100 bg-white/60"
        }`}
      >
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-[#B01018]">
            {item.time}
          </span>
          {item.badge ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-[#F5C518] to-[#D81E27] px-2.5 py-0.5 text-xs font-semibold text-white">
              {item.badge}
            </span>
          ) : null}
        </div>
        <p className="font-semibold text-gray-800">{item.activity}</p>
        {item.note ? (
          <p className="mt-1 text-sm italic leading-relaxed text-gray-600">
            {item.note}
          </p>
        ) : null}
      </div>
    </li>
  );
}

function renderPerformerCard(performer: Performer) {
  return (
    <article
      key={performer.name}
      className="flex flex-col overflow-hidden rounded-2xl border border-[#FBD9DB] bg-white shadow-md"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-100">
        {performer.photo ? (
          <Image
            src={performer.photo}
            alt={performer.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-medium text-gray-400">
            Photo coming soon
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="inline-flex w-fit items-center rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold tracking-wide text-[#92700A]">
          {performer.type}
        </span>
        <h3 className="text-lg font-bold leading-tight text-gray-700">
          {performer.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-gray-600">
          {performer.bio}
        </p>
        <a
          href={performer.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D81E27] transition-colors hover:text-[#A8161D]"
        >
          <Instagram className="h-4 w-4" />
          <span>{performer.handle}</span>
        </a>
      </div>
    </article>
  );
}

function PPIJAnnivContent() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <section className="relative overflow-hidden px-4 py-12 md:px-6 md:py-20">
      <Dialog
        onClose={() => {
          setModalOpen(false);
        }}
        open={modalOpen}
      >
        <div className="tt-widget">
          <div className="tt-widget-fallback w-full overflow-hidden">
            <iframe
              src="https://www.tickettailor.com/checkout/new-session/id/8487958/chk/7c87/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
              className="w-full h-[600px] border-0"
              frameBorder="0"
            />
          </div>
          <Script
            src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
            data-url="https://www.tickettailor.com/checkout/new-session/id/8487958/chk/7c87/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
            data-type="inline"
            data-inline-minimal="false"
            data-inline-show-logo="true"
            data-inline-bg-fill="false"
            data-inline-inherit-ref-from-url-param=""
            data-inline-ref="website_widget"
          />
        </div>
      </Dialog>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#F5C518]/30 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#D81E27]/20 blur-3xl" />
        <div className="absolute bottom-12 left-1/3 h-80 w-80 rounded-full bg-[#F5C518]/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12">
        <section className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F5C518] to-[#D81E27] opacity-20 blur-2xl" />
              <Image
                src={ppij70thLogo}
                alt="PPI Jerman 70th Anniversary"
                className="relative z-10 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48"
                priority
              />
            </div>
          </div>

          <div className="mb-12 space-y-4 text-center">
            <h1 className="bg-gradient-to-r from-[#D81E27] via-gray-900 to-[#B8901A] bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              PPI Jerman 70th Anniversary
            </h1>
            <h2 className="text-xl font-semibold leading-tight text-gray-700 sm:text-2xl md:text-3xl">
              70 Years of PPI Jerman: Honouring the Past, Empowering the Future
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              A commemorative celebration of PPI Jerman&apos;s seven-decade
              journey in fostering community, leadership, and contribution among
              Indonesian students in Germany.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {anniversaryDetails.map(renderAnniversaryDetailCard)}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            About PPI Jerman 70th Anniversary
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              <strong>
                {" "}
                70 Years of PPI Jerman: Honouring the Past, Empowering the
                Future
              </strong>{" "}
            </p>
            <p>
              Seventy years of PPI Jerman is a celebration of unity, dedication,
              and the long journey of Indonesian students in Germany. Through
              generations, PPI Jerman has become a home, a bridge, and a support
              system for students far from Indonesia. Together, PPI Jerman
              continues to carry its legacy forward while creating a stronger
              and more impactful future.
            </p>
            <p>
              Coming to you this <strong>August</strong>, in{" "}
              <strong>Munich</strong>.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#FBD9DB] bg-white/80 p-8 shadow-lg backdrop-blur-sm md:p-10">
          <div className="mb-8 flex flex-col items-center gap-2 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#F5C518] to-[#D81E27]">
              <svg
                className="h-7 w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
              Performers
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-600">
              Taking the stage in Munich on 29 August 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {performers.map(renderPerformerCard)}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
              Event Rundown
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Saturday, 29 August 2026 &middot; Technikum, Munich
            </p>
          </div>

          <ol className="mx-auto max-w-3xl">
            {rundownItems.map(renderRundownItem)}
          </ol>
        </section>

        <section className="rounded-3xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-100 to-gray-50 p-8 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
              <CalendarDays className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-700 md:text-3xl">
              Ticket Sales
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Early Bird sales begins on the 20th of June, 2026.
            </p>
            <div
              onClick={() => {
                setModalOpen(true);
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#D81E27] px-6 py-4 font-semibold text-white transition-colors hover:bg-[#A8161D]"
            >
              <ShoppingCart />
              <button>Buy Tickets</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PPIJAnnivContent;
