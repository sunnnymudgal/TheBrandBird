import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(".cursor-hover");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="max-md:hidden fixed top-0 left-0 pointer-events-none z-50 border-2 border-black"
      animate={{
        x: position.x - (hovering ? 40 : 12),
        y: position.y - (hovering ? 40 : 12),
        width: hovering ? 80 : 24,
        height: hovering ? 80 : 24,
        borderRadius: hovering ? "20px" : "9999px",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    />
  );
}