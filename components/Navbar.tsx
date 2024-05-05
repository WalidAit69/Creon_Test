import React, { useState } from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import MenuBtn from "@/components/Widgets/MenuBtn";

interface Props {
  MenuOpen: boolean;
  handleMenuClick: () => void;
}

function Navbar({ MenuOpen, handleMenuClick }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="z-[9999] absolute flex items-center justify-between w-[95%] left-1/2 -translate-x-1/2 top-[20px] font-Satoshi p-3"
    >
      <a href="">
        <Image src={logo} alt="logo" width={140} className="sm:w-[140px] w-[100px]" />
      </a>

      <nav className="flex items-center xl:gap-20 gap-5 text-white">
        <div className="hidden xl:block">
          <ul className="flex items-center gap-10 font-[700] text-[1.05rem]">
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
        </div>

        <button className="border-2 rounded-[.2rem] sm:py-2 py-1 sm:px-8 px-4 font-[700] text-[1.05rem] active:scale-95 hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300">
          Connect
        </button>

        <MenuBtn MenuOpen={MenuOpen} handleMenuClick={handleMenuClick} />

      </nav>
    </motion.header>
  );
}

export default Navbar;
