import React, { useEffect, useState } from "react";
import Main from "./Main";
import Nav from "./Nav";
import { motion, useScroll, useTransform } from "framer-motion";
import Foooter from "./Foooter";
import Approach from "./Approach";
import { CiLocationArrow1 } from "react-icons/ci";

import Contact from "./Contact";
import StatsSection from "./StatsSection";
// import ProcessSection from "./ProcessSection";
import WhyBrandsSection from "./WhyBrandsSection";

function Card() {
  const { scrollY } = useScroll();
  const [initialWidth, setInitialWidth] = useState("40rem");
  const [showContact, setShowContact] = useState(false);


  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth <= 768) {
        setInitialWidth("80rem");
      } else {
        setInitialWidth("50rem");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const width = useTransform(scrollY, [3, 400], [initialWidth, "100%"]);

  return (
    <div className="relative bg-[#4290b2]">
      {showContact && <Contact onClose={() => setShowContact(false)} />}

      <div className="z-50 sticky top-0">
        <Nav />
      </div>
      <div className="sticky h-screen top-[10vh] w-full ">
        <Main />
      </div>

      <div className="h-fit flex justify-center items-center relative z-0">
        <motion.div
          style={{ width }}
          className="h-fit bg-[#ffffff] rounded-xl relative"
        >
          <Approach />
          <WhyBrandsSection/>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div className="w-full min-h-screen bg-white flex items-center">
              <div className="flex flex-col lg:flex-row gap-12 items-center justify-center w-full px-6 sm:px-10 md:px-16">
                <div className="relative h-[300px] w-[260px] sm:h-[380px] sm:w-[320px] md:h-[450px] md:w-[380px] lg:h-[500px] lg:w-[420px] overflow-hidden rounded-xl">
                  <div className='h-full w-full bg-[url("/images/monkey.jpg")] bg-cover bg-center'></div>
                </div>

                <div className="max-w-xl flex flex-col gap-6 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[monoserrat]">
                    Some Bonds Last Forever.
                  </h2>

                  <p className="text-base sm:text-lg text-gray-600 font-[josefin] leading-relaxed">
                    The strongest journeys are built on trust, loyalty, and the
                    bonds we choose to carry with us. At TheBrandBird, we
                    believe great ideas grow through meaningful connections.
                  </p>

                  <div  onClick={() => setShowContact(true)} className="text-gray-600 font-[josefin] flex items-center gap-2 cursor-pointer text-lg sm:text-xl justify-center lg:justify-start hover:text-emerald-600 transition">
                    <span>Let's get connected.</span>

                    <CiLocationArrow1 />
                  </div>
                </div>
              </div>
            </div>

            <StatsSection/>
          </motion.div>
          <Foooter />
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
