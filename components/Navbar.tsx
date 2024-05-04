import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";

function Navbar() {
  return (
    <header className="z-[9999] absolute flex items-center justify-between w-[95%] left-1/2 -translate-x-1/2 top-[20px] font-Satoshi p-3">
      <Image src={logo} alt="logo" width={140} />

      <nav className="flex items-center gap-20 text-white">
        <ul className="flex items-center gap-10 font-[700] text-[1.05rem]">
          <li>
            <a href="#">Creon Pass</a>
          </li>
          <li className="flex items-start gap-1">
            <a href="#">Token</a>
            <span className="bg-black text-[#ab23ff] text-[.65rem] rounded-full px-1">
              SOON
            </span>
          </li>
          <li className="flex items-start gap-1">
            <a href="#">AI Revenue</a>
            <span className="bg-black text-[#ab23ff] text-[.65rem] rounded-full px-1">
              SOON
            </span>
          </li>
          <li className="flex items-start gap-1">
            <a href="#">AI Launchpad</a>
            <span className="bg-black text-[#ab23ff] text-[.65rem] rounded-full px-1">
              SOON
            </span>
          </li>
        </ul>
        <button className="border-2 rounded-[.2rem] py-2 px-8 font-[700] text-[1.05rem]">
          Connect
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
