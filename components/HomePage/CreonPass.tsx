import React from "react";
import { motion } from "framer-motion";

function CreonPass() {
  return (
    <section className="py-[5rem]">
      <div className="w-[90%] xl:w-[75%] mx-auto flex items-center flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="md:w-1/2 w-full"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-white 2xl:text-[4rem] lg:text-[3rem] md:text-[2rem] text-[5vw] font-[400] max-w-2xl font-Monument leading-[100%] uppercase">
              CREON PASS NFT
            </h2>
            <div className="w-[90%] h-[1px] bg-[#13171D]"></div>
            <span className="w-fit max-w-xl text-[4vw] sm:text-[1rem] md:text-[1.3rem]  font-Satoshi font-[600] block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              The Creon NFT pass unlocks access to AI projects, the Creon
              launchpad, and a ticket to generate passive income through
              AI-driven tools.
            </span>
          </div>

          <ul className="flex flex-col mt-10 gap-4 font-Satoshi text-[3vw] sm:text-[1rem] md:text-[1.1rem] text-white">
            <li className="w-fit py-3 px-6 border border-[#13171D]">
              Pre-launch investment opportunities for upcoming AI projects
            </li>
            <li className="w-fit py-3 px-6 border border-[#13171D]">
              Free and early access to Creon built AI projects
            </li>
            <li className="w-fit py-3 px-6 border border-[#13171D]">
              Higher allocation limits on the Creon AI Launchpad
            </li>
            <li className="w-fit py-3 px-6 border border-[#13171D]">
              Revenue share distribution from Creon built AI projects
            </li>
          </ul>

          <button
            className="text-[.85rem] sm:text-[1rem] md:text-[1.1rem] text-white relative md:w-[450px] w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-16 rounded-[.2rem] h-12 font-Satoshi font-[700]
           hover:from-blue-500 hover:to-blue-500 transition-all duration-300 overflow-hidden active:scale-95"
          >
            <motion.div
              initial={{ top: 0 }}
              whileHover={{ top: "-70%" }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className="absolute left-1/2 top-[0%] -translate-x-1/2 h-[80px] flex flex-col
            justify-between w-full"
            >
              <span className="md:mt-[10px] mt-[12px]">Buy Creon Pass</span>
              <span className="mb-[10px]">Buy Creon Pass</span>
            </motion.div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
          className="xl:w-1/2 md:w-[600px] mt-10 md:mt-0 w-full h-full xl:h-[90%] relative"
        >
          <div className="absolute -top-5 left-0 w-full h-20 bg-gradient-to-b from-black via-black"></div>
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover z-[999]"
            preload="none"
          >
            <source src="/nft-video.mp4" />
          </video>
          <div className="absolute -bottom-5 left-0 w-full h-20 bg-gradient-to-t from-black via-black"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default CreonPass;
