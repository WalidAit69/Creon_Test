import React from "react";
import TokenCard from "../Widgets/TokenCard";

const Data = [
  {
    title: "token",
    description: "The Gateway token to the world of AI",
    image: "https://ucarecdn.com/ed474528-78e8-444e-bc23-3dffe118acbe/",
    content:
      "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
  },
  {
    title: "revenue",
    description: "Driving income and growth through decentralization",
    image: "https://ucarecdn.com/43274ad6-34a0-4f3e-a888-37142a12f10e/",
    content:
      "As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.",
  },
  {
    title: "Launchpad",
    description: "Driving the future of AI Innovation",
    content:
      "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    image: "https://ucarecdn.com/0526931d-ada3-49dd-8b31-2f08d5c71152/",
  },
];

function ComingSoon() {
  return (
    <section className="py-[5rem] lg:overflow-hidden overflow-x-scroll scrollbar">
      <div className="xl:w-[75%] w-[90%] mx-auto flex lg:justify-between gap-5">
        {Data &&
          Data.map((Card, index) => <TokenCard key={index} Card={Card} />)}
      </div>
    </section>
  );
}

export default ComingSoon;
