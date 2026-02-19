import Image from "next/image";
import waveBG from "../../assets/LandingPage/Wave.png";

function ComingSoonPage() {
    return (
        <section className="flex flex-col relative justify-center items-center bg-[#00804c]">
            <Image
                fill
                src={waveBG}
                alt="wave-art"
            />
            <div className="flex flex-col items-center text-center space-y-[3vw] mb-[3vw] py-[5.5vw]">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                    COMING VERY SOON
                </h2>
                <div className="flex flex-row gap-[2vw] items-stretch text-black text-3xl px-[3vw]">
                    <div className="flex flex-1 flex-col bg-[#f6f7ed] rounded-xl font-semibold px-[2vw] py-[1.5vw] text-left">
                        <h1 className="flex items-center min-h-[7.5rem]">
                            International Conference of Integrated Intellectual Community (ICONIC) 2026
                        </h1>
                        <hr className="my-[2vw] h-1 bg-black border-0" />
                        <p className="flex items-center justify-center min-h-[5rem] font-medium text-center text-xl mt-auto">
                            Innovation for a Green Economy and Society: Reimagining Indonesia’s Digital and Sustainable Transition
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col bg-[#f6f7ed] rounded-xl font-semibold px-[2vw] py-[1.5vw] text-left">
                        <h1 className="flex items-center min-h-[7.5rem]">
                            Sea Student Summit 2026
                        </h1>
                        <hr className="my-[2vw] h-1 bg-black border-0" />
                        <p className="flex items-center justify-center min-h-[5rem] font-medium text-center text-xl mt-auto">
                            Collaboration within Southeast Asian Countries toward Sustainable Transition
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col bg-[#f6f7ed] rounded-xl font-semibold px-[2vw] py-[1.5vw] text-left">
                        <h1 className="flex items-center min-h-[7.5rem]">
                            PPI Jerman 70th Anniversary
                        </h1>
                        <hr className="my-[2vw] h-1 bg-black border-0" />
                        <p className="flex items-center justify-center min-h-[5rem] font-medium text-center text-xl mt-auto">
                            70 Years of PPI Jerman: Honouring the Past, Empowering the Future
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComingSoonPage;