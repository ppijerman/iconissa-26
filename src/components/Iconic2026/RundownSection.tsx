"use client";

import { useState } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import {
  aaronPraktiknjoPhoto,
  arifHavasPhoto,
  hendroWicaksonoPhoto,
  marziaTraversoPhoto,
  noorTitanPhoto,
  yoshanFazriPhoto,
} from "@/src/assets";

type Speaker = {
  name: string;
  photo: StaticImageData;
};

type RundownItem = {
  start: string;
  end: string;
  activity: string;
  note?: string;
  highlighted?: boolean;
  badge?: string;
  speakers?: Speaker[];
};

type RundownDay = {
  id: string;
  label: string;
  date: string;
  items: RundownItem[];
};

const rundownDays: RundownDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "Thursday, 27 August 2026",
    items: [
      {
        start: "09:00",
        end: "09:20",
        activity: "Participant re-registration",
        note: "ICONIC 2026 Event Committee",
      },
      { start: "09:20", end: "10:00", activity: "Opening Ceremony" },
      {
        start: "10:00",
        end: "11:00",
        activity:
          "Beyond Carbon: Integrating Environmental, Social, and Economic Dimension for Indonesia's Green Transition",
        note: "By Prof. Dr. Marzia Traverso, Director and Full Professor of Institute of Sustainability in Civil Engineering (INaB) at RWTH Aachen University. Includes Q&A session.",
        highlighted: true,
        badge: "Keynote Speech",
        speakers: [
          { name: "Prof. Dr. Marzia Traverso", photo: marziaTraversoPhoto },
        ],
      },
      {
        start: "11:00",
        end: "11:35",
        activity:
          "Innovation Diplomacy for a Green Economy: Semiconductor Cooperation and Energy Resilience in Indonesia's Digital Transition",
        note: "By Arif Havas Oegroseno, Vice Minister for the Ministry of Foreign Affairs. Includes Q&A session.",
        highlighted: true,
        badge: "Keynote Speech",
        speakers: [{ name: "Arif Havas Oegroseno", photo: arifHavasPhoto }],
      },
      {
        start: "11:35",
        end: "12:35",
        activity:
          "Data-Driven Systems for Sustainable Development: AI, Energy Transition, and Innovation Ecosystems in Indonesia's Digital Future",
        note: "By Prof. Dr.-Ing. Hendro Wicaksono (Constructor University, Bremen), Prof. Dr.-Ing. Aaron Praktiknjo (Universitätsprofessor RWTH Aachen), and Dr. Noor Titan Hartono. Includes Q&A session.",
        highlighted: true,
        badge: "Panel Discussion",
        speakers: [
          { name: "Prof. Dr.-Ing. Hendro Wicaksono", photo: hendroWicaksonoPhoto },
          { name: "Prof. Dr.-Ing. Aaron Praktiknjo", photo: aaronPraktiknjoPhoto },
          { name: "Dr. Noor Titan Hartono", photo: noorTitanPhoto },
        ],
      },
      { start: "12:35", end: "14:15", activity: "Lunch" },
      {
        start: "14:15",
        end: "16:05",
        activity: "Financing and Digitalizing the Sustainable Transition",
        note: "5 Speakers Presentations + Q&A",
        badge: "Research Panel 1",
      },
      { start: "16:05", end: "16:25", activity: "Coffee Break" },
      {
        start: "16:25",
        end: "17:40",
        activity: "Community-Led Pathways towards the Sustainable Transition",
        note: "3 Speakers Presentations + Q&A",
        badge: "Research Panel 2",
      },
      { start: "17:40", end: "17:45", activity: "Closing" },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "Friday, 28 August 2026",
    items: [
      {
        start: "09:00",
        end: "09:20",
        activity: "Participant re-registration",
        note: "ICONIC 2026 Event Committee",
      },
      { start: "09:20", end: "09:30", activity: "Opening by event directive" },
      {
        start: "09:30",
        end: "10:40",
        activity: "Psychosocial Dimensions of the Sustainable Transition",
        note: "3 Speakers Presentations",
        badge: "Research Panel 4",
      },
      { start: "10:40", end: "10:50", activity: "Coffee Break" },
      {
        start: "10:50",
        end: "12:00",
        activity: "Navigating Career in Green & Sustainable Transition in Germany",
        note: "By Yoshan Fazri, Head of Sustainable Finance, AGCO, Berlin. Includes Q&A session.",
        highlighted: true,
        badge: "Career Talk",
        speakers: [{ name: "Yoshan Fazri", photo: yoshanFazriPhoto }],
      },
      { start: "12:00", end: "14:30", activity: "Lunch Break" },
      {
        start: "14:30",
        end: "16:20",
        activity: "Engineering the Sustainable Transition",
        note: "5 Speakers Presentations",
        badge: "Research Panel 3",
      },
      { start: "16:20", end: "17:00", activity: "Awarding Ceremony and Closing" },
    ],
  },
];

function renderRundownItem(item: RundownItem, index: number) {
  return (
    <li key={`${item.start}-${item.activity}-${index}`} className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-shrink-0 flex-col items-center">
        <span
          className={`z-10 h-3 w-3 flex-shrink-0 rounded-full ${
            item.highlighted
              ? "bg-gradient-to-br from-emerald-500 to-teal-600 ring-4 ring-emerald-200"
              : "bg-emerald-300"
          }`}
        />
        <span className="mt-1 w-px flex-1 bg-emerald-200 last:hidden" />
      </div>

      <div
        className={`flex-1 rounded-2xl p-4 sm:p-5 ${
          item.highlighted
            ? "border border-emerald-300 bg-emerald-50 shadow-md"
            : "border border-gray-100 bg-white/60"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-emerald-700">
                {item.start} &ndash; {item.end}
              </span>
              {item.badge ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                  <Sparkles className="h-3 w-3" />
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
          {item.speakers && item.speakers.length > 0 ? (
            <div className="flex flex-shrink-0 flex-row flex-wrap gap-2">
              {item.speakers.map((speaker) => (
                <Image
                  key={speaker.name}
                  src={speaker.photo}
                  alt={speaker.name}
                  className="h-16 w-16 rounded-xl object-cover ring-2 ring-white shadow-md sm:h-20 sm:w-20"
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

function RundownSection() {
  const [activeDayId, setActiveDayId] = useState<string>(rundownDays[0].id);
  const activeDay =
    rundownDays.find((day) => day.id === activeDayId) ?? rundownDays[0];

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
          Event Rundown
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Detailed schedule for both days of ICONIC 2026.
        </p>
      </div>

      <div className="mb-8 flex justify-center gap-3">
        {rundownDays.map((day) => (
          <button
            key={day.id}
            type="button"
            onClick={() => setActiveDayId(day.id)}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-colors sm:text-base ${
              activeDayId === day.id
                ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {day.label}
            <span className="block text-xs font-normal sm:text-sm">
              {day.date}
            </span>
          </button>
        ))}
      </div>

      <ol className="mx-auto max-w-3xl">
        {activeDay.items.map(renderRundownItem)}
      </ol>
    </section>
  );
}

export default RundownSection;
