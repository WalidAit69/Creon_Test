import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="text-white xl:w-[75%] w-[90%] mx-auto flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between font-Satoshi py-10">
        <div className="flex items-center md:flex-row flex-col-reverse gap-8 md:gap-0 justify-between lg:w-[500px] md:w-[400px] text-center">
          <span className="opacity-90 lg:text-base text-sm max-md:text-[1.1rem]">
            © Creon 2023. All rights reserved.
          </span>
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
                className="lg:w-[17px] lg:h-[17px] w-3 h-3 max-md:h-5 max-md:w-5"
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
                className="lg:w-[17px] lg:h-[17px] w-3 h-3 max-md:h-5 max-md:w-5"
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
                className="lg:w-[17px] lg:h-[17px] w-3 h-3 max-md:h-5 max-md:w-5"
              />
            </a>
          </div>
        </div>

        <a
          href="#"
          className="font-Monument uppercase cursor-pointer h2-hover transition-all duration-300 text-sm lg:text-base max-md:text-[1.1rem]"
        >
          <span className="opacity-90 font-Satoshi capitalize duration-0 text-white">
            Powered by
          </span>{" "}
          niftables
        </a>
      </div>
    </footer>
  );
}

export default Footer;
