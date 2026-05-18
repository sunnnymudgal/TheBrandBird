import React, { useState } from "react";
import Nav from "./Nav";
import { CiLocationArrow1 } from "react-icons/ci";
import Foooter from "./Foooter";
import { motion } from "framer-motion";
import Contact from "./Contact";
import ProjectCard from "./ProjectCard";

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
        className="px-5 sm:px-7 md:px-12 lg:px-20 mb-28"
      >
       <div className="mt-20 sm:mt-28">
  {/* SMALL LABEL */}
  <div
    className="
      uppercase

      tracking-[8px]

      text-sm
      sm:text-base

      font-medium

      text-[#111827]/50
    "
  >
    Selected Work
  </div>

  {/* HEADING */}
  <div
    className="
      mt-8

      text-4xl
      sm:text-5xl
      md:text-6xl
      lg:text-7xl

      font-black

      leading-[0.95]

      tracking-tight

      text-[#111827]
    "
  >
    <div>
      The Magic
      <span className="text-[#6f7de0]"> We&apos;ve </span>
      Made
    </div>

    <div className="mt-3 text-[#111827]/80">
      Let our portfolio inspire you.
    </div>
  </div>

  {/* DESCRIPTION */}
  <div
    className="
      mt-8

      text-lg
      sm:text-xl
      md:text-2xl

      text-[#374151]

      w-full
      md:w-4/5
      lg:w-2/3

      leading-relaxed
    "
  >
    A curated collection of immersive experiences,
    premium interfaces, and modern digital stories
    crafted to elevate brands and create meaningful
    impact.
  </div>

  {/* DECORATIVE LINE */}
  <div
    className="
      mt-10

      w-32
      h-[4px]

      rounded-full

      bg-gradient-to-r
      from-[#8f9ad6]
      to-[#6f7de0]
    "
  />
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
      <ProjectCard/>
      <motion.div
      
      >
        <div
  className="
    flex
    flex-col
    mt-[10vh]
    lg:flex-row

    gap-16

    items-center
    justify-center

    w-full

    px-6
    sm:px-10
    md:px-16
    lg:px-24

    py-24

    bg-[#ffffff]
  "
>
  {/* IMAGE */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.4 }}
    className="
      relative

      h-[300px]
      w-[250px]

      sm:h-[380px]
      sm:w-[320px]

      md:h-[460px]
      md:w-[380px]

      lg:h-[540px]
      lg:w-[440px]

      overflow-hidden

      rounded-[32px]

      border border-white/20

      shadow-[0_20px_80px_rgba(0,0,0,0.16)]
    "
  >
    <div
      className='
        h-full
        w-full

        bg-[url("/images/penguin.jpg")]
        bg-cover
        bg-center
      '
    />

    {/* PREMIUM OVERLAY */}
    <div
      className="
        absolute
        inset-0

        bg-gradient-to-t
        from-[#111827]/20
        via-transparent
        to-white/10
      "
    />

    {/* BLUR LIGHT */}
    <div
      className="
        absolute
        top-[-80px]
        right-[-80px]

        w-[220px]
        h-[220px]

        rounded-full

        bg-white/20

        blur-[100px]
      "
    />
  </motion.div>

  {/* TEXT */}
  <div className="max-w-2xl flex flex-col gap-7 text-center lg:text-left">
    <p className="uppercase tracking-[6px] text-sm text-[#111827]/50">
      FOR THE DREAMERS
    </p>

    <h2
      className="
        text-4xl
        sm:text-5xl
        lg:text-7xl

        font-black

        leading-[0.95]

        text-[#111827]
      "
    >
      Not All
      <br />
      Explorers
      <br />
      Climb Mountains.
    </h2>

    <p
      className="
        text-2xl

        font-medium

        text-[#6f7de0]
      "
    >
      Some build brands.
    </p>

    <p
      className="
        text-[#374151]

        text-base
        sm:text-lg

        leading-relaxed

        max-w-xl
      "
    >
      TheBrandBird exists for the dreamers, the builders,
      and the ones brave enough to take the first step.
      We create meaningful digital experiences that inspire
      connection, creativity, and lasting impact.
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
