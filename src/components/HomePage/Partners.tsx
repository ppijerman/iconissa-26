import {ppiTurki} from "@/src/assets";
import Image from "next/image";

function Partners() {
  return (
    <section className="pt-20 bg-white border-t border-emerald-100">
      <p className="text-center text-3xl md:text-5xl text-emerald-800 uppercase font-bold mb-10 px-10">
        Partners of ICONISSA 2026
      </p>
      <div className="flex justify-center">
        <Image 
            src={ppiTurki} 
            alt="PPI Turki" 
            className="h-48 object-contain" 
        />
      </div>
      <div className="relative mt-20 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
      </div>
    </section>
  );
}

export default Partners;