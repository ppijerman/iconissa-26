import {benihMascot, ppijLogo} from "../../assets";
import Image from "next/image";

function ComingSoonPage() {
    return(
        <section className="py-12 md:py-20 px-4 md:px-6 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl md:rounded-[2rem] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-16 text-center space-y-6 md:space-y-8 border border-white/20">
                    {/* Mascot */}
                    <div className="flex justify-center relative">
                        <div>
                            <div className="absolute left-[25%] top-[-13%] lg:left-[28%] bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60 blur-3xl animate-pulse w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
                            <Image
                                src={benihMascot}
                                alt="ICONISSA Mascot"
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain z-10 relative"
                            />
                        </div>
                    </div>

                    {/* See You Message */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 bg-clip-text text-transparent px-4 drop-shadow-lg">
                        See You at ICONISSA 2026!
                    </h2>

                    {/* Event Details */}
                    <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
                        {/* Location */}
                        <div className="space-y-2">
                            <div className="inline-flex items-center justify-center gap-2 md:gap-3 text-black/90 bg-gray-600/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-500/30">
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="text-base sm:text-lg md:text-xl font-medium">
                                    <div>Technische Universität München</div>
                                    <div>Munich, Jerman</div>
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="inline-flex items-center justify-center gap-2 md:gap-3 text-black/90 bg-gray-600/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-600/30">
                            <svg
                                className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <div className="text-base sm:text-lg md:text-xl font-semibold">
                                27-29 Agustus 2026
                            </div>
                        </div>
                    </div>

                    {/* Organized By */}
                    <div className="pt-6 md:pt-8 border-t border-black/20">
                        <p className="text-sm sm:text-base text-black/70 mb-3 md:mb-4">Organized by</p>
                        <div className="flex justify-center">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl w-lg">
                                <Image
                                    src={ppijLogo}
                                    alt="PPI Jerman"
                                    className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComingSoonPage;