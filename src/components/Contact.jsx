import React, { useRef, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function Contact({ onClose }) {
  const form = useRef();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_qmzkd2k",
        "template_fm2zfth",
        form.current,
        "YOUR_EMAILJS_PUBLIC_KEY"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [sent]);

  return createPortal(
    <AnimatePresence>
      <motion.section
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* OVERLAY */}
        <div onClick={onClose} className="absolute inset-0" />

        {/* PANEL */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-50 w-full md:max-w-2xl h-full bg-white overflow-y-auto md:rounded-l-[40px] shadow-2xl"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-4xl text-gray-400 hover:text-black transition"
          >
            <IoClose />
          </button>

          {/* CONTENT */}
          <div className="px-8 md:px-14 py-16 min-h-full flex flex-col justify-center">
            {/* HEADER */}
            <div className="space-y-5">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm tracking-[0.3em] uppercase text-[#00B489] font-medium"
              >
                Contact
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl leading-none font-[josefin]"
              >
                Let’s Build <br /> Something Great
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-base max-w-md leading-relaxed"
              >
                Have an idea, freelance project, startup, or collaboration?
                Fill out the form and I’ll get back to you within 24 hours.
              </motion.p>
            </div>

            {/* SUCCESS */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-2xl"
                >
                  ✓ Message sent successfully.
                </motion.div>
              )}
            </AnimatePresence>

            {/* FORM */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-10 space-y-7"
            >
              {/* NAME */}
              <div className="space-y-3">
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Full Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full border-b border-gray-300 py-4 outline-none focus:border-black transition bg-transparent"
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-3">
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full border-b border-gray-300 py-4 outline-none focus:border-black transition bg-transparent"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-3">
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Project Details
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full border-b border-gray-300 py-4 outline-none focus:border-black transition bg-transparent resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="group mt-6 w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#00B489] transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                )}
              </motion.button>
            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-gray-200"></div>

              <span className="text-sm text-gray-400">
                OR SCHEDULE A CALL
              </span>

              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* BOOK CALL */}
            <a
              href="https://calendar.app.google/qGVE3ewuUWmhy9cC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border border-black py-4 rounded-2xl hover:bg-black hover:text-white transition-all duration-300"
              >
                Book a Discovery Call
              </motion.button>
            </a>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>,
    document.body
  );
}

export default Contact;