import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFeather } from "react-icons/fa6";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      {showContact && <Contact onClose={() => setShowContact(false)} />}

      <div className="relative bg-[#FDFDF7] flex items-center justify-between px-10 py-5 max-md:px-7 font-semibold shadow-lg h-[10vh] z-9999">
        <div className="text-2xl max-md:text-xl flex items-center gap-2">
          <div>TheBrandBird </div>
          <div className="text-2xl max-md:text-xl text-[#2b90bc]">
            <FaFeather />
          </div>
        </div>

        <div className="flex items-center gap-20 text-xl font-[josefin] font-light max-md:hidden">
          <Link to="/">
            <div className="cursor-pointer">Home</div>
          </Link>
          <Link to="/work">
            <div className="cursor-pointer">Work</div>
          </Link>
          <Link to="/about">
            <div className="cursor-pointer">About</div>
          </Link>
        </div>

        <div
          onClick={() => setShowContact(true)}
          className="relative text-xl font-light h-12 w-44 text-white font-[monoserrat] bg-[#4a96c8] rounded-3xl group overflow-hidden cursor-pointer max-md:hidden"
        >
          <div className="absolute top-1 left-0 text-2xl bg-[#2a5570] h-10 w-10 flex items-center justify-end px-2 rounded-full transition-all duration-700 group-hover:w-full group-hover:h-full group-hover:top-0">
            <IoMdArrowForward />
          </div>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 transition-all duration-700 group-hover:-translate-x-5">
            Book a Call
          </div>
        </div>

        <div
          className="md:hidden flex flex-col gap-2 cursor-pointer z-40"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`h-1 w-8 bg-black transition-all duration-500 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-8 bg-black transition-all duration-500 ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></div>
        </div>
      </div>

      <div
        className={`md:hidden z-20 absolute  bg-white flex flex-col items-center justify-center gap-8 text-xl font-light font-[josefin] transition-all duration-500 overflow-hidden ${
          isMenuOpen
            ? "w-full h-[60vh] top-[10vh] right-0"
            : "h-0 right-0 top-8 w-0"
        }`}
      >
        <Link to="/">
          <div className="cursor-pointer">Home</div>
        </Link>
        <Link to="/work">
          <div className="cursor-pointer">Work</div>
        </Link>
        <Link to="/about">
          <div className="cursor-pointer">About</div>
        </Link>

        <div
          onClick={() => {
            setShowContact(true);
            setIsMenuOpen(false);
          }}
          className="border border-black px-6 py-2 rounded-xl cursor-pointer"
        >
          Book a Call
        </div>
      </div>
    </div>
  );
}

export default Nav;
