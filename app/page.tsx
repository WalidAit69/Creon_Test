"use client";
import HomePage from "@/pages/HomePage";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import checkAllVideosLoaded from "@/scripts/VideoLoading";

export default function Home() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const videos: NodeListOf<HTMLVideoElement> =
    document.querySelectorAll("video");
  let allVideosLoaded = false;

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
    checkAllVideosLoaded(Array.from(videos), (isLoaded) => {
      allVideosLoaded = isLoaded;
      setFontsLoaded(true);
    });
  }, []);

  return fontsLoaded ? (
    <HomePage
      MenuOpen={MenuOpen}
      handleMenuClick={handleMenuClick}
      handleCloseClick={handleCloseClick}
    />
  ) : (
    <Loader />
  );
}
