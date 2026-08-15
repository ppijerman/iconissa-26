import { speakerStodulka, speakerLazuardy, speakerYasmin } from "@/src/assets";
import Image, { type StaticImageData } from "next/image";
import { Users } from "lucide-react";

type Speaker = {
	key: string;
	name: string;
	title: string;
	image: StaticImageData;
};

const speakers: Speaker[] = [
	{
		key: "stodulka",
		name: "Prof. Dr. Thomas Stodulka",
		title: "Professor of Social and Cultural Anthropology at the University of Münster",
		image: speakerStodulka,
	},
	{
		key: "lazuardy",
		name: "Noam Lazuardy",
		title: "Minister Counselor of Economic Affairs for the Indonesian Embassy in Berlin",
		image: speakerLazuardy,
	},
	{
		key: "yasmin",
		name: "Amira Yasmin",
		title: "Junior Project Development Manager at wpd Asia GmbH",
		image: speakerYasmin,
	},
];

function Speakers() {
	return (
		<section className="rounded-3xl border border-teal-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm md:p-10">
			<div className="mb-8 flex flex-col items-center gap-2 text-center">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
					<Users className="h-7 w-7 text-white" />
				</div>
				<h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
					Our Speakers
				</h2>
				<p className="max-w-xl text-base leading-relaxed text-gray-600">
					Meet the voices joining us for the summit&apos;s talks
					and discussions.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{speakers.map((speaker) => (
					<div
						key={speaker.key}
						className="rounded-2xl border border-teal-200 bg-white p-6 text-center shadow-md"
					>
						<div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
							<Image
								src={speaker.image}
								alt={speaker.name}
								fill
								className="object-cover"
							/>
						</div>
						<p className="mt-4 text-lg font-bold text-gray-700">
							{speaker.name}
						</p>
						<p className="mt-1 text-sm leading-relaxed text-gray-600">
							{speaker.title}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Speakers;
