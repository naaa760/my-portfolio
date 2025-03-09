"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLoader from "./components/AnimatedLoader";
import "./components/neuButton.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header/Navigation - Sticky on scroll with oval corners */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            position: scrollY > 100 ? "fixed" : "relative",
            top: scrollY > 100 ? 0 : "auto",
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="flex justify-between items-center px-8 py-4 mx-6 mt-4 rounded-[30px] relative overflow-hidden z-50 w-auto"
          style={{
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "30px",
          }}
        >
          {/* Subtle glow effects */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-lime-400 opacity-5 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-lime-400 opacity-5 blur-xl"></div>

          <div className="flex items-center relative z-10">
            <span className="text-lime-500 text-base font-bold mr-2">✕</span>
            <span className="text-sm font-medium text-gray-800">Webstack</span>
          </div>

          <nav className="hidden md:flex space-x-6 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-1.5 rounded-[58px]"
              style={{
                background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
                boxShadow: "5px 5px 10px #777777, -5px -5px 10px #ffffff",
              }}
            >
              <Link href="/projects" className="text-gray-700 text-xs">
                Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-1.5 rounded-[58px]"
              style={{
                background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
                boxShadow: "5px 5px 10px #777777, -5px -5px 10px #ffffff",
              }}
            >
              <Link href="/projects" className="text-gray-700 text-xs">
                Experience
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-1.5 rounded-[58px]"
              style={{
                background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
                boxShadow: "5px 5px 10px #777777, -5px -5px 10px #ffffff",
              }}
            >
              <Link href="/about" className="text-gray-700 text-xs">
                About & Contact
              </Link>
            </motion.div>
          </nav>

          <div className="flex items-center relative z-10">
            <span className="text-[10px] mr-4 hidden md:inline text-gray-700">
              Email: hello@andrew.design
            </span>
            <Link
              href="/contact"
              className="bg-transparent border border-gray-300 text-gray-800 px-4 py-1.5 rounded-full text-[10px] hover:bg-lime-500 hover:text-white hover:border-lime-500 transition-all duration-300"
            >
              Contact me
            </Link>
          </div>
        </motion.header>

        <div className="flex flex-col px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-16">
          <div className="w-full">
            {/* Availability Badge */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end mb-6 pr-20"
            >
              <div className="inline-flex items-center">
                <span className="h-2 w-2 bg-lime-400 rounded-full mr-2"></span>
                <span className="text-xs text-gray-600">
                  Available for freelance
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row">
              {/* Left Side - Circles and Social */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full md:w-1/3"
              >
                {/* Stacked Circle Design */}
                <div className="flex mb-8 ml-12">
                  {/* Profile Image Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-32 h-32 rounded-full overflow-hidden"
                  >
                    <Image
                      src="/profile-image.jpg"
                      alt="Andrew Scott"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Single Decorative Circle */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute w-48 h-48 rounded-full"
                    style={{
                      background: `url('/img.png'), linear-gradient(145deg, #e6e6e6, #ffffff)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow:
                        "26px 26px 52px #6c6c6c, -26px -26px 52px #ffffff",
                      transform: "translateX(-65px) translateY(-30px)",
                    }}
                  />
                </div>

                {/* Animated Loader */}
                <div className="relative ml-12">
                  <AnimatedLoader />
                </div>
              </motion.div>

              {/* Right Side - Main Content */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full md:w-2/3"
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-3xl md:text-5xl font-medium leading-tight text-gray-900 mb-8 framer-text framer-styles-preset-1rbt0vf"
                  data-styles-preset="Ef9x12Hcq"
                >
                  <h1>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      className="inline-block"
                    >
                      Hi! I am{" "}
                      <span className="neu-button neu-button-name">
                        Andrew Scott
                      </span>
                    </motion.span>
                    <br />
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      className="inline-block"
                    >
                      a{" "}
                      <span className="neu-button neu-button-title">
                        Digital Designer
                      </span>
                    </motion.span>
                    <br />
                    from{" "}
                    <span className="neu-button neu-button-name">Boston</span>
                    <br />
                    turning your ideas into
                    <br />
                    pixel-perfect realities
                  </h1>
                </motion.div>

                <div className="mt-8">
                  <div
                    className="text-gray-600 mb-1 text-xs framer-text framer-styles-preset-1rbt0vf"
                    data-styles-preset="Ef9x12Hcq"
                  >
                    (2018 - PRESENT)
                  </div>
                  <p
                    className="text-sm text-gray-700 max-w-3xl framer-text framer-styles-preset-1rbt0vf"
                    data-styles-preset="Ef9x12Hcq"
                  >
                    I am dedicated to crafting websites that bring your ideas to
                    life, combining modern design with seamless functionality.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Unlock Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="fixed bottom-6 right-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-3 py-1 rounded-full flex items-center text-[10px]"
          >
            Unlock at $0
            <svg
              className="ml-1 w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </motion.button>
        </motion.div>

        {/* Made in Framer Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="fixed bottom-6 right-28"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center text-[10px]"
          >
            <span className="mr-1">₣</span> Made in Framer
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  );
}
