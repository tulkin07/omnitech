import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonals from "@/components/Testimonals";
import AIBanner from "@/components/AIBanner";
import TeamSection from "@/components/Team";
import { ContactSection } from "@/components/Contact";
import FinalSection from "@/components/Footer";
import heroImage from "@/assets/images/knight.png"; // sizning screenshotdagi knight
import Image from "next/image";
export default function HomePage() {
  return (
    <main>
        <Image
        src={heroImage}
        alt="Knight"
        // fill
        className="w-full absolute  sm:top-[100px] left-0 right-0 z-[-1] "
      />
      <Hero />
      <Features />
      <Testimonals/>
      <AIBanner/>
      <TeamSection/>
      <ContactSection/>
     <FinalSection/>
    </main>
  );
}
