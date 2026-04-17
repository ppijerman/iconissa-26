import {iconissaLogo, ppij70thLogo, sssLogo, websiteIcon} from "@/src/assets";
import Image, {type StaticImageData} from "next/image";
import Link from "next/link";

type EventCard = {
    logo: StaticImageData;
    title: string;
    subtitle: string;
    color: string;
    hasSubmission: boolean;
    detailsUrl?: string;
    submissionUrl?: string;
    submissionLabel?: string;
};

export default function InformationPage() {
    const events: EventCard[] = [
        {
            logo: iconissaLogo,
            title: "International Conference of Integrated Intellectual Community (ICONIC) 2026",
            subtitle: "Innovation for a Green Economy and Society: Reimagining Indonesia's Digital and Sustainable Transition",
            color: "from-emerald-500 to-teal-600",
            hasSubmission: true,
            detailsUrl: "/iconic-2026",
            submissionUrl: "https://submission-iconissa.ppijerman.org/",
            submissionLabel: "Abstract Submission & Reviewer Sign-Up"
        },
        {
            logo: sssLogo,
            title: "SEA Student Summit 2026",
            subtitle: "Collaboration within Southeast Asian Countries toward Sustainable Transition",
            color: "from-teal-500 to-cyan-600",
            hasSubmission: false
        },
        {
            logo: ppij70thLogo,
            title: "PPI Jerman 70th Anniversary",
            subtitle: "70 Years of PPI Jerman: Honouring the Past, Empowering the Future",
            color: "from-cyan-500 to-blue-600",
            hasSubmission: false
        }
    ];

    return (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-900 relative overflow-hidden" id="information-page">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-emerald-100 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-50" />

            <div className="mx-auto relative z-10 max-w-[75vw]">
                {/* Section Title */}
                <div className="text-center mb-10 md:mb-16 px-4">
                    <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
              UPCOMING EVENTS
            </span>
                </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
                        Our Events
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80">
                        Join us for three extraordinary events shaping Indonesia&apos;s sustainable future
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {events.map((event, index) => (
                        <article
                            key={index}
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 transition-opacity duration-500 mx-auto group-hover:opacity-5`} />

                            {/* Animated border gradient */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${event.color} rounded-3xl opacity-0 blur transition-opacity duration-500 -z-10 group-hover:opacity-100`} />

                            {event.detailsUrl && (
                                <Link
                                    href={event.detailsUrl}
                                    aria-label={`Open ${event.title} page`}
                                    className="absolute inset-0 z-10 rounded-3xl"
                                />
                            )}

                            <div className="relative flex flex-1 flex-col rounded-3xl bg-white p-6 sm:p-8 lg:p-6 xl:p-8">
                                <div className="flex flex-1 flex-col items-start gap-4">
                                    {/* Event Number with icon */}
                                    <div className="flex w-full flex-shrink-0 items-start justify-start gap-4 lg:flex-col lg:items-center lg:justify-center">
                                        <div className={`h-14 w-14 rounded-2xl border-2 border-gray-100 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 sm:h-18 sm:w-18`}>
                                            <div className="flex h-full w-full p-2">
                                                <Image 
                                                src={event.logo} 
                                                alt={event.title}
                                                className="h-full w-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Content */}
                                    <div className="min-w-0 flex-1 space-y-2 md:space-y-3">
                                        <h3 className="text-xl font-bold leading-tight text-gray-800 transition-colors group-hover:text-emerald-700 lg:text-[1.75rem] xl:text-2xl">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600 lg:text-[0.95rem] xl:text-base">
                                            {event.subtitle}
                                        </p>

                                        {event.detailsUrl && (
                                            <p className="pt-2 text-sm font-semibold text-emerald-700">
                                                Open event page
                                            </p>
                                        )}

                                        {/* Submission Button */}
                                        {event.hasSubmission && event.submissionUrl && event.submissionLabel && (
                                            <div className="pt-3">
                                                <a
                                                    href={event.submissionUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`${event.title} ${event.submissionLabel}`}
                                                    className="relative z-20 mx-auto flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white transition-all hover:bg-emerald-700 xl:min-w-72"
                                                >
                                                    <Image
                                                        src={websiteIcon}
                                                        alt=""
                                                        aria-hidden="true"
                                                        className="h-5 w-5 object-contain brightness-0 invert"
                                                    />
                                                    <span>{event.submissionLabel}</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner with pattern */}
                            <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${event.color} opacity-5 rounded-bl-full`} />
                            <div className="absolute bottom-0 left-0 w-16 h-16 rounded-bl-2xl border-b-2 border-l-2 border-gray-100" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
