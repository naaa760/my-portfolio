"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLoader from "./components/AnimatedLoader";
import "./components/neuButton.css";
import "./components/scrollButtons.css";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

type Video = {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
};

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const videos: Video[] = [
  {
    title: "Portfolio Showcase",
    description: "A walkthrough of my projects and skills",
    thumbnail: "/video1.jpg",
    link: "https://www.loom.com/embed/c7453e34ae9d47c3840aa187f926a6ed?sid=51a68db9-ca89-4b24-959d-75de1f2b1866",
  },
];

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollContainer = document.querySelector(".scroll-buttons");
      if (scrollContainer) {
        if (window.scrollY > 300) {
          scrollContainer.classList.remove(
            "scroll-speed-normal",
            "scroll-speed-slow"
          );
          scrollContainer.classList.add("scroll-speed-up");
        } else if (window.scrollY > 150) {
          scrollContainer.classList.remove(
            "scroll-speed-up",
            "scroll-speed-slow"
          );
          scrollContainer.classList.add("scroll-speed-normal");
        } else {
          scrollContainer.classList.remove(
            "scroll-speed-up",
            "scroll-speed-normal"
          );
          scrollContainer.classList.add("scroll-speed-slow");
        }
      }
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
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            position: scrollY > 100 ? "fixed" : "relative",
            top: scrollY > 100 ? 0 : "auto",
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="flex justify-between items-center px-8 py-4 mx-6 mt-4 rounded-[30px] relative overflow-hidden z-50 w-auto"
          style={{
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "30px",
          }}
        >
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-green-700 opacity-15 blur-xl"></div>
          <div className="absolute bottom-0 left-1/3 w-16 h-16 rounded-full bg-green-800 opacity-10 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-green-600 opacity-15 blur-xl"></div>

          <div className="flex items-center relative z-10">
            <span className="text-green-600 text-base font-bold mr-2">✕</span>
            <span className="text-sm font-medium text-gray-800">PortFolio</span>
          </div>

          <nav className="hidden md:flex space-x-6 relative z-10">
            <Link href="/projects">
              <span className="neu-button neu-button-nav">Projects</span>
            </Link>

            <Link href="/experience">
              <span className="neu-button neu-button-nav">Experience</span>
            </Link>
          </nav>

          <div className="flex items-center relative z-10">
            <span className="text-[10px] mr-4 hidden md:inline text-gray-700">
              Email: nehaprasad27118@gmail.com
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
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end mb-6 pr-20"
            >
              <div className="inline-flex items-center">
                <span className="h-2 w-2 bg-lime-400 rounded-full mr-2"></span>
                <span className="text-xs text-gray-600">Available for Job</span>
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-full md:w-1/3"
              >
                <div className="flex mb-8 ml-12">
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

                <div className="relative ml-12">
                  <AnimatedLoader />
                </div>
              </motion.div>

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
                  className="text-4xl md:text-5xl font-normal leading-tight mb-8"
                >
                  <h1>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      className="inline-block text-[#2d2d2d] drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] [text-shadow:_0_1px_0_rgb(0_0_0_/_5%)]"
                    >
                      Hi! I am{" "}
                      <span className="neu-button neu-button-name">
                        NEHA PRASAD
                      </span>
                    </motion.span>
                    <br />
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      className="inline-block"
                    >
                      <span className="text-[#2d2d2d]">a</span>{" "}
                      <span className="neu-button neu-button-title">
                        Software Developer
                      </span>
                    </motion.span>
                    <br />
                    <span className="text-[#2d2d2d]">from</span>{" "}
                    <span className="neu-button neu-button-name">India</span>
                    <br />
                    <span className="text-[#2d2d2d] drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] [text-shadow:_0_1px_0_rgb(0_0_0_/_5%)]">
                      Each idea holds
                      <br />a unique power
                    </span>
                  </h1>
                </motion.div>

                <div className="mt-8">
                  <p
                    className={`${dancingScript.className} text-2xl bg-gradient-to-r from-lime-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent relative`}
                  >
                    building epic stuffs to explore more about Next.Js , AI and
                    Web3.
                    <br />I am all about exploring new tech and creating impact.
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400 to-transparent"></span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-16 mb-8 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="w-full"
          >
            <div className="scroll-container">
              <div className="scroll-buttons">
                <a
                  href="https://drive.google.com/file/d/1AavTgqkcOT0iknkBImakLkPWSCkopS72/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  Download CV
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
                <a href="/contact" className="scroll-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Projects Section - Dark Theme */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-gray-900 text-white py-20 mt-20 relative overflow-hidden"
        >
          {/* Background SVG Pattern with rotation animation */}
          <div className="absolute inset-0 opacity-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84cc16" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.7" />
                </linearGradient>

                {/* Add animation for rotation */}
                <animateTransform
                  xlinkHref="#petalGroup"
                  attributeName="transform"
                  type="rotate"
                  from="0 500 500"
                  to="360 500 500"
                  dur="120s"
                  repeatCount="indefinite"
                  additive="sum"
                />
              </defs>

              {/* Large flower/petal pattern with ID for animation */}
              <g id="petalGroup" transform="translate(500, 500)">
                {/* Petals remain the same */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(0)"
                />
                {/* Petal 2 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(45)"
                />
                {/* Petal 3 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(90)"
                />
                {/* Petal 4 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(135)"
                />
                {/* Petal 5 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(180)"
                />
                {/* Petal 6 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(225)"
                />
                {/* Petal 7 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(270)"
                />
                {/* Petal 8 */}
                <path
                  d="M0,-400 C100,-300 100,-100 0,0 C-100,-100 -100,-300 0,-400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  transform="rotate(315)"
                />
              </g>

              {/* Circles remain the same */}
              <circle
                cx="500"
                cy="500"
                r="50"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1"
              />

              {/* Middle circle with reverse rotation */}
              <circle
                cx="500"
                cy="500"
                r="200"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1"
                strokeDasharray="1,3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 500 500"
                  to="-180 500 500"
                  dur="90s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Outer circle */}
              <circle
                cx="500"
                cy="500"
                r="350"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1"
                strokeDasharray="1,5"
              />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Featured Projects Tag */}
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div>
              <span className="text-sm text-lime-400">
                [01] — Featured projects
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-light mb-16 max-w-3xl">
              I blend creativity with technical expertise
            </h2>

            {/* CTA Button with Glow Effect */}
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 to-lime-300 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium py-3 px-8 rounded-full flex items-center transition-all duration-300">
                Become a client
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            {/* Project Cards - Will appear when scrolling down */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
              {/* Project Card 1 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="border-t border-gray-700 pt-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-gray-400">
                      [ Pottery artist portfolio ]
                    </span>
                    <h3 className="text-2xl font-medium mt-2">
                      SilverLynx Technologies
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">5/31/24</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Web design & Web development
                </p>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-t border-gray-700 pt-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-gray-400">
                      [ Artist Portfolio ]
                    </span>
                    <h3 className="text-2xl font-medium mt-2">
                      Evergreen Solutions
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">8/8/24</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  Web design & Web development
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Portfolio Showcase Section - With Project Images */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full bg-gray-900 text-white py-12 relative overflow-hidden border-t border-gray-800"
        >
          {/* Light Effect Layer */}
          <div className="absolute inset-0 z-0">
            {/* Radial Gradient Lights - More Subtle */}
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#84cc16] opacity-[0.03] rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#84cc16] opacity-[0.02] rounded-full blur-[130px] animate-pulse delay-1000"></div>

            {/* Circular Rolling Light - Fixed Position */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    transformOrigin: "center",
                    animation: "spinLight 8s linear infinite",
                    opacity: 0.1,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg1.png"
              alt="Background Pattern"
              fill
              className="object-cover opacity-5"
              priority
              style={{
                objectFit: "cover",
                mixBlendMode: "luminosity",
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-1"></div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            {/* Star Background Effect for Content Area */}
            <div className="absolute inset-0 star-field-content">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="star-content"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="shooting-star"
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${Math.random() * 2 + 1}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Section Tag */}
            <div className="flex items-center mb-6 relative z-20">
              <div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div>
              <span className="text-sm text-lime-400">[02] — Recent work</span>
            </div>

            {/* Project Cards with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
              {/* Project Card 1 with Image */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="project-card-shadow group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sm text-lime-400">
                      [ Pottery artist portfolio ]
                    </span>
                    <h3 className="text-3xl font-medium mt-2">
                      SilverLynx Technologies
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">5/31/24</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                  Web design & Web development
                </p>

                {/* Project Image with enhanced animation and proper fitting */}
                <motion.div
                  className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden shadow-project"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/pt6.png"
                    alt="SilverLynx Technologies Project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Project Card 2 with Image */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="project-card-shadow group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sm text-lime-400">
                      [ Artist Portfolio ]
                    </span>
                    <h3 className="text-3xl font-medium mt-2">
                      Evergreen Solutions
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">8/8/24</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                  Web design & Web development
                </p>

                {/* Project Image with enhanced animation and proper fitting */}
                <motion.div
                  className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden shadow-project"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/pt1.png"
                    alt="Evergreen Solutions Project"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* View All Projects Button */}
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors"
              >
                View all projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Additional Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full bg-gray-900 text-white py-12 relative overflow-hidden border-t border-gray-800"
        >
          {/* Light Effect Layer */}
          <div className="absolute inset-0 z-0">
            {/* Radial Gradient Lights - More Subtle */}
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#84cc16] opacity-[0.03] rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#84cc16] opacity-[0.02] rounded-full blur-[130px] animate-pulse delay-1000"></div>

            {/* Circular Rolling Light */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-[#84cc16] to-transparent"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    transformOrigin: "center",
                    animation: "spinLight 8s linear infinite",
                    opacity: 0.1,
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg1.png"
              alt="Background Pattern"
              fill
              className="object-cover opacity-5"
              priority
              style={{
                objectFit: "cover",
                mixBlendMode: "luminosity",
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-1"></div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            {/* Star Background Effect for Content Area */}
            <div className="absolute inset-0 star-field-content">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="star-content"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }}
                />
              ))}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="shooting-star"
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${Math.random() * 2 + 1}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Section Tag */}
            <div className="flex items-center mb-6 relative z-20">
              <div className="w-2 h-2 rounded-full bg-lime-400 mr-2"></div>
              <span className="text-sm text-lime-400">[03] — More work</span>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 relative z-20">
              {/* Project Card 1 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="project-card-shadow group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-lime-400">
                      [ Mobile app ]
                    </span>
                    <h3 className="text-2xl font-medium mt-2">
                      EchoStream Entertainment
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">6/20/24</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">UI/UX design</p>

                {/* Project Image */}
                <motion.div
                  className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden shadow-project"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/pt2.png"
                    alt="EchoStream Entertainment Project"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Project Card 2 */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="project-card-shadow group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-lime-400">
                      [ Boutique E-commerce Store ]
                    </span>
                    <h3 className="text-2xl font-medium mt-2">
                      PulseTech Innovations
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">7/13/24</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Web design & Web development
                </p>

                {/* Project Image */}
                <motion.div
                  className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden shadow-project"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/pt3.png"
                    alt="PulseTech Innovations Project"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* View All Projects Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group lg:col-span-1"
              >
                <Link href="/projects" className="block h-full">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden h-full">
                    {/* Background Image */}
                    <Image
                      src="/eye.jpg"
                      alt="Eye Background"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center space-y-4">
                        <span className="text-white text-2xl font-medium">
                          View all projects
                        </span>
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section with Background Image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-full bg-white text-gray-900 py-20 relative overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/pg.jpg"
              alt="Background Pattern"
              fill
              className="object-cover opacity-30"
              quality={100}
              priority
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            {/* Section Tag with Enhanced Glow */}
            <div className="flex items-center mb-6">
              <div className="w-2 h-2 rounded-full bg-[#84cc16] mr-2 animate-glow">
                <div className="absolute w-4 h-4 -inset-1 bg-[#84cc16] opacity-75 blur-sm rounded-full"></div>
              </div>
              <span className="text-sm text-[#84cc16] relative">
                <span className="relative z-10">[06] — Contact me</span>
                <span className="absolute inset-0 bg-[#84cc16] opacity-25 blur-[2px]"></span>
              </span>
            </div>

            {/* Section Title with Cursive Font and Glow */}
            <h2
              className={`${dancingScript.className} text-[72px] mb-20 max-w-4xl relative text-gray-800 leading-tight`}
            >
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                I am all over
                <br />
                <span className="text-[84px] text-[#84cc16] ml-8">
                  the internet
                </span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#84cc16] to-transparent opacity-10 blur-xl"></span>
            </h2>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Social Media Cards with Enhanced Glow */}
              {[
                { name: "Twitter/X", url: "https://x.com/nehaaaa_6" },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/neha-prasad-92499821b/",
                },
                { name: "GitHub", url: "https://github.com/naaa760" },
              ].map((platform) => (
                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={platform.name}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#84cc16] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="flex justify-between items-center relative">
                    <h3 className="text-xl">{platform.name}</h3>
                    <div className="bg-[#84cc16] rounded-full p-3 relative group-hover:shadow-[0_0_20px_rgba(132,204,22,0.3)] transition-all duration-300">
                      <div className="absolute inset-0 bg-[#84cc16] rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <svg
                        className="w-5 h-5 relative z-10"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 19L19 5M19 5H5M19 5V19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Get in touch with Enhanced Glow */}
              <Link
                href="mailto:nehaprasad27118@gmail.com"
                className="bg-[#84cc16] rounded-2xl p-8 col-span-2 relative group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#84cc16] to-[#84cc16]/50 opacity-75 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
                <div className="relative flex justify-between items-center">
                  <h3 className="text-xl text-white">Get in touch</h3>
                  <div className="bg-white rounded-full p-3 relative group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <svg
                      className="w-5 h-5 text-[#84cc16] relative z-10"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 19L19 5M19 5H5M19 5V19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full relative overflow-hidden"
        >
          {/* Background with Image */}
          <div className="absolute inset-0">
            <Image
              src="/fl.jpg"
              alt="Background"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 gap-8">
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative h-[200px] rounded-2xl overflow-hidden shadow-2xl w-full md:w-[80%] mx-auto"
                  >
                    <div className="relative w-full h-full">
                      <iframe
                        src={video.link}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section with Leaves Pattern */}
        <section className="w-full py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <Image
              src="/fl.jpg"
              alt="Skills Background"
              fill
              className="object-cover opacity-10"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
          </div>

          {/* Gray Spirals */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top Left Spiral */}
            <svg
              className="absolute -top-20 -left-20 w-96 h-96 text-gray-200 transform rotate-45"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 0 C50 50, 100 50, 100 50 C50 50, 50 100, 50 100 C50 50, 0 50, 0 50 C50 50, 50 0, 50 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="animate-[spin_30s_linear_infinite]"
              />
            </svg>

            {/* Bottom Right Spiral */}
            <svg
              className="absolute -bottom-20 -right-20 w-96 h-96 text-gray-200 transform -rotate-45"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 0 C20 20, 80 20, 80 50 C80 80, 20 80, 50 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="animate-[spin_35s_linear_infinite]"
              />
            </svg>

            {/* Leaves Pattern */}
            <div className="absolute inset-0">
              <svg
                className="absolute top-0 left-0 w-32 h-32 text-lime-100/30"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50,0 Q60,40 100,50 Q60,60 50,100 Q40,60 0,50 Q40,40 50,0"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="absolute top-1/4 right-1/4 w-24 h-24 text-emerald-100/30 rotate-45"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50,0 Q60,40 100,50 Q60,60 50,100 Q40,60 0,50 Q40,40 50,0"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="absolute bottom-1/3 left-1/3 w-20 h-20 text-green-100/30 -rotate-12"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50,0 Q60,40 100,50 Q60,60 50,100 Q40,60 0,50 Q40,40 50,0"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto px-6 relative z-10">
            {/* Section Title with Leaf Accent */}
            <div className="text-center mb-16 relative">
              <span className="text-sm text-lime-600 mb-2 block tracking-wider flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-lime-500" viewBox="0 0 24 24">
                  <path
                    d="M12,2 Q16,8 22,12 Q16,16 12,22 Q8,16 2,12 Q8,8 12,2"
                    fill="currentColor"
                  />
                </svg>
                TECHNOLOGIES I WORK WITH
                <svg
                  className="w-4 h-4 text-lime-500 rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,2 Q16,8 22,12 Q16,16 12,22 Q8,16 2,12 Q8,8 12,2"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
                My Skills
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500/50 to-transparent"></div>
              </h2>
            </div>

            {/* Skills Tags Container with Nature-Inspired Design */}
            <div
              className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-12 rounded-3xl border border-gray-100 
                            shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(132,204,22,0.1),transparent_70%)]"></div>
              <div className="relative z-10 flex flex-wrap justify-center gap-4">
                {[
                  "Next.js",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "TRPC",
                  "ShadcnUI",
                  "MongoDB",
                  "Prisma",
                  "Docker",
                  "CI/CD",
                  "Astro",
                  "Framer Motion",
                ].map((skill) => (
                  <div key={skill} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-lime-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-50 blur-xl transition-opacity"></div>
                    <div
                      className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-100 
                                  shadow-sm hover:border-lime-500 hover:shadow-md relative
                                  transition-all duration-300 cursor-pointer group-hover:bg-gradient-to-r 
                                  group-hover:from-lime-50 group-hover:to-emerald-50"
                    >
                      <span className="text-gray-700 group-hover:text-lime-600 transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
