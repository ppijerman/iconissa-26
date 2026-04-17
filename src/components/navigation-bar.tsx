import { iconissaLogo, ppijLogo } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";

function navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-100 bg-white/85 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src={iconissaLogo}
            alt="ICONISSA"
            className="h-8 w-auto object-contain md:h-10 lg:h-12"
          />
          <span className="hidden bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-lg font-bold text-transparent sm:inline md:text-xl">
            ICONISSA 2026
          </span>
        </Link>

        <Image
          src={ppijLogo}
          alt="PPI Jerman"
          className="h-8 w-auto object-contain md:h-10 lg:h-12"
        />
      </div>
    </nav>
  );
}

export default navbar;
