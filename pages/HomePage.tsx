import React from "react";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/HomePage/ComingSoon";
import CreonPass from "@/components/HomePage/CreonPass";
import FirstScreen from "@/components/HomePage/FirstScreen";
import LastSection from "@/components/HomePage/LastSection";
import OurMission from "@/components/HomePage/OurMission";
import Profiting from "@/components/HomePage/Profiting";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Widgets/Menu";
import classNames from "classnames";

interface Props {
  MenuOpen: boolean;
  handleMenuClick: () => void;
  handleCloseClick: () => void;
}

function HomePage({ MenuOpen, handleMenuClick, handleCloseClick }: Props) {
  return (
    <>
      <Navbar MenuOpen={MenuOpen} handleMenuClick={handleMenuClick} />
      <Menu MenuOpen={MenuOpen} />
      <main
        onClick={handleCloseClick}
        className={classNames("bg-black overflow-x-hidden body", {
          "blur-[3px] brightness-50 cursor-default": MenuOpen,
          "blur-0 brightness-100": !MenuOpen,
        })}
      >
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

export default HomePage;
