import React from "react";
import { motion } from "framer-motion";

function Profiting() {
  return (
    <section className="py-[5rem] flex flex-col justify-center">
      <div className="w-[75%] mx-auto text-white">
        <div className="flex flex-col font-Monument">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="text-[4rem] uppercase leading-[110%] font-[700]"
          >
            PROFITING THROUGH
          </motion.h2>
          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="self-end w-fit text-[2.45rem] uppercase font-Monument font-[700] leading-[130%] block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            AI INNOVATION & DECENTRALIZATION
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
          className="flex w-full h-[500px] gap-10 mt-20"
        >
          <video muted autoPlay loop className="h-full rounded-lg">
            <source src="/creon-logo.mp4" />
          </video>

          <div className="font-Satoshi h-[100%] w-full px-[2rem] flex flex-col justify-center gap-[1.9rem] border-l-[1px] border-r-[1px] border-[#13171d]">
            <span className="text-2xl font-[600]">
              The dynamic community driven business model of the future
            </span>
            <p className="leading-[130%] opacity-90">
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
