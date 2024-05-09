import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  MenuOpen: boolean;
  handleCloseClick: () => void;
}

function Menu({ MenuOpen, handleCloseClick }: Props) {
  const [screenWidth, setScreenWidth] = useState(0);

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

    const el = document.querySelector(".body") as HTMLElement;

    if (MenuOpen) {
      document.body.style.overflow = "hidden";
      el.style.filter = "blur(4px)";
    } else {
      document.body.style.overflow = "auto";
      el.style.filter = "blur(0px)";
    }
  }, [screenWidth, MenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ right: "-100%" }}
        animate={{ right: MenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="xl:hidden fixed top-0 right-0 h-[100vh] z-[101] w-full sm:w-[260px]"
      >
        <div className="absolute right-0 flex flex-col justify-between px-10 md:w-[270px] sm:w-[260px] h-full w-full bg-black">
          <ul className="flex flex-col text-white mt-32 gap-10 font-[700] text-[1.05rem]">
            <li className="hover:text-[#4285F4] transition-all duration-300">
              <a href="#">Creon Pass</a>
            </li>
            <li className="flex items-start gap-1 cursor-default">
              <a>Token</a>
              <span className="bg-black text-[#ab23ff] text-[.65rem] rounded-full px-1">
                SOON
              </span>
            </li>
            <li className="flex items-start gap-1 cursor-default">
              <a>AI Revenue</a>
              <span className="bg-black text-[#ab23ff] text-[.65rem] rounded-full px-1">
                SOON
              </span>
            </li>
            <li className="flex items-start gap-1 cursor-default">
              <a>AI Launchpad</a>
              <span className="bg-black text-[#ab23ff] text-[.65rem] rounded-full px-1">
                SOON
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-2 mb-10">
            <a
              href="#"
              className="border-[2px] border-white rounded-full p-[.4rem] hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300"
            >
              <Image
                src="https://ucarecdn.com/fd6e87bb-c183-442c-9286-16c117b84169/"
                alt="telegram"
                width={17}
                height={17}
                className="w-[17px] h-[17px]"
              />
            </a>

            <a
              href="#"
              className="border-[2px] border-white rounded-full p-[.4rem] hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300"
            >
              <Image
                src="https://ucarecdn.com/36e37a29-ec23-4f05-a5ce-3e9510ff5182/"
                alt="discord"
                width={17}
                height={17}
                className="w-[17px] h-[17px]"
              />
            </a>

            <a
              href="#"
              className="border-[2px] border-white rounded-full p-[.4rem] hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300"
            >
              <Image
                src="https://ucarecdn.com/726453d9-c606-4d30-a627-fa39d8837c63/"
                alt="twitter"
                width={17}
                height={17}
                className="w-[17px] h-[17px]"
              />
            </a>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: MenuOpen ? 0.6 : 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="bg-black w-full h-[100vh] absolute top-0 left-0 z-[100]"
        onClick={handleCloseClick}
      ></motion.div>
    </>
  );
}

export default Menu;
