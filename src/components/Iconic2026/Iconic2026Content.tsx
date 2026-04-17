import { iconissaLogo, websiteIcon } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CalendarDays,
  Cpu,
  Globe2,
  Leaf,
  MapPin,
  Users,
} from "lucide-react";

type EventDetail = {
  description: string;
  icon: ReactNode;
};

type ConferenceTrack = {
  description: string;
  icon: ReactNode;
  number: string;
  title: string;
};

const eventDetails: EventDetail[] = [
  {
    description: "27-28 August 2026",
    icon: <CalendarDays className="h-5 w-5 text-white" />,
  },
  {
    description: "TU München, Munich, Germany",
    icon: <MapPin className="h-5 w-5 text-white" />,
  },
  {
    description: "Hybrid (In-Person & Virtual)",
    icon: <Users className="h-5 w-5 text-white" />,
  },
];

const conferenceTracks: ConferenceTrack[] = [
  {
    number: "01",
    title: "Circular and Regenerative Economy for Inclusive Value Creation",
    description:
      "Exploring sustainable business models and economic systems that promote resource efficiency, waste reduction, and equitable growth.",
    icon: <Leaf className="h-7 w-7 text-emerald-600" />,
  },
  {
    number: "02",
    title: "Green Finance and Just Transition Governance",
    description:
      "Examining financial mechanisms and governance frameworks that support equitable transitions to sustainable economies.",
    icon: <Globe2 className="h-7 w-7 text-emerald-600" />,
  },
  {
    number: "03",
    title: "Digital Innovation, AI, and Data for Sustainable Development",
    description:
      "Investigating how digital technologies, artificial intelligence, and data-driven approaches can accelerate sustainable development goals.",
    icon: <Cpu className="h-7 w-7 text-emerald-600" />,
  },
];

function renderEventDetailCard(eventDetail: EventDetail) {
  return (
    <article
      key={eventDetail.description}
      className="flex h-full items-center rounded-2xl border border-emerald-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm"
    >
      <div className="flex w-full items-center gap-4 text-left">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600">
          {eventDetail.icon}
        </div>
        <p className="flex-1 text-lg leading-relaxed text-gray-600 font-semibold">
          {eventDetail.description}
        </p>
      </div>
    </article>
  );
}

function renderConferenceTrack(conferenceTrack: ConferenceTrack) {
  return (
    <article
      key={conferenceTrack.number}
      className="rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl md:p-8"
    >
      <div className="flex flex-col items-start gap-4 md:items-center md:text-center lg:flex-row lg:items-start lg:text-left sm:gap-6">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center self-start rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white shadow-lg md:self-center lg:self-auto">
          <span className="block leading-none">{conferenceTrack.number}</span>
        </div>

        <div className="flex-1">
          <div className="mb-3 flex items-start gap-3 md:justify-center lg:justify-start">
            {/*<div className="mt-1 flex-shrink-0">{conferenceTrack.icon}</div>*/}
            <h3 className="text-lg font-bold leading-tight text-gray-800 md:text-xl">
              {conferenceTrack.title}
            </h3>
          </div>
          <p className="leading-relaxed text-gray-600">
            {conferenceTrack.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function Iconic2026Content() {
  return (
    <section className="relative overflow-hidden px-4 py-12 md:px-6 md:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-teal-300/30 blur-3xl" />
        <div className="absolute bottom-12 left-1/3 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12">
        <section className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 blur-2xl" />
              <Image
                src={iconissaLogo}
                alt="ICONIC 2026"
                className="relative z-10 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent leading-tight">
              ICONIC 2026
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 leading-tight">
              International Conference of Integrated Intellectual Community
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Innovation for a Green Economy and Society: Reimagining Indonesia&apos;s Digital and Sustainable Transition
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {eventDetails.map(renderEventDetailCard)}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            About ICONIC 2026
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
                ICONIC (International Conference of Integrated Intellectual Community), initiated by PPI Jerman 
                (Vereinigung Indonesischer Studenten in Deutschland e.V) in 2014, is a biennial platform for 
                multi-stakeholder engagement that facilitates knowledge exchange and strategic collaboration 
                between Indonesia and the global community, particularly Germany.
              </p>
              <p>
                Building on its commitment to sustainable development, ICONIC 2026 adopts the theme 
                <strong> &quot;Innovation for Green Economy and Society: Reimagining Indonesia&apos;s Sustainable Transition.&quot;</strong> ICONIC 
                2026 explores how innovation, impact finance, and cross-sector collaboration can support a just 
                and resilient future.
              </p>
              <p>
                Through this platform, ICONIC aims to generate actionable insights and foster critical dialogue 
                among diverse stakeholders, ensuring that development pathways are not only economically viable 
                but also socially inclusive and environmentally responsible.
              </p>
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              Conference Tracks
            </p>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Three topics shaping the discussion
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              The conference program is organized around practical ideas for a
              sustainable transition, from circular systems to digital tools and
              fair governance.
            </p>
          </div>

          <div className="space-y-6">
            {conferenceTracks.map(renderConferenceTrack)}
          </div>
        </section>

        <section className="rounded-3xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-100 to-gray-50 p-8 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
              <CalendarDays className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-700 md:text-3xl">
              Submission and Reviewer Applications
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              The portal is open for both abstract submission and reviewer
              sign-up.
            </p>
            <Link
              href="https://submission-iconissa.ppijerman.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <Image
                src={websiteIcon}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              <span>Abstract Submission &amp; Reviewer Sign-Up</span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Iconic2026Content;
