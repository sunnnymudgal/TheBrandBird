import React, { useState } from "react";
import Nav from "./Nav";
import { CiLocationArrow1 } from "react-icons/ci";
import Foooter from "./Foooter";
import { motion } from "framer-motion";
import Contact from "./Contact";

function WorkPage() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="relative min-h-screen w-full ">
      {showContact && <Contact onClose={() => setShowContact(false)} />}
      <div className="sticky top-0 z-30">
        <Nav />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,

          ease: [0.22, 1, 0.36, 1],
        }}
        className="px-5 sm:px-7 md:px-12 lg:px-20"
      >
        <div className="font-[josefin] mt-16 sm:mt-20 text-sm sm:text-base tracking-widest">
          WORK
        </div>

        <div className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-extrabold leading-tight">
          <div>The Magic We've Made</div>
          <div className="mt-2">Let our portfolio inspire you</div>
        </div>

        <div
          className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl 
                                w-full md:w-4/5 lg:w-2/3 leading-relaxed"
        >
          A look at the captivating designs, seamless functionality, and brand
          stories brought to life through our digital magic.
        </div>

        <div
          className="group flex cursor-pointer 
                                text-base sm:text-lg md:text-xl lg:text-2xl
                                items-center justify-center lg:justify-start 
                                gap-2 w-fit 
                                py-3 mt-8 pr-2 rounded-xl font-light 
                                overflow-hidden mx-auto lg:mx-0"
          onClick={() => setShowContact(true)}
        >
          <div className="relative h-7 overflow-hidden">
            <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
              <span>Let's Collaborate</span>
              <span>Let's Collaborate</span>
            </div>
          </div>

          <div className="transition-transform duration-500 group-hover:translate-x-1">
            <CiLocationArrow1 />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        viewport={{ once: false }}
      >
        <div className="flex flex-col mt-[10vh] lg:flex-row gap-12 items-center justify-center w-full px-6 sm:px-10 md:px-16 lg:px-24 py-24">
          <div
            className="relative 
  h-[280px] w-[240px] 
  sm:h-[360px] sm:w-[300px] 
  md:h-[420px] md:w-[360px] 
  lg:h-[500px] lg:w-[420px] 
  overflow-hidden rounded-xl"
          >
            <div className='h-full w-full bg-[url("/images/penguin.jpg")] bg-cover bg-center'></div>

            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
          </div>

          <div className="max-w-xl flex flex-col gap-5 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[monoserrat] leading-tight">
              Not All Explorers Climb Mountains.
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 font-[josefin]">
              Some build brands.
            </p>

            <p className="text-gray-600 font-[josefin] text-base sm:text-lg leading-relaxed">
              TheBrandBird exists for the dreamers, the builders, and the ones
              brave enough to take the first step.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mt-16">
        <Foooter />
      </div>
    </div>
  );
}

export default WorkPage;
