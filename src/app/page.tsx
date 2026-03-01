import HeroPage from "../components/HomePage/HeroPage";
import InformationPage from "../components/HomePage/InformationPage";
import ComingSoonPage from "../components/HomePage/ComingSoonPage";

export default function Home() {
  return (
    <main 
      className="w-full"
      style={{
                background: "linear-gradient(50deg, rgba(234,242,224,1) 0%, rgba(246,247,237,1) 50%, rgba(234,242,224,1) 100%)",
            }} 
    >
      <HeroPage />
      <InformationPage />
      <ComingSoonPage />
    </main>
  );
}
