import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import border from "@/public/images/border-icon.webp";
import { motion } from "framer-motion";

interface Props {
  icon: string;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function DropDown({ icon, title, content, isOpen, onToggle }: Props) {
  const [hover, sethover] = useState(false);
  const divref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      sethover(true);
    };

    const handleMouseLeave = () => {
      sethover(false);
    };

    divref.current?.addEventListener("mouseenter", handleMouseEnter);

    divref.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      divref.current?.removeEventListener("mouseenter", handleMouseEnter);
      divref.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={divref}
      onClick={onToggle}
      className="relative w-full pb-5 cursor-pointer border-b-[1px] border-[#13171d] font-Satoshi transition-all"
    >
      <div className="flex items-center gap-5">
        <div className="w-28 h-28 relative">
          <Image
            src={border}
            alt="border"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.5rem] h-[4.5rem]"
            width="68"
            height="76"
            viewBox="0 0 68 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="styles_polygon__wAADA transition-all duration-300"
              d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z"
              fill={`${isOpen ? "#ffff" : "#13171D"}`}
            ></path>
            <path
              d="M6 26.0366C6 23.8543 7.18486 21.8441 9.0941 20.7872L31.0941 8.60862C32.9021 7.60777 35.0979 7.60777 36.9059 8.60862L58.9059 20.7872C60.8151 21.8441 62 23.8543 62 26.0366V49.9634C62 52.1457 60.8151 54.1559 58.9059 55.2128L36.9059 67.3914C35.0979 68.3922 32.9021 68.3922 31.0941 67.3914L9.0941 55.2128C7.18486 54.1559 6 52.1457 6 49.9634V26.0366Z"
              fill="#2a2e33"
            ></path>
          </svg>

          <Image
            src={icon}
            alt="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            width={20}
            height={20}
          />
        </div>

        <div className="w-full">
          <h4
            className={`w-[80%] text-[1.4rem] font-[600] transition-all duration-300 ${
              hover && !isOpen && "text-[#4285F4]"
            }`}
          >
            {title}
          </h4>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        >
          <path
            d="M1 1L7 7L13 1"
            stroke={`${hover && !isOpen ? "#4285F4" : "#fff"}`}
            strokeWidth="1.5"
          ></path>
        </svg>
      </div>

      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "fit-content" }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="ml-16 mt-5"
        >
          {content}
        </motion.p>
      )}
    </div>
  );
}

export default DropDown;
