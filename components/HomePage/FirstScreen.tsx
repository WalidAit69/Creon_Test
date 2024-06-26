import React from "react";

function FirstScreen() {
  return (
    <section className="xl:h-[100vh] h-[70vh] max-sm:h-[100vh]">
      <div className="h-full w-full relative">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
          preload="none"
        >
          <source src="/MainVideo.mp4" />
        </video>

        <div className="absolute left-0 bottom-[5%] w-full z-10">
          <div className="w-[90%] xl:w-[75%] mx-auto flex flex-col gap-5">
            <h1 className="text-white xl:text-[3.6vw] md:text-[4.8vw] text-[5.5vw] font-Monument font-bold leading-[110%] uppercase">
              THE WORLD&apos;S FIRST PLATFORM FOR TOKENIZING AI BLOCKCHAIN
              PROJECTS
            </h1>
            <div className="relative w-fit">
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="w-fit text-[4vw] sm:text-[1rem] md:text-[1.3rem] font-Satoshi font-[700] leading-[130%] block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent py-2">
                Hold the Creon Pass NFT and earn passive income from AI Tools
              </span>
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-full h-[300px] bg-gradient-to-t from-black via-black"></div>
      </div>
    </section>
  );
}

export default FirstScreen;
