"use client";
import HomePage from "@/pages/HomePage";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

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

  useEffect(() => {
    if (document && document.fonts) {
      setTimeout(function () {
        document.fonts.load('16px "Monument"').then(() => {
          setFontsLoaded(true);
        });
      }, 0);
    }
  }, []);

  useEffect(() => {
    !videoLoaded
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [videoLoaded]);

  return (
    <>
      {!videoLoaded && <Loader />}
      <HomePage
        MenuOpen={MenuOpen}
        handleMenuClick={handleMenuClick}
        handleCloseClick={handleCloseClick}
        handleVideoLoaded={handleVideoLoaded}
      />
    </>
  );
}
