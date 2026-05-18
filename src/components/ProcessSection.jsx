import React from "react";
import { motion } from "framer-motion";

function ProcessSection() {
  return (
    <section className="w-full pb-28 bg-[#ffffff] overflow-hidden">
      {/* HEADING */}

      <div className="text-center mb-24 px-6">
        <p className="uppercase tracking-[6px] text-[#6f7de0] font-semibold mb-5">
          Process
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-[#111827] leading-[0.95]">
          How TheBrandBird
          <br />
          Works
        </h2>
      </div>

      {/* CARDS */}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* CARD 1 */}

        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
          className="
            relative
            overflow-hidden

            bg-gradient-to-br
            from-[#b8c2ef]
            via-[#c6d1ff]
            to-[#dfe7ff]

            rounded-[40px]
            p-10
            min-h-[380px]

            border border-white/20

            shadow-[0_20px_80px_rgba(0,0,0,0.10)]

            hover:shadow-[0_20px_100px_rgba(127,141,232,0.22)]

            transition-all duration-500
          "
        >
          {/* BLUR */}

          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-white/20 blur-[90px]" />

          {/* TOP PILL */}

          <div className="relative mb-24">
            <div
              className="
                inline-flex
                items-center
                gap-3

                bg-[#6f7de0]

                px-7
                py-4

                rounded-full

                shadow-lg
              "
            >
              <span className="w-3 h-3 bg-white rounded-full"></span>

              <span className="font-medium text-white">
                Discovery Call
              </span>
            </div>
          </div>

          {/* CONTENT */}

          <div className="relative">
            <p className="text-sm tracking-[3px] text-[#111827]/50 font-semibold mb-5">
              STEP 1
            </p>

            <h3 className="text-3xl font-bold text-[#111827] leading-snug">
              Let&apos;s understand your vision,
              brand goals, and business identity.
            </h3>
          </div>
        </motion.div>

        {/* CARD 2 */}

        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
          className="
            relative
            overflow-hidden

            bg-gradient-to-br
            from-[#b8c2ef]
            via-[#c6d1ff]
            to-[#dfe7ff]

            rounded-[40px]
            p-10
            min-h-[380px]

            border border-white/20

            shadow-[0_20px_80px_rgba(0,0,0,0.10)]

            hover:shadow-[0_20px_100px_rgba(127,141,232,0.22)]

            transition-all duration-500
          "
        >
          {/* BLUR */}

          <div className="absolute bottom-[-80px] left-[-80px] w-[220px] h-[220px] rounded-full bg-white/20 blur-[90px]" />

          {/* CHAT MOCKUP */}

          <div className="relative flex flex-col gap-4 mb-16">
            <div
              className="
                bg-white/40
                backdrop-blur-xl

                border border-white/20

                rounded-2xl
                p-4

                w-fit

                shadow-md
              "
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/50"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-sm text-[#111827]">
                    Brand Strategy
                  </p>

                  <p className="text-xs text-[#374151]">
                    Design Planning
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                bg-white/60
                backdrop-blur-xl

                border border-white/20

                rounded-2xl
                p-4

                shadow-lg

                w-fit

                ml-10
              "
            >
              <p className="text-[#374151] text-sm leading-relaxed">
                We craft your website,
                visuals, motion graphics,
                and digital presence.
              </p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="relative">
            <p className="text-sm tracking-[3px] text-[#111827]/50 font-semibold mb-5">
              STEP 2
            </p>

            <h3 className="text-3xl font-bold text-[#111827] leading-snug">
              Creative execution with
              modern design systems and
              business-focused visuals.
            </h3>
          </div>
        </motion.div>

        {/* CARD 3 */}

        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
          className="
            relative
            overflow-hidden

            bg-gradient-to-br
            from-[#b8c2ef]
            via-[#c6d1ff]
            to-[#dfe7ff]

            rounded-[40px]
            p-10
            min-h-[380px]

            border border-white/20

            shadow-[0_20px_80px_rgba(0,0,0,0.10)]

            hover:shadow-[0_20px_100px_rgba(127,141,232,0.22)]

            transition-all duration-500
          "
        >
          {/* BLUR */}

          <div className="absolute top-[-80px] left-[-80px] w-[220px] h-[220px] rounded-full bg-white/20 blur-[90px]" />

          {/* GRAPH */}

          <div className="relative flex items-end gap-5 h-44 mb-16">
            <div className="w-12 h-20 bg-white/40 rounded-full"></div>

            <div className="w-12 h-28 bg-white/40 rounded-full"></div>

            <div
              className="
                w-12
                h-44

                bg-[#6f7de0]

                rounded-full

                shadow-[0_10px_40px_rgba(111,125,224,0.5)]
              "
            ></div>

            <div className="w-12 h-24 bg-white/40 rounded-full"></div>
          </div>

          {/* CONTENT */}

          <div className="relative">
            <p className="text-sm tracking-[3px] text-[#111827]/50 font-semibold mb-5">
              STEP 3
            </p>

            <h3 className="text-3xl font-bold text-[#111827] leading-snug">
              Launch your brand with
              confidence and scale your
              online presence.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;