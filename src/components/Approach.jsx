import React from "react";
import { motion } from "framer-motion";

function ApproachCard({ head, foot }) {
  return (
<div
  className="
    flex
    hover:rotate-3
    cursor-pointer
    flex-col
    justify-between
    p-6
    rounded-[28px]

    bg-gradient-to-br
    from-[#b8c2ef]
    via-[#c8d2ff]
    to-[#dfe7ff]

    border
    border-white/20

    shadow-[0_20px_60px_rgba(0,0,0,0.10)]

    hover:shadow-[0_20px_80px_rgba(127,141,232,0.25)]

    transition-all
    duration-500

    min-h-55
  "
>
      
      <div className="text-sm font-light tracking-wide text-gray-600">
        {head}
      </div>

      <div className="text-xl md:text-2xl font-medium leading-snug">
        {foot}
      </div>

    </div>
  );
}

function Approach() {
  return (
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut",delay:0.3 }}
  viewport={{ once: false }}
  
>
    <section className="px-6 md:px-12 lg:px-20 py-16">
      
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Our Approach to Design and Build
        </h2>
      </div>

      <div className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3">
        
        <ApproachCard
          head="WEB DESIGN AND DEVELOPMENT"
          foot="Stunning Websites That Make Your Brand Shine"
        />

        <ApproachCard
          head="MOBILE AND WEB APPLICATIONS"
          foot="Innovative Apps Tailored To Your Business Needs"
        />

        <ApproachCard
          head="BRANDING"
          foot="Crafting Unique Identities That Make Lasting Impression"
        />

        <ApproachCard
          head="SOCIAL MEDIA"
          foot="Designing Captivating Content That Resonates"
        />

        <ApproachCard
          head="STRATEGY"
          foot="Building Innovative Strategies To Keep Your Brand Ahead"
        />

        <ApproachCard
          head="MOTION DESIGN"
          foot="Bringing Brands To Life Through Thoughtful Powerful Motion"
        />

      </div>

    </section></motion.div>
  );
}

export default Approach;