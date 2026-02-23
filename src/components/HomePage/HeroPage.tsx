import Image from "next/image";
import organizer from "../../assets/LandingPage/ppij-color.png";
import iconnisa from "../../assets/LandingPage/iconissa.png";
import decoart from "../../assets/LandingPage/top-left.png"

function HeroPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center w-full">
            <div className="grid 
            grid-cols-4 md:grid-cols-8 
            grid-rows-4 md:grid-rows-4 
            grid-flow-row-dense md:grid-flow-col-dense min-h-screen justify-center items-center pr-[0.5]">
                <div className="self-start
                    col-span-1 md:col-span-3 row-span-1 md:row-span-2 
                    w-full md:w-[50%] xl:w-full 
                    h-full md:h-[50%] xl:h-full
                    order-1">
                    <Image
                        src={decoart}
                        alt="deco-art"
                    />
                </div>
                <div className="flex flex-col self-start md:self-center
                col-span-4 md:col-span-5 
                row-span-1 md:row-span-2 
                justify-center gap-2 md:gap-4 md:pl-[5vw] px-[3vw] md:px-0 pb-[5vw] md:pb-0
                order-last md:order-2">
                    <h1 className="flex font-semibold text-[3em] md:text-[3em] lg:text-[5em] xl:text-[7em] leading-tight tracking-tight text-black
                    justify-center md:justify-start text-center md:text-left">
                        ICONISSA 2026
                    </h1>
                    <h3 className="flex italic md:whitespace-nowrap text-[1em] md:text-[0.9em] lg:text-[1.3em] xl:text-[1.75em] leading-tight tracking-tight text-black
                    justify-center md:justify-start text-center md:text-left">
                        Pathways Towards a Sustainable, Green and Digital Future of Indonesia
                    </h3>
                </div>
                <div className="row-span-1 col-span-2 self-start col-end-[-1] justify-self-end pt-[1vw] pr-[2vw] 
                order-first md:order-3">
                    <h1 className="flex font-semibold text-gray-300 justify-self-end tracking-widest
                    md:text-m xl:text-xl">
                        organized by
                    </h1>
                    <Image 
                        className="flex justify-self-end"
                        src={organizer}
                        alt="organized by ppij"
                        height={40}
                    />
                </div>
                <div className="flex items-center md:items-start
                col-span-2 md:col-span-3 
                row-span-2 md:row-span-3 
                col-start-2 md:col-start-0
                justify-center px-[1.5vw] md:px-[3vw] md:pb-[5vw] relative 
                order-2 md:order-4">
                    <Image 
                        src={iconnisa}
                        alt="iconissa"
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroPage;