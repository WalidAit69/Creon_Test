import React from "react";
import CardLg from "../Widgets/CardLg";

const Data = [
  {
    title: "AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE",
    image: "https://ucarecdn.com/ca07bd84-657b-4c66-b428-be31575d2966/",
    content:
      "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
  },
  {
    title: "AI TOOLS AND MARKET",
    description: "Driving income and growth through decentralization",
    image: "https://ucarecdn.com/541b26dc-6865-4038-815f-ddb64f20672d/",
    content:
      "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
  },
  {
    title: "AI, CRYPTO, AND NFT MARKET",
    content:
      "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
    image: "https://ucarecdn.com/24655b47-a5a3-49a8-8fbe-d5f9d06543bd/",
  },
];

function LastSection() {
  return (
    <section className="py-[5rem] relative">
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/60 to-black z-30"></div>

      {/* Video container */}
      <div className="absolute top-0 z-20 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          preload="none"
        >
          <source src="/roadmap-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content container */}
      <div className="xl:w-[75%] w-[90%] mx-auto flex md:flex-col md:items-center gap-5 z-[99] relative max-md:overflow-x-scroll overflow-hidden scrollbar">
        {Data && Data.map((Card, index) => <CardLg key={index} Card={Card} />)}
      </div>
    </section>
  );
}

export default LastSection;
