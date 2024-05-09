import React from "react";
import ComingSoon from "@/components/HomePage/ComingSoon";
import CreonPass from "@/components/HomePage/CreonPass";
import FirstScreen from "@/components/HomePage/FirstScreen";
import LastSection from "@/components/HomePage/LastSection";
import OurMission from "@/components/HomePage/OurMission";
import Profiting from "@/components/HomePage/Profiting";

function HomePage() {
  return (
    <main className="bg-black overflow-x-hidden body">
      <FirstScreen />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <LastSection />
    </main>
  );
}

export default HomePage;
