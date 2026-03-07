import React, { useRef, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

function Contact({ onClose }) {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qmzkd2k",
        "template_fm2zfth",
        form.current,
        "ba35OiIvHFaJ0ppt3",
      )
      .then(() => {
        setSent(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    if (sent) {
      setTimeout(() => setSent(false), 3000);
    }
  }, [sent]);

  return createPortal(
    <AnimatePresence>
      <motion.section
        className="fixed inset-0 bg-[#0000003c] flex items-start justify-end z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div onClick={onClose} className="absolute inset-0" />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="md:rounded-l-4xl relative w-full max-w-xl h-full bg-white shadow-xl p-8 md:p-12 space-y-6 overflow-y-auto"
        >
          <div
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer text-4xl text-gray-500 hover:text-black transition"
          >
            <IoClose />
          </div>

          <div className="text-center space-y-3 mt-8">
            <h2 className="text-3xl md:text-4xl font-light font-[josefin]">
              Let's Collaborate
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              We'll get back to you within one business day
            </p>
          </div>

          {/* SUCCESS MESSAGE */}
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center"
              >
                ✓ Message sent successfully. We'll contact you soon.
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Name</label>
              <input
                name="user_name"
                required
                className="border border-gray-300 focus:border-black focus:outline-none rounded-lg px-3 py-2 transition"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">Email</label>
              <input
                name="user_email"
                required
                className="border border-gray-300 focus:border-black focus:outline-none rounded-lg px-3 py-2 transition"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm">Tell Us About Your Project</label>
              <textarea
                name="message"
                required
                className="border border-gray-300 focus:border-black focus:outline-none rounded-lg px-3 py-2 transition resize-none"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00B489] text-white py-3 rounded-xl hover:bg-[#009f78] transition duration-300"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-500">Prefer to talk now?</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <div className="text-center">
            <a
              href="https://calendar.app.google/qGVE3ewuUWmhy9cC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border w-full border-black px-6 py-2 rounded-xl hover:bg-black hover:text-white transition duration-300">
                Book a Call
              </button>
            </a>
          </div>
        </motion.div>
      </motion.section>
    </AnimatePresence>,
    document.body
  );
}

export default Contact;