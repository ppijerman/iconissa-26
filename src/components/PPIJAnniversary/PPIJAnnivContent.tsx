import { ppij70thLogo } from "@/src/assets";
import Image from "next/image";
import type { ReactNode } from "react";
import { CalendarDays, MapPin } from "lucide-react";

type AnniversaryDetail = {
  description: string;
  icon: ReactNode;
};

const anniversaryDetails: AnniversaryDetail[] = [
  {
    description: "29 August 2026",
    icon: <CalendarDays className="h-5 w-5 text-white" />,
  },
  {
    description: "TU Munchen, Munich, Germany",
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

function renderAnniversaryDetailCard(anniversaryDetail: AnniversaryDetail) {
  return (
    <article
      key={anniversaryDetail.description}
      className="flex h-full items-center rounded-2xl border border-cyan-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm"
    >
      <div className="flex w-full items-center gap-4 text-left">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
          {anniversaryDetail.icon}
        </div>
        <p className="flex-1 text-lg font-semibold leading-relaxed text-gray-600">
          {anniversaryDetail.description}
        </p>
      </div>
    </article>
  );
}

function PPIJAnnivContent() {
  return (
    <section className="relative overflow-hidden px-4 py-12 md:px-6 md:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute bottom-12 left-1/3 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12">
        <section className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 blur-2xl" />
              <Image
                src={ppij70thLogo}
                alt="PPI Jerman 70th Anniversary"
                className="relative z-10 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48"
                priority
              />
            </div>
          </div>

          <div className="mb-12 space-y-4 text-center">
            <h1 className="bg-gradient-to-r from-cyan-700 via-blue-600 to-cyan-800 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              PPI Jerman 70th Anniversary
            </h1>
            <h2 className="text-xl font-semibold leading-tight text-gray-700 sm:text-2xl md:text-3xl">
              70 Years of PPI Jerman: Honouring the Past, Empowering the Future
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
              A commemorative celebration of PPI Jerman&apos;s seven-decade
              journey in fostering community, leadership, and contribution
              among Indonesian students in Germany.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {anniversaryDetails.map(renderAnniversaryDetailCard)}
          </div>
        </section>

        <section className="rounded-3xl border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-100 to-gray-50 p-8 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300">
              <CalendarDays className="h-8 w-8 text-gray-500" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-700 md:text-3xl">
              More event details coming soon
            </h2>
            <p className="text-lg text-gray-600">
              Program schedule, venue details, and participation information
              for the anniversary celebration will be shared here once they are
              finalized.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PPIJAnnivContent;
