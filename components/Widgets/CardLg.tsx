import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Card {
  title: string;
  image: string;
  content: string;
}

function CardLg({ Card }: { Card: Card }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="flex bg-[#0c0d11] bg-opacity-70 text-white relative"
    >
      <div className="w-[70%] py-10 px-10 flex flex-col gap-2">
        <h3 className="font-Monument text-[2rem]">{Card.title}</h3>
        <span className="font-Satoshi">{Card.content}</span>
      </div>

      <div className="w-[30%] relative">
        <Image
          src={Card.image}
          width={200}
          height={200}
          alt="card"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-600 mix-blend-overlay"></div>
      </div>
    </motion.div>
  );
}

export default CardLg;
