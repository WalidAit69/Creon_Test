import React from "react";
import { motion } from "framer-motion";

function Profiting({ handleVideoLoaded }: { handleVideoLoaded: () => void }) {
  return (
    <section className="py-[5rem] flex flex-col justify-center">
      <div className="xl:w-[75%] w-[90%] mx-auto text-white">
        <div className="flex flex-col font-Monument">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="2xl:text-[4rem] md:text-[3rem] sm:text-[5vw] text-[6.5vw] uppercase leading-[110%] font-[700]"
          >
            PROFITING THROUGH
          </motion.h2>
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="self-end text-end w-fit 2xl:text-[2.45rem] md:text-[2] sm:text-[3vw] text-[4vw] uppercase font-Monument font-[700] leading-[130%] block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            AI INNOVATION & DECENTRALIZATION
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
          className="flex flex-col md:flex-row w-full max-md:h-auto max-lg:h-[400px] max-xl:h-[480px] h-full md:gap-10 gap-5 md:mt-20 mt-5"
        >
          <video
            muted
            autoPlay
            loop
            className="md:w-[49vw] w-full rounded-lg object-cover"
            onLoadedData={handleVideoLoaded}
          >
            <source src="/creon-logo.mp4" />
          </video>

          <div className="font-Satoshi w-full xl:w-[23vw] px-[.5rem] sm:px-[2rem] flex flex-col justify-center gap-[1.9rem] border-l-[1px] border-r-[1px] border-[#13171d]">
            <span className="md:text-xl lg:text-2xl 2xl:text-[1.2vw] font-[600]">
              The dynamic community driven business model of the future
            </span>
            <p className="leading-[130%] text-xs md:text-sm lg:text-base 2xl:text-[1vw] opacity-90">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profiting;
