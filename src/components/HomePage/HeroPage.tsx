'use client';
import {iconissaLogo, ppijLogo, topLeft} from "@/src/assets";
import Image from "next/image";



function HeroPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 relative overflow-hidden">
            {/* Animated Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Top Left Decoration */}
            <Image
                src={topLeft}
                alt=""
                className="absolute top-[-5] left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 object-contain z-10"
            />

            {/* Top Right Logo */}
            <div className="absolute top-4 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
                <Image
                    src={ppijLogo}
                    alt="PPI Jerman"
                    className="h-8 sm:h-10 md:h-12 lg:h-16 object-contain w-auto"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative z-10">
                {/* Logo with glow effect */}
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse" />
                        <Image
                            src={iconissaLogo}
                            alt="ICONISSA Logo"
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain relative z-10"
                        />
                    </div>
                </div>

                {/* Title with gradient */}
                <div className="space-y-3 md:space-y-4 px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent tracking-tight">
                        ICONISSA 2026
                    </h1>

                    {/* Tagline with better spacing */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-700 max-w-3xl mx-auto leading-relaxed font-medium">
                        Pathways Towards a Sustainable, Green and Digital Future of Indonesia
                    </p>
                </div>

                {/* CTA Badges */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
                    <div className="px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200">
                        <span className="text-xs md:text-sm font-semibold text-emerald-800">27-29 Agustus 2026</span>
                    </div>
                    <div className="px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200">
                        <span className="text-xs md:text-sm font-semibold text-emerald-800">Munich, Jerman</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <button
                    className="mt-12 md:mt-16 animate-bounce cursor-pointer"
                    onClick={() => {
                        document.getElementById('information-page')?.scrollIntoView({behavior: 'smooth'});
                    }}
                    aria-label="Scroll down"
                    >
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 mx-auto text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                </button>
            </div>
        </section>
    );
}

export default HeroPage;