import Image from "next/image";
import waveBG from "../../assets/LandingPage/Wave.png";

function InformationPage() {
    return (
        <section className="flex flex-col relative justify-center items-center bg-[#00804c]">
            <div className="hidden lg:grid">
                <Image
                    fill
                    src={waveBG}
                    alt="wave-art"
                />
            </div>
            <div className="flex flex-col items-center text-center space-y-[7vw] mb-[5vw] py-[7vw]">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                    COMING VERY SOON
                </h2>
                <div className="flex flex-col md:flex-row grow gap-[5vw] md:gap-[2vw] 
                items-stretch content-around text-black text-3xl px-[3vw]">
                    <div className="flex flex-1 flex-col bg-[#f6f7ed] rounded-xl font-semibold px-[2vw] py-[1.5vw] text-left">
                        <h1 className="flex items-center md:min-h-3/5 xl:min-h-[7.5rem]">
                            International Conference of Integrated Intellectual Community (ICONIC) 2026
                        </h1>
                        <hr className="my-[2vw] h-1 bg-black border-0" />
                        <p className="flex items-center justify-center self-stretch md:min-h-[3rem] xl:min-h-[5rem] font-medium text-center 
                        text-xl">
                            Innovation for a Green Economy and Society: Reimagining Indonesia’s Digital and Sustainable Transition
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col bg-[#f6f7ed] rounded-xl font-semibold px-[2vw] py-[1.5vw] text-left">
                        <h1 className="flex items-center md:min-h-3/5 xl:min-h-[7.5rem]">
                            Sea Student Summit 2026
                        </h1>
                        <hr className="my-[2vw] h-1 bg-black border-0" />
                        <p className="flex items-center justify-center md:min-h-[1rem] xl:min-h-[5rem] font-medium text-center text-xl my-auto 
                        text-xl">
                            Collaboration within Southeast Asian Countries toward Sustainable Transition
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col bg-[#f6f7ed] rounded-xl font-semibold px-[2vw] py-[1.5vw] text-left">
                        <h1 className="flex items-center md:min-h-3/5 xl:min-h-[7.5rem]">
                            PPI Jerman 70th Anniversary
                        </h1>
                        <hr className="my-[2vw] h-1 bg-black border-0" />
                        <p className="flex items-center justify-center md:min-h-[1rem] xl:min-h-[5rem] font-medium text-center text-xl my-auto 
                        text-xl">
                            70 Years of PPI Jerman: Honouring the Past, Empowering the Future
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InformationPage;