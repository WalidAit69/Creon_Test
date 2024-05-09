'use client'

import Image from "next/image";
import React from "react";

interface Card {
  title: string;
  description: string;
  image: string;
  content: string;
}

function TokenCard({ Card }: { Card: Card }) {
  return (
    <div className="text-white bg-[#0c0d11] lg:w-[30vw] max-lg:min-w-[400px] max-sm:min-w-[100%] pb-10 pt-7 xl:min-h-[650px] min-h-[600px] relative">
      <div className="mx-5 flex flex-col gap-0 sm:h-[160px] h-[115px]">
        <h4 className="font-Monument xl:text-[2.2vw] sm:text-[2rem] text-[1.7rem] uppercase">
          {Card.title}
        </h4>
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent xl:text-[1.2vw] sm:text-[1.35rem] text-[1.2rem] font-Satoshi font-[900] max-w-[90%]">
          {Card.description}
        </span>
      </div>

      <div className="w-[94%] rounded-tr-2xl rounded-br-lg overflow-hidden">
        <Image
          src={Card.image}
          alt="card"
          width={200}
          height={200}
          className="w-full object-cover hover:scale-[1.15] transition-all duration-300"
        />
      </div>

      <p className="ml-5 sm:mt-8 mt-7 max-w-[90%] font-Satoshi text-lg">
        {Card.content}
      </p>

      <div className="absolute right-[5%] -top-[10px] bg-white rounded-full flex items-center justify-center h-5">
        <span className="text-black font-Satoshi text-xs font-bold px-2 uppercase">
          coming soon
        </span>
      </div>
    </div>
  );
}

export default TokenCard;
