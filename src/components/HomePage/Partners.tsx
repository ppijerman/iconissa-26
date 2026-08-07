"use client";

import {ppiTurki, indomie, TK, omio} from "@/src/assets";
import Image, {StaticImageData} from "next/image";
import {useEffect, useRef, useState} from "react";

const partners: {src: StaticImageData; alt: string}[] = [
  {src: ppiTurki, alt: "PPI Turki"},
  {src: indomie, alt: "Indomie"},
  {src: TK, alt: "TK"},
  {src: omio, alt: "Omio"},
];

function PartnerLogo({src, alt}: {src: StaticImageData; alt: string}) {
  return (
    <div className="relative h-24 w-32 shrink-0 md:h-48 md:w-56">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const checkOverflow = () => {
      setIsOverflowing(measure.scrollWidth > container.clientWidth);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(container);
    observer.observe(measure);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-20 bg-white border-t border-emerald-100">
      <p className="text-center text-3xl md:text-5xl text-emerald-800 uppercase font-bold mb-10 px-10">
        Partners of ICONISSA 2026
      </p>
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Hidden row used only to measure the natural (single-copy) width, so the
            marquee's doubled track never feeds back into the overflow check. */}
        <div
          ref={measureRef}
          className="pointer-events-none invisible absolute flex w-max flex-nowrap items-center gap-6 md:gap-10"
          aria-hidden="true"
        >
          {partners.map((partner) => (
            <PartnerLogo key={partner.alt} src={partner.src} alt={partner.alt} />
          ))}
        </div>

        {isOverflowing ? (
          <div className="flex w-max flex-nowrap items-center gap-6 animate-marquee md:gap-10">
            {[...partners, ...partners].map((partner, index) => (
              <PartnerLogo key={`${partner.alt}-${index}`} src={partner.src} alt={partner.alt} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <PartnerLogo key={partner.alt} src={partner.src} alt={partner.alt} />
            ))}
          </div>
        )}
      </div>
      <div className="relative mt-20 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
      </div>
    </section>
  );
}

export default Partners;
