import Image from "next/image";
import organizer from "../../assets/LandingPage/ppij-color.png";
import iconnisa from "../../assets/LandingPage/iconissa.png";
import decoart from "../../assets/LandingPage/top-left.png"

function HeroPage() {
    return (
        <main
            className="bg-white min-h-screen flex flex-col justify-center w-full"
            style={{
                background: "linear-gradient(50deg, rgba(234,242,224,1) 0%, rgba(246,247,237,1) 50%, rgba(234,242,224,1) 100%)",
            }}       
        >
            <div className="grid grid-cols-8 grid-rows-4 grid-flow-col-dense min-h-screen justify-center items-center pr-[0.5]">
                <div className="col-span-3 row-span-2 self-start w-full h-full overflow-hidden">
                    <Image
                        src={decoart}
                        alt="deco-art"
                    />
                </div>
                <div className="col-span-5 row-span-2 justify-center gap-4 pl-[5vw]">
                    <h1 className="flex font-semibold text-[3em] md:text-[3em] lg:text-[5em] xl:text-[7em] leading-tight tracking-tight text-black">
                        ICONISSA 2026
                    </h1>
                    <h3 className="flex italic whitespace-nowrap text-[1em] md:text-[1em] lg:text-[1em] xl:text-[1.75em] leading-tight tracking-tight text-black">
                        Pathways Towards a Sustainable, Green and Digital Future of Indonesia
                    </h3>
                </div>
                <div className="row-span-1 col-span-2 self-start col-end-[-1] justify-self-end pt-[1vw] pr-[2vw]">
                    <h1 className="flex font-semibold text-gray-300 text-xl justify-self-end tracking-widest">
                        organized by
                    </h1>
                    <Image 
                        className="flex justify-self-end"
                        src={organizer}
                        alt="organized by ppij"
                        height={40}
                    />
                </div>
                <div className="col-span-3 row-span-3 justify-center pl-[3vw] pb-[5vw]">
                    <Image 
                        src={iconnisa}
                        alt="iconissa"
                        height={400}
                    />
                </div>
            </div>
        </main>
    );
}

export default HeroPage;