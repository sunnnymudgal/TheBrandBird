import React from "react";
import { FaDiceD6 } from "react-icons/fa";
import { FaFeather } from "react-icons/fa6";

function Loader() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white gap-4 sm:gap-6">

      <FaDiceD6 className="text-5xl sm:text-6xl md:text-7xl animate-spin text-black" />

      <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">

        <span>TheBrandBird</span>

        <span className="text-[#2b90bc] text-xl sm:text-2xl md:text-3xl">
          <FaFeather />
        </span>

      </div>

    </div>
  );
}

export default Loader;