import HeroImage from "@/components/atoms/Hero/HeroImage";
import Navbar from "@/components/atoms/Navbar/Navbar";

export default function Home() {
  return (
      <main className="bg-[#030b15]">
        <Navbar />
        <HeroImage />
      </main>
  );
}
