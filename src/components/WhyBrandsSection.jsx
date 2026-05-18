import React from "react";
import { motion } from "framer-motion";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiCursorClickBold } from "react-icons/pi";
import { TbPencilBolt } from "react-icons/tb";

const WhyBrandsSection = () => {
  const cards = [
    {
      icon: "$",
      title: "Designs that convert",
      desc: "Built for today, flexible for what’s next.",
      bg: "bg-[#f7f7f7]",
    },
    {
      icon: <TbPencilBolt />,
      title: "Thoughtful, not trendy",
      desc: "Our work is grounded in purpose, not passing fads.",
      bg: "bg-[#f7f7f7]",
    },
    {
      icon: <BsLightningChargeFill />,
      title: "Fast without the fuss",
      desc: "A streamlined process. quick, clean, no chaos.",
      bg: "bg-[#f7f7f7]",
    },
  ];

  return (
    <section className="w-full py-28 bg-[#ffffff] overflow-hidden">
      {/* HEADING */}

      <div className="text-center mb-20 px-6">
        <h2 className="text-5xl md:text-7xl font-semibold leading-none">
          <span className="text-[#8f9ad6]">Why Brands Keep</span>

          <br />

          <span className="text-[#111827]">Coming Back.</span>
        </h2>
      </div>

      {/* CARDS */}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: false }}
            className="
             bg-gradient-to-br
from-[#b8c2ef]
via-[#c6d1ff]
to-[#dfe7ff]

rounded-[32px]

border border-white/20
backdrop-blur-xl
              overflow-hidden
              shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              hover:-translate-y-3
hover:shadow-[0_20px_100px_rgba(127,141,232,0.25)]
              transition-all duration-500
            "
          >
            {/* TOP VISUAL */}

            <div
              className="
                h-[260px]
                flex items-center justify-center
                relative overflow-hidden
                bg-[#ffffff]
              "
            >
              {/* GRID FOR LAST CARD */}

              {index === 2 && (
                <div
                  className="
                    absolute inset-0
                    opacity-40
                    bg-[linear-gradient(to_right,#b8c2ef_1px,transparent_1px),linear-gradient(to_bottom,#b8c2ef_1px,transparent_1px)]
                    bg-[size:20px_20px]
                  "
                />
              )}

              {/* ICONS */}

              {index === 0 && (
                <div
                  className="
                    text-[120px]
                    font-semibold
                    text-[#111827]
                    drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]
                  "
                >
                  $
                </div>
              )}

              {index === 1 && (
                <div
                  className="
                    relative
                    w-[240px]
                    h-[150px]
                    rounded-[24px]
                    bg-black
                    rotate-[-8deg]
                    shadow-2xl
                    flex items-center justify-center
                  "
                >
                  <TbPencilBolt className="text-white text-7xl" />
                </div>
              )}

              {index === 2 && (
                <>
                  <div
                    className="
                      w-32 h-32
                      rounded-full
                      bg-black
                      flex items-center justify-center
                      shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                      z-10
                    "
                  >
                    <BsLightningChargeFill className="text-white text-5xl" />
                  </div>

                  {/* FLOATING CURSORS */}

                  <PiCursorClickBold className="absolute top-12 left-12 text-3xl text-[#111827] rotate-12" />

                  <PiCursorClickBold className="absolute bottom-14 right-12 text-3xl text-[#111827] -rotate-12" />

                  <PiCursorClickBold className="absolute top-16 right-16 text-3xl text-[#111827] rotate-45" />
                </>
              )}
            </div>

            {/* CONTENT */}

            <div className="p-8">
              <h3 className="text-3xl font-semibold text-[#111827] mb-4 leading-tight">
                {card.title}
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyBrandsSection;
