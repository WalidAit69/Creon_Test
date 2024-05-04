import React from "react";
import { motion } from "framer-motion";

function FirstScreen() {
  return (
    <section className="h-[100vh] bg-slate-50">
      <div className="h-full w-full relative">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src="/MainVideo.mp4" />
        </video>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="absolute left-0 bottom-[5%] w-full z-10"
        >
          <div className="w-[75%] mx-auto flex flex-col gap-5">
            <h1 className="text-white text-[4rem] font-Monument font-bold max-w-[75rem] leading-[110%] uppercase">
              THE WORLD'S FIRST PLATFORM FOR TOKENIZING AI BLOCKCHAIN PROJECTS
            </h1>
            <div className="relative w-fit">
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="w-fit text-[1.3rem] font-Satoshi font-[700] leading-[130%] block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent py-2">
                Hold the Creon Pass NFT and earn passive income from AI Tools
              </span>
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>
          </div>
        </motion.div>

        <div className="absolute left-0 bottom-0 w-full h-[300px] bg-gradient-to-t from-black via-black"></div>
      </div>
    </section>
  );
}

export default FirstScreen;