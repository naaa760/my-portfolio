"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0">
        <Image
          src="/ti.jpg"
          alt="Projects Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
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
            <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in web design
              and development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grihttp://localhost:3000d */}
      <section className="px-6 pb-32 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/40 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-gray-700/30 
                hover:border-lime-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.1)]"
              >
                {/* Project Image Container */}
                <Link
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-6"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div
                        className="absolute bottom-4 right-4 transform translate-y-4 opacity-0 
                        group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <span
                          className="bg-lime-500 text-white text-sm px-4 py-2 rounded-full 
                          flex items-center gap-2 hover:bg-lime-400 transition-colors"
                        >
                          View Live Project
                          <svg
                            className="w-4 h-4"
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
                  </div>
                </Link>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-lime-400 text-sm font-medium mb-2 block">
                      Featured Project
                    </span>
                    <h3 className="text-2xl font-medium text-white group-hover:text-lime-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50
                          hover:border-lime-500/50 hover:bg-gray-700/80 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="bg-lime-400 text-gray-900 px-6 py-3 rounded-full flex items-center gap-2"
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
      </div>
    </main>
  );
}

// Project Data
const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "HealthPulse",
    description:
      "I used Created reusable React components and managed state using React Hooks for a dynamic admindashboard. Enhancing performance",
    image: "/Health.png",
    technologies: ["React", "TypeScript", "SQL", "Python", "Prisma"],
    link: "https://health-pulse-beta.vercel.app/",
  },

  {
    id: 5,
    title: "RefactorRealm",
    description:
      "This project is a web-based code editor built with Monaco Editor (the same technology behind VS Code) that supports multiple programming languages like JavaScript, Python, and TypeScript. It features a robust theming system with carefully crafted dark themes (GitHub Dark, Monokai, and Solarized Dark), type-safe configurations, and integration with the Piston runtime for code execution, making it suitable for educational platforms or online coding environments.",
    image: "/ref.png",
    technologies: ["Next.js", "TypeScript", "Convex", "Clerk"],
    link: "https://refactor-realm-egpp.vercel.app/",
  },

  {
    id: 6,
    title: "VoiceAgent",
    description:
      "This web application allows users to have voice conversations with an AI assistant. Users enter their contact details, start a voice call, see real-time feedback during the conversation (AI speaking status and volume levels), and receive a qualification result and conversation summary after the call ends. It's essentially a platform for automated AI voice interactions with visual feedback.",
    image: "/voi.png",
    technologies: ["Next.js", "JavaScript", "Python", "VAPI"],
    link: "https://ai-voice-agent-ten.vercel.app/",
  },

  {
    id: 6,
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
    id: 7,
    title: "Permissionless-Airdrop",
    description:
      "This project is a Solana dApp that lets users connect their Phantom wallet to view and claim token airdrops. It interfaces with Streamflow's airdrop program on Solana devnet, allowing users to search for airdrops by ID, see details like token amounts and recipient counts, and execute claim transactions that transfer tokens directly to their wallet.",
    image: "/pt3.png",
    technologies: ["React with TypeScript", "Solana web3.js", "Craco"],
    link: "https://permissionless-airdrop.vercel.app/",
  },

  {
    id: 8,
    title: "Dwellex",
    description:
      "This is a decentralized real estate marketplace built on blockchain technology. The platform allows users to buy, sell, and manage real estate properties using cryptocurrency (ETH). The project features a modern",
    image: "/chat.png",
    technologies: ["React", "Solidity", "etherum"],
    link: "https://dwellex.vercel.app/",
  },

  {
    id: 9,
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
    id: 10,
    title: "SearchLio",
    description:
      "SearchEngine enables you to find clarity and significant results on a large scale by linking queries and results to the overarching objectives of your search.",
    image: "/Search.png",
    technologies: ["React", "JavaScript", "Shadcn"],
    link: "https://searchlio.vercel.app/",
  },

  {
    id: 11,
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
];
