"use client";

import Footer from "@/components/Footer";
import ComingSoon from "@/components/HomePage/ComingSoon";
import CreonPass from "@/components/HomePage/CreonPass";
import FirstScreen from "@/components/HomePage/FirstScreen";
import LastSection from "@/components/HomePage/LastSection";
import OurMission from "@/components/HomePage/OurMission";
import Profiting from "@/components/HomePage/Profiting";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <FirstScreen />
        <CreonPass />
        <Profiting />
        <OurMission />
        <ComingSoon />
        <LastSection />
      </main>
      <Footer />
    </>
  );
}
