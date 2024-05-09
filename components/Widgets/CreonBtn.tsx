'use client'

import React from "react";
import { motion } from "framer-motion";

function CreonBtn() {
  return (
    <button
      className="text-[.85rem] sm:text-[1rem] md:text-[1.1rem] text-white relative md:w-[450px] w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-16 rounded-[.2rem] h-12 font-Satoshi font-[700]
   hover:from-blue-500 hover:to-blue-500 transition-all duration-300 overflow-hidden active:scale-95"
    >
      <motion.div
        initial={{ top: 0 }}
        whileHover={{ top: "-75%" }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="absolute left-1/2 top-[0%] -translate-x-1/2 h-[80px] flex flex-col
    justify-between w-full"
      >
        <span className="md:mt-[10px] mt-[12px]">Buy Creon Pass</span>
        <span className="mb-[10px]">Buy Creon Pass</span>
      </motion.div>
    </button>
  );
}

export default CreonBtn;
