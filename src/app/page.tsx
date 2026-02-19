import Image from "next/image";
import HeroPage from "../components/HomePage/HeroPage";
import ComingSoonPage from "../components/HomePage/ComingSoonPage";

export default function Home() {
  return (
    <main className="w-full">
      <HeroPage />
      <ComingSoonPage />
    </main>
  );
}
