import { sssLogo, websiteIcon } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarDays, MapPin, Store, FileUser, Utensils } from "lucide-react";
import CulturalDishesMenu from "@/src/components/SSS/CulturalDishesMenu";
import Speakers from "@/src/components/SSS/Speakers";

type SummitDetail = {
	description: string;
	icon: ReactNode;
};

const summitDetails: SummitDetail[] = [
	{
		description: "29 August 2026, 09:00-16:00 CEST",
		icon: <CalendarDays className="h-5 w-5 text-white" />,
	},
	{
		description: "TU Munich Main Campus, Arcisstraße 21, 80333 München",
		icon: <MapPin className="h-5 w-5 text-white" />,
	},
	{
		description: "Cultural Booth, Talkshow, and Discussion Sessions",
		icon: <Store className="h-5 w-5 text-white" />,
	},
];

function renderSummitDetailCard(summitDetail: SummitDetail) {
	return (
		<article
			key={summitDetail.description}
			className="flex h-full items-center rounded-2xl border border-teal-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm"
		>
			<div className="flex w-full items-center gap-4 text-left">
				<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
					{summitDetail.icon}
				</div>
				<p className="flex-1 text-lg font-semibold leading-relaxed text-gray-600">
					{summitDetail.description}
				</p>
			</div>
		</article>
	);
}

type RundownItem = {
	time: string;
	activity: string;
	note?: string;
	highlighted?: boolean;
};

const rundownItems: RundownItem[] = [
	{
		time: "09:00 – 10:00",
		activity: "Participant Re-registration",
	},
	{
		time: "10:00 – 10:05",
		activity: "Opening",
	},
	{
		time: "10:05 – 10:35",
		activity: "Welcoming Remarks",
		note: "From ICONISSA Director, Student Association, and Ambassador of Indonesia to Germany",
	},
	{
		time: "10:35 – 12:00",
		activity: "Talkshow Session",
		highlighted: true,
	},
	{
		time: "12:00 – 13:10",
		activity: "Group Discussion Session",
	},
	{
		time: "13:10 – 13:45",
		activity: "Networking Session and Cultural Booths",
	},
	{
		time: "13:45 – 16:00",
		activity: "Lucky Draw",
	},
	{
		time: "16:00 – 16:05",
		activity: "Closing",
	},
];

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
							? "bg-teal-600 ring-4 ring-teal-200"
							: "bg-teal-300"
					}`}
				/>
				<span className="mt-1 w-px flex-1 bg-teal-200 last:hidden" />
			</div>

			<div
				className={`flex-1 rounded-2xl border p-4 sm:p-5 ${
					item.highlighted
						? "border-teal-300 bg-teal-50 shadow-md"
						: "border-gray-100 bg-white/60"
				}`}
			>
				<div className="mb-1 flex flex-wrap items-center gap-2">
					<span className="text-sm font-semibold text-teal-700">
						{item.time}
					</span>
				</div>
				<p className="font-semibold text-gray-800">
					{item.activity}
				</p>
				{item.note ? (
					<p className="mt-1 text-sm italic leading-relaxed text-gray-600">
						{item.note}
					</p>
				) : null}
			</div>
		</li>
	);
}

function SSSContent() {
	return (
		<section className="relative overflow-hidden px-4 py-12 md:px-6 md:py-20">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-teal-300/30 blur-3xl" />
				<div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
				<div className="absolute bottom-12 left-1/3 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
			</div>

			<div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-12">
				<section className="text-center">
					<div className="mb-8 flex justify-center">
						<div className="relative">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-20 blur-2xl" />
							<Image
								src={sssLogo}
								alt="Southeast-Asian Students' Summit 2026"
								className="relative z-10 h-32 w-32 object-contain sm:h-40 sm:w-40 md:h-48 md:w-48"
								priority
							/>
						</div>
					</div>

					<div className="mb-12 space-y-4 text-center">
						<h1 className="bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-800 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
							Southeast-Asian Students&apos; Summit 2026
						</h1>
						<h2 className="mx-auto max-w-4xl text-xl font-semibold leading-tight text-gray-700 sm:text-2xl md:text-3xl">
							Collaboration within Southeast Asian Countries
							toward a Sustainable Transition
						</h2>
						<p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl">
							A student platform for regional dialogue,
							collaboration, and shared ideas on sustainability
							across Southeast Asia.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{summitDetails.map(renderSummitDetailCard)}
					</div>
				</section>

				<section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
					<h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
						About Southeast-Asian Students&apos; Summit 2026
					</h2>
					<div className="space-y-4 text-lg leading-relaxed text-gray-600">
						<p>
							The Southeast-Asian Students&apos; Summit (SSS)
							2026 is an annual program organized by The
							Indonesian Students Association e.V. and
							supported by student associations and
							communities of Southeast-Asian students and
							diaspora in Germany, as well as the Indonesian
							Embassy. The summit aims to gather{" "}
							<strong> 
								students in
								Germany, academics, policymakers, and
								professionals 
							</strong>
							{" "}together to exchange perspectives
							about the growth of Southeast Asia.n
						</p>
						<p>
							With this year&apos;s theme{" "}
							<strong>
								&quot;Collaboration within Southeast-Asian
								Countries Toward a Sustainable
								Transition&quot;
							</strong>
							, the SSS 2026 invites three speakers, each from
							a technical, social, and political background,
							to discuss the challenges and opportunities to
							bring Southeast Asia to transition towards
							renewable energy. The SSS 2026 also hosts
							cultural booths that present Southeast-Asian
							cultures. Brought by student associations and
							youth communities, SSS participants can
							experience Southeast Asia firsthand and
							understand their culture and perspectives
							better.
						</p>
					</div>
				</section>

				<Speakers />

				<CulturalDishesMenu />

				<section className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
					<div className="mb-8 text-center">
						<h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
							Event Rundown
						</h2>
						<p className="text-lg leading-relaxed text-gray-600">
							Saturday, 29 August 2026 · TU München,
							Arcisstraße 21, 80333 München
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
							Event Forms
						</h2>
						<div className="flex flex-col items-center">
							<Link
								href="https://ppij.org/SSS-Registration"
								target="_blank"
								rel="noreferrer"
								className="w-2/3 mb-6 flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-cyan-700"
							>
								<FileUser />
								<span className="w-fit">
									Click here to register!
								</span>
							</Link>

							<Link
								href="https://ppij.org/SSS-Preorder"
								target="_blank"
								rel="noreferrer"
								className="w-2/3 flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-cyan-700"
							>
								<Utensils />
								<span className="w-fit">
									Click here to preorder our cultural dishes!
								</span>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}

export default SSSContent;
