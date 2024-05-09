import React from "react";
import CreonBtn from "../Widgets/CreonBtn";

function CreonPass() {
  return (
    <section className="py-[5rem]">
      <div className="w-[90%] xl:w-[75%] mx-auto flex items-center flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
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

          <CreonBtn />
        </div>

        <div className="xl:w-1/2 md:w-[600px] mt-10 md:mt-0 w-full h-full xl:h-[90%] relative">
          <div className="absolute -top-5 left-0 w-full h-20 bg-gradient-to-b from-black via-black"></div>
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover z-[999]"
          >
            <source src="/nft-video.mp4" />
          </video>
          <div className="absolute -bottom-5 left-0 w-full h-20 bg-gradient-to-t from-black via-black"></div>
        </div>
      </div>
    </section>
  );
}

export default CreonPass;
