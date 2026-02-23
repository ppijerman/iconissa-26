import Image from "next/image";
import callToAction from "../../assets/LandingPage/benih-chat-bubble.png";
import calendarIcon from "../../assets/LandingPage/calendar.png"
import locationIcon from "../../assets/LandingPage/locpin.png"
import mascot from "../../assets/LandingPage/benih.png";

function ComingSoonPage() {
    return(
        <section className="min-h-screen flex flex-col justify-center w-full">
            <div className="grid grid-cols-4 
            grid-rows-4 md:grid-rows-3 grid-flow-row min-h-screen justify-center items-center px-[8vw] py-[20vw] md:py-0 relative">
                <div className="row-span-3 self-start w-full h-full overflow-visible place-items-stretch absolute
                hidden md:grid">
                        <Image
                            className="grid-row-start 1 grid-row-end-4"
                            src={callToAction}
                            fill
                            alt="See you at ICONISSA 2026"
                            style={{
                                width: '100%',
                                objectFit: 'contain',
                            }}
                        />
                </div>
                <div className="col-span-2 col-start-2 justify-center w-full h-full overflow-visible
                grid md:hidden">
                        <Image
                            src={mascot}
                            alt="See you at ICONISSA 2026"
                        />
                </div>
                <div className="col-span-4 row-span-2 justify-center items-center overflow-visible
                grid md:hidden">
                    <h1 className="text-black text-center text-5xl font-extrabold rounded-[12vw] bg-white border-6 border-black p-[2vw]">
                        SEE YOU AT <br /> ICONISSA 2026!
                    </h1>
                </div>
                <div className="flex md:col-start-[-3] row-start-[-2] col-span-4 md:col-span-2 flex-row content-between whitespace-nowrap text-black font-semibold
                md:row-end-[-1] lg:row-end-[-1] 
                row-span-1 md:row-span-2
                text-sm xl:text-2xl
                justify-center md:justify-start self-start md:self-center">
                    <div className="flex inline-grid gap-[1vw]">
                        <div className="flex inline-flex items-center gap-5">
                            <div className="relative 
                            w-8 lg:w-16
                            h-8 lg:h-16">
                                <Image
                                    src={calendarIcon}
                                    alt="Calendar Icon"
                                    
                                />
                            </div>
                            <p>Technische Universität München <br /> Munich, Jerman</p>
                        </div>
                        <div className="flex inline-flex items-center gap-5"> 
                            <div className="relative 
                            w-8 lg:w-16
                            h-8 lg:h-16">
                                <Image
                                    src={locationIcon}
                                    alt="Location Icon"
                                    fill
                                />
                            </div>
                            <p>27-29 Agustus 2026</p>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComingSoonPage;