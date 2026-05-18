import React from "react";

const stats = [
  {
    number: "8+",
    description:
      "Years building digital-first brands and scalable web platforms across industries.",
  },
  {
    number: "120+",
    description:
      "Projects shipped — branding, UI/UX, web development, and growth marketing.",
  },
  {
    number: "35+",
    description:
      "Long-term partners who trust TheBrandBird with their ongoing digital growth.",
  },
  {
    number: "99%",
    description:
      "Client satisfaction — backed by premium support, clean execution, and on-time delivery.",
    highlight: true,
  },
];

const StatsSection = () => {
  return (
    <section className="w-full py-28 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT CARD */}
          <div
            className="
              relative
              overflow-hidden
              bg-gradient-to-br
              from-[#8f9ad6]
              via-[#7f8de8]
              to-[#6f7de0]

              text-white
              rounded-[32px]
              p-8
              min-h-[420px]

              flex
              flex-col
              justify-between

              lg:row-span-2

              border border-white/10

              shadow-[0_20px_80px_rgba(0,0,0,0.18)]
            "
          >
            {/* BLUR */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-white/10 blur-[100px]" />

            <div className="relative">
              <span
                className="
                  inline-block
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-widest

                  text-white

                  bg-white/10
                  border border-white/10

                  px-4
                  py-2
                  rounded-full
                  mb-6
                  backdrop-blur-xl
                "
              >
                Founder&apos;s Note
              </span>

              <h2 className="text-[30px] md:text-[36px] font-black leading-tight mb-6">
                I&apos;m Sunny Mudgal,
                <br />
                founder of
                <br />
                TheBrandBird.
              </h2>

              <p className="text-white/75 leading-relaxed text-[16px] max-w-md">
                We craft digital identities that stick — from brand strategy
                and visual design to high-performance websites and scalable
                business systems.
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
                relative
                flex
                items-center
                justify-between

                bg-white/15
                backdrop-blur-xl

                border border-white/10

                rounded-full
                px-6
                py-4
                mt-10
                w-full

                hover:bg-white/20
                transition-all
                duration-500
              "
            >
              <span className="text-white font-medium text-sm tracking-wide">
                OUR STORY
              </span>

              <div
                className="
                  w-12
                  h-12
                  rounded-full

                  bg-white
                  text-[#111827]

                  flex
                  items-center
                  justify-center

                  text-lg
                  font-bold
                "
              >
                ↗
              </div>
            </button>
          </div>

          {/* STAT CARDS */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden

                bg-gradient-to-br
                from-[#b8c2ef]
                via-[#c6d1ff]
                to-[#dfe7ff]

                rounded-[28px]
                p-10

                border border-white/20

                shadow-[0_20px_60px_rgba(0,0,0,0.10)]

                hover:-translate-y-2
                hover:shadow-[0_20px_100px_rgba(127,141,232,0.20)]

                transition-all
                duration-500
              "
            >
              {/* BLUR */}
              <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] rounded-full bg-white/20 blur-[80px]" />

              <div className="relative">
                <h3
                  className={`text-6xl font-black mb-5 ${
                    stat.highlight
                      ? "text-[#6f7de0]"
                      : "text-[#111827]"
                  }`}
                >
                  {stat.number}
                </h3>

                <p className="text-[#374151] leading-relaxed text-[15px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;