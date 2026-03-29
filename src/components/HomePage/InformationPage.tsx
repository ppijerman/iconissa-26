import {iconissaLogo, ppij70thLogo, sssLogo} from "@/src/assets";
import Image from "next/image";

export default function InformationPage() {
    const events = [
        {
            logo: iconissaLogo,
            title: "International Conference of Integrated Intellectual Community (ICONIC) 2026",
            subtitle: "Innovation for a Green Economy and Society: Reimagining Indonesia's Digital and Sustainable Transition",
            color: "from-emerald-500 to-teal-600",
            hasSubmission: true
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
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 mx-auto`} />

                            {/* Animated border gradient */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${event.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`} />

                            <div className="relative p-6 sm:p-8 bg-white rounded-3xl flex-1 flex flex-col">
                                <div className="flex flex-col gap-4 items-start flex-1">
                                    {/* Event Number with icon */}
                                    <div className="flex-shrink-0 flex gap-4 w-full justify-start lg:justify-center lg:flex-col items-start lg:items-center">
                                        <div className={`w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-white border-2 border-gray-100 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                            <div className="w-full h-full p-2 flex">
                                                <Image 
                                                src={event.logo} 
                                                alt={event.title}
                                                className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Content */}
                                    <div className="flex-1 space-y-2 md:space-y-3">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors leading-tight">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {event.subtitle}
                                        </p>

                                        {/* Submission Button */}
                                        {event.hasSubmission && (
                                        <div className="pt-3">
                                            <button 
                                            disabled
                                            className="w-full sm:w-auto px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                                            >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <span>Submission Coming Soon</span>
                                            </button>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner with pattern */}
                            <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${event.color} opacity-5 rounded-bl-full`} />
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-gray-100 rounded-bl-2xl" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
