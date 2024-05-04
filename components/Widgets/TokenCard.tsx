import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  description: string;
  image: string;
  content: string;
}

function TokenCard({ Card }: { Card: Card }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="text-white bg-[#0c0d11] w-[450px] pb-10 pt-7 min-h-[650px] relative"
    >
      <div className="ml-5 flex flex-col gap-3 mb-12 h-[100px]">
        <h4 className="font-Monument text-4xl uppercase">{Card.title}</h4>
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-xl font-Satoshi font-[900] max-w-[90%]">
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

      <p className="ml-5 mt-8 max-w-[90%] font-Satoshi">{Card.content}</p>

      <div className="absolute right-[5%] -top-[10px] bg-white rounded-full flex items-center justify-center h-5">
        <span className="text-black font-Satoshi text-xs font-bold px-2 uppercase">
          coming soon
        </span>
      </div>
    </motion.div>
  );
}

export default TokenCard;
