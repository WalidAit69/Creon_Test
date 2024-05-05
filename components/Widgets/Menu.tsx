import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Menu({ MenuOpen }: { MenuOpen: boolean }) {
  return (
    <motion.nav
      initial={{ right: "-50%" }}
      animate={{ right: MenuOpen ? "0%" : "-100%" }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="xl:hidden md:w-[270px] sm:w-[260px] w-full fixed top-0 right-0 h-[100vh] z-[99] flex flex-col justify-between px-10 bg-black"
    >
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
    </motion.nav>
  );
}

export default Menu;
