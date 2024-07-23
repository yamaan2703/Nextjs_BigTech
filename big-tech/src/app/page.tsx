import Button from "@/components/atoms/Button/Button";
import Cards from "@/components/atoms/Cards/Cards";
import HeroImage from "@/components/atoms/Hero/HeroImage";
import Navbar from "@/components/atoms/Navbar/Navbar";
import Partners from "@/components/atoms/Partners/Partners";
import Timer from "@/components/atoms/Timer/Timer";
import Image from "next/image";
import { FaCircle } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="bg-[#030b15]">
      <Navbar />
      <HeroImage />
      <Timer />

      <div className="about_section mt-10 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center p-2">
            <div className="w-full md:w-[70%] md:h-[70%]">
              <Image
                src="/images/about_img01.png"
                alt="About Image"
                layout="responsive"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="text-white w-full md:w-[70%]">
            <div className="flex items-center gap-3 py-3 font-semibold ">
              <FaCircle className="text-[10px] text-[#00c4f4]" />
              <p>WHO WE ARE</p>
              <FaCircle className="text-[10px] text-[#00c4f4]" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold py-3 ">
              The World’s <span className="text-[#00c4f4]">1st ICO</span>{" "}
              Platform That Offers Rewards
            </h1>
            <p className="text-[#a4b4c3] py-5">
              The World’s 1st ICO Platform That Offers Rewards and The platform
              helps investors to make easy to purchase and sell their tokens
            </p>
            <div className="py-5">
              <Button label="PURCHASE TOKENS" />
            </div>
          </div>
        </div>
      </div>

      <Partners />

      <div className="mt-10 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
        <div className="flex items-center justify-center gap-3 py-5 font-semibold text-[14px] text-white">
          <FaCircle className="text-[10px] text-[#00c4f4]" />
          <p>WHY CHOOSE US</p>
          <FaCircle className="text-[10px] text-[#00c4f4]" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-white text-3xl text-center w-[35%] font-bold">
            Why Choose Our Bigtech <span className="text-[#00c4f4]">Token</span>
          </h1>
        </div>
        <Cards />
      </div>
    </main>
  );
}
