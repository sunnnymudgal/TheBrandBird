import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// IMAGES
import bikeImg from "../assets/bike.png";
import coffeeImg from "../assets/coffee.png";

// PROJECT DATA
const projects = [
  {
    id: "01",
    title: "BirdCycles",
    subtitle: "Premium Urban Mobility",
    description:
      "A futuristic bike showcase designed with immersive layouts, premium typography, and smooth product presentation for modern urban mobility.",

    image: bikeImg,

    tech: ["React", "TailwindCSS", "Framer Motion"],

    bg: "bg-[#9ea8d8]",

    link: "https://showcase-concept.vercel.app/",
  },

  {
    id: "02",
    title: "Black Drip Coffee",
    subtitle: "Minimal Coffee Experience",
    description:
      "A modern coffee landing page focused on storytelling, minimal layouts, clean typography, and immersive product-focused visuals.",

    image: coffeeImg,

    tech: ["React", "TailwindCSS", "Framer Motion"],

    bg: "bg-[#aebedf]",

    link: "https://blackdripcoffee.vercel.app",
  },
];

const ProjectCard = () => {
  return (
    <section className="w-full bg-[#ffffff] py-24 px-4 md:px-8 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-24">
        <p className="uppercase tracking-[6px] text-black/50 text-sm mb-4">
          TheBrandBird Projects
        </p>

        <h1 className="text-5xl md:text-8xl font-black text-[#111827] leading-none">
          Selected
          <br />
          Work.
        </h1>
      </div>

      {/* PROJECTS */}
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 rounded-[40px] overflow-hidden border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.18)] ${
              project.bg
            }`}
          >
            {/* LEFT */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <h1 className="text-[90px] md:text-[140px] font-black leading-none text-white/20">
                {project.id}
              </h1>

              <p className="uppercase tracking-[5px] text-sm text-black/50 mb-4">
                {project.subtitle}
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-[#111827] leading-tight mb-6">
                {project.title}
              </h2>

              <p className="text-[#1f2937]/80 text-lg leading-relaxed max-w-xl mb-10">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-5 py-2 rounded-full bg-black/10 border border-black/10 text-sm font-medium text-[#111827] backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

             <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      group
      w-fit
      px-8
      py-4
      rounded-full

      bg-[#111827]
      text-white

      flex
      items-center
      gap-3

      hover:scale-105

      transition-all
      duration-300
    "
  >
    View Project

    <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
  </button>
</a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="p-6 md:p-8 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-[30px] overflow-hidden border border-white/20 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full  object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;