import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="text-white w-[75%] mx-auto flex items-center justify-between font-Satoshi py-10"
      >
        <div className="flex items-center justify-between w-[32%]">
          <span className="opacity-90">© Creon 2023. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="border-[2px] border-white rounded-full p-[.4rem] hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300"
            >
              <Image
                src="https://ucarecdn.com/fd6e87bb-c183-442c-9286-16c117b84169/"
                alt="telegram"
                width={17}
                height={17}
              />
            </a>

            <a
              href="#"
              className="border-[2px] border-white rounded-full p-[.4rem] hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300"
            >
              <Image
                src="https://ucarecdn.com/36e37a29-ec23-4f05-a5ce-3e9510ff5182/"
                alt="discord"
                width={17}
                height={17}
              />
            </a>

            <a
              href="#"
              className="border-[2px] border-white rounded-full p-[.4rem] hover:bg-[#4285F4] hover:border-[#4285F4] transition-all duration-300"
            >
              <Image
                src="https://ucarecdn.com/726453d9-c606-4d30-a627-fa39d8837c63/"
                alt="twitter"
                width={17}
                height={17}
              />
            </a>
          </div>
        </div>

        <a
          href="#"
          className="font-Monument uppercase cursor-pointer h2-hover transition-all duration-300"
        >
          <span className="opacity-90 font-Satoshi capitalize duration-0 text-white">
            Powered by
          </span>{" "}
          niftables
        </a>
      </motion.div>
    </footer>
  );
}

export default Footer;
