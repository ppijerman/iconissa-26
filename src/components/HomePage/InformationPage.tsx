import Image from "next/image";
import callToAction from "../../assets/LandingPage/benih-chat-bubble.png";
import calendarIcon from "../../assets/LandingPage/calendar.png"
import locationIcon from "../../assets/LandingPage/locpin.png"

function InformationPage() {
    return(
        <section className="min-h-screen flex flex-col justify-center w-full">
            <div className="grid grid-cols-4 grid-rows-3 grid-flow-row min-h-screen justify-center items-center p-[15vw] relative">
                <div className="row-span-3 self-start w-full h-full overflow-visible place-items-stretch absolute">
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
                <div className="col-start-[-3] row-start-[-2] col-span-2 flex-row items-center content-between whitespace-nowrap text-black text-[2em] font-semibold">
                    <div className="flex inline-grid gap-[1vw]">
                        <div className="flex inline-flex items-center gap-5">
                            <div className="relative w-16 h-16">
                                <Image
                                    src={calendarIcon}
                                    alt="Calendar Icon"
                                    
                                />
                            </div>
                            <p>Technische Universität München <br /> Munich, Jerman</p>
                        </div>
                        <div className="flex inline-flex items-center gap-5"> 
                            <div className="relative w-16 h-16">
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

export default InformationPage;