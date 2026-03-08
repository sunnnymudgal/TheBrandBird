import React from "react";
import { motion } from "framer-motion";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden font-[roboto]">
      <div className="absolute inset-0 bg-[url('/images/heroBg.jpg')] bg-cover bg-center blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,

          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex items-center justify-center px-4 text-white"
      >
        <div className="w-full max-w-5xl flex items-center justify-center flex-col gap-4 text-center py-20">
          <div className="font-light flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              Elegant Experiences,
            </div>

            <div className="flex items-center gap-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              <div className="w-10 sm:w-12 md:w-16 h-1 bg-white rounded-sm"></div>
              Built for Impact
            </div>
          </div>

          <div className="font-light text-base sm:text-md md:text-lg lg:text-xl max-w-3xl">
            We craft powerful digital identities for businesses —from logo
            design and motion graphics to websites, company profiles, and
            beyond.
          </div>

          <div className="group flex cursor-pointer text-lg items-center justify-center gap-2 w-fit text-white  px-6 py-3 mt-1 rounded-xl font-[josefin] font-light overflow-hidden">
            <div className="relative h-8 overflow-hidden">
              <Link to="/about">
                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                  <span>Learn More</span>
                  <span>Learn More</span>
                </div>
              </Link>
            </div>

            <div className="transition-transform duration-500 group-hover:translate-x-1 text-2xl">
              <CiLocationArrow1 />
            </div>
          </div>

          <div className="overflow-hidden w-full py-6">
            <motion.div
              className="flex w-max gap-8 text-lg sm:text-xl md:text-2xl font-[monoserrat]"
              animate={{ x: [0, -1000] }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  <span>Brand</span>
                  <span>Identity</span>
                  <span>Strategy</span>
                  <span>Creative</span>
                  <span>Growth</span>
                  <span>Precision</span>
                  <span>Authority</span>
                  <span>Momentum</span>
                  <span>Impact</span>
                  <span>Performance</span>
                  <span>Innovation</span>
                  <span>Expertise</span>
                  <span>Execution</span>
                  <span>Intelligence</span>
                  <span>Insights</span>
                  <span>Optimization</span>
                  <span>Transformation</span>
                  <span>Visibility</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Main;
