import React from "react";
import classNames from "classnames";

interface Props {
  MenuOpen: boolean;
  handleMenuClick: () => void;
}

function MenuBtn({ MenuOpen, handleMenuClick }: Props) {
  return (
    <div className="items-center justify-center flex xl:hidden">
      <button
        className={classNames(
          "relative sm:w-10 w-8 sm:h-10 h-8 rounded-md transform transition-all duration-300",
          {
            "bg-blue-500": MenuOpen,
            "bg-white": !MenuOpen,
          }
        )}
        onClick={handleMenuClick}
      >
        <div
          className={classNames(
            "sm:w-6 w-4 h-[2px] transition-all duration-300 absolute left-1/2",
            {
              "top-[50%] -translate-y-1/2 -translate-x-1/2 rotate-45 bg-white":
                MenuOpen,
              "top-[25%] -translate-x-1/2 rotate-0 translate-y-0 bg-black":
                !MenuOpen,
            }
          )}
        ></div>
        <div
          className={classNames(
            "sm:w-6 w-4 h-[2px] transition-all duration-300 absolute left-1/2",
            {
              "opacity-0 bg-white": MenuOpen,
              "top-[45%] -translate-x-1/2 opacity-100 bg-black": !MenuOpen,
            }
          )}
        ></div>
        <div
          className={classNames(
            "sm:w-6 w-4 h-[2px] transition-all duration-300 absolute left-1/2",
            {
              "top-[50%] -translate-y-1/2 -translate-x-1/2 -rotate-45 bg-white":
                MenuOpen,
              "top-[65%] -translate-x-1/2 rotate-0 translate-y-0 bg-black":
                !MenuOpen,
            }
          )}
        ></div>
      </button>
    </div>
  );
}

export default MenuBtn;
