"use client";

import Footer from "@/components/Footer";
import ComingSoon from "@/components/HomePage/ComingSoon";
import CreonPass from "@/components/HomePage/CreonPass";
import FirstScreen from "@/components/HomePage/FirstScreen";
import LastSection from "@/components/HomePage/LastSection";
import OurMission from "@/components/HomePage/OurMission";
import Profiting from "@/components/HomePage/Profiting";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Widgets/Menu";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Home() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleMenuClick = () => {
    setMenuOpen(!MenuOpen);
  };

  const handleCloseClick = () => {
    MenuOpen && setMenuOpen(false);
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 1280) {
      handleCloseClick();
    }

    if (MenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    
  }, [screenWidth, MenuOpen]);

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
