"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/pr.jpg"
          alt="Projects Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
      </div>

      {/* Hero Section with Enhanced Title */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Section Label */}
            <div className="mb-6 inline-block">
              <span className="text-xs text-lime-400 tracking-widest uppercase font-medium">
                Portfolio
              </span>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-lime-400 to-transparent mt-1"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Selected{" "}
              <span className="text-lime-400 relative inline-block">
                Works
                <div className="absolute -bottom-2 left-0 h-[2px] w-full bg-lime-400/50"></div>
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in web design
              and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid with Enhanced Cards */}
      <section className="px-6 pb-32 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card-shadow group"
              >
                <div className="mb-6">
                  <span className="text-xs text-lime-400 mb-2 block">{`Project ${String(
                    index + 1
                  ).padStart(2, "0")}`}</span>
                  <h3 className="text-3xl font-medium text-white group-hover:text-lime-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                  {project.description}
                </p>

                {/* Project Image with Enhanced Link */}
                <Link
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative aspect-[16/10] w-full rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-6 py-3 rounded-full bg-lime-500/90 backdrop-blur-sm flex items-center gap-2">
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
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
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Technologies Used with Enhanced Style */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/80 text-gray-300 rounded-full text-xs border border-gray-700 backdrop-blur-sm hover:bg-lime-900/50 hover:text-lime-300 hover:border-lime-700 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-lime-500/10 blur-3xl z-0"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-lime-500/10 blur-3xl z-0"></div>
      <div className="absolute top-[40%] right-[30%] w-40 h-40 rounded-full bg-emerald-500/10 blur-3xl z-0"></div>

      {/* Enhanced Back to Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/"
          className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(132,204,22,0.3)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
// Project Data
const projects = [
  {
    id: 1,
    title: "TimeBank",
    description:
      "TimeBank is a modern web application that enables users to exchange services and skills using time as currency. Users can offer their expertise, request services, and build a community based on mutual skill-sharing.",
    image: "/pt6.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL (with Neon)",
    ],
    link: "https://timebank-knhl.vercel.app/",
  },
  {
    id: 2,
    title: "TalkCast",
    description:
      "TalkCast is a modern podcast platform that connects creators and listeners through a beautiful, unified interface. It solves the problem of content discovery by offering personalized recommendations while giving creators tools to grow their audience. The platform combines stunning design with community features like Fans Like You transforming the podcast experience from fragmented and overwhelming to curated and engaging for everyone involved.",
    image: "/pt1.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Convex",
    ],
    link: "https://mutli-app.vercel.app/",
  },
  {
    id: 3,
    title: "Jirnov",
    description:
      "JINova is a streamlined project management platform that combines task management, team collaboration, and client communication in one intuitive interface. It simplifies complex workflows while providing powerful features for tracking progress, managing resources, and analyzing project performance. The platform's flexible design adapts to various team sizes and methodologies, making project management more efficient and less overwhelming.",
    image: "/pt2.png",
    technologies: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      " JWT",
    ],
    link: "https://jirnov.vercel.app/",
  },
  {
    id: 4,
    title: "Permissionless-Airdrop",
    description:
      "This project is a Solana dApp that lets users connect their Phantom wallet to view and claim token airdrops. It interfaces with Streamflow's airdrop program on Solana devnet, allowing users to search for airdrops by ID, see details like token amounts and recipient counts, and execute claim transactions that transfer tokens directly to their wallet.",
    image: "/pt3.png",
    technologies: ["React with TypeScript", "Solana web3.js", "Craco"],
    link: "https://permissionless-airdrop.vercel.app/",
  },

  {
    id: 5,
    title: "VocaVista",
    description:
      "This project is a Next.js web app featuring secure user authentication via Clerk and personalized AI using Google's Gemini. It uses a serverless PostgreSQL database (Neon) for secure, contextual user data storage.",
    image: "/pt5.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Gemini",
      "Prisma",
      "Inngest",
    ],
    link: "https://vocavista.vercel.app/",
  },

  {
    id: 6,
    title: "Dwellex",
    description:
      "This is a decentralized real estate marketplace built on blockchain technology. The platform allows users to buy, sell, and manage real estate properties using cryptocurrency (ETH). The project features a modern",
    image: "/chat.png",
    technologies: ["React", "Solidity", "etherum"],
    link: "https://dwellex.vercel.app/",
  },

  {
    id: 7,
    title: "SnapCart",
    description:
      "POSGRESTORE is a modern e-commerce platform with a React/TypeScript frontend and a Node.js/Express backend, using Zustand for state management, Neon PostgreSQL for data storage, and secure CRUD operations via a RESTful API.",
    image: "/snap.png",
    technologies: [
      "React",
      "TypeScript",
      "POSTMAN",
      "Zustand",
      "Neon",
      "Arcjet",
    ],
    link: "https://snapcart-r2tx.onrender.com/",
  },

  {
    id: 8,
    title: "SearchLio",
    description:
      "SearchEngine enables you to find clarity and significant results on a large scale by linking queries and results to the overarching objectives of your search.",
    image: "/Search.png",
    technologies: ["React", "JavaScript", "Shadcn"],
    link: "https://searchlio.vercel.app/",
  },

  {
    id: 9,
    title: "ThreadLink",
    description:
      "This Next.js user profile feature uses server components for optimized data fetching and SEO, enhancing performance. Its modular design supports user-specific actions like follow status and liked posts.",
    image: "/thread.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Shadcn",
      "Prisma",
      "postgres",
    ],
    link: "https://threadlink-6b9f.vercel.app/",
  },

  {
    id: 10,
    title: "HealthPulse",
    description:
      "I used Created reusable React components and managed state using React Hooks for a dynamic admindashboard. Enhancing performance",
    image: "/Health.png",
    technologies: ["React", "TypeScript", "SQL", "Python", "Prisma"],
    link: "https://health-pulse-beta.vercel.app/",
  },
];
