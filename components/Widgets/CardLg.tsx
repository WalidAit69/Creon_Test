import Image from "next/image";
import React from "react";

interface Card {
  title: string;
  image: string;
  content: string;
}

function CardLg({ Card }: { Card: Card }) {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#0c0d11] bg-opacity-70 text-white relative max-md:min-w-[400px] max-sm:min-w-[100%]">
      <div className="md:w-[70%] max-md:h-1/2 md:py-10 pmd:x-10 py-5 px-5 flex flex-col gap-2">
        <h3 className="font-Monument xl:text-[2vw] md:text-[2.2vw] sm:text-[1.1rem] text-[1rem]">
          {Card.title}
        </h3>
        <span className="font-Satoshi xl:text-[.95vw] md:text-[1.2vw] sm:text-[.8rem] text-[.79rem] opacity-90">
          {Card.content}
        </span>
      </div>

      <div className="md:w-[30%] w-full max-md:h-1/2 relative">
        <Image
          src={Card.image}
          width={200}
          height={200}
          alt="card"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-600 mix-blend-overlay"></div>
      </div>
    </div>
  );
}

export default CardLg;
