import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content Container - Everything else wrapped in relative z-10 */}
      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
          <div className="flex items-center">
            <span className="text-lime-400 text-base font-bold mr-2">✕</span>
            <span className="text-sm font-medium">Webstack</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 text-xs"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 text-xs"
            >
              About & Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <span className="text-[10px] mr-4 hidden md:inline text-gray-600">
              Email: hello@andrew.design
            </span>
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-3 py-1 rounded-full text-[10px] hover:bg-gray-800 transition"
            >
              Contact me
            </Link>
          </div>
        </header>

        <div className="flex flex-col px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-16">
          {/* Main Content */}
          <div className="w-full">
            {/* Availability Badge */}
            <div className="flex justify-end mb-6 pr-20">
              <div className="inline-flex items-center">
                <span className="h-2 w-2 bg-lime-400 rounded-full mr-2"></span>
                <span className="text-xs text-gray-600">
                  Available for freelance
                </span>
              </div>
            </div>

            <div className="flex">
              {/* Left Side - Circles and Social */}
              <div className="w-1/3">
                {/* Stacked Circle Design */}
                <div className="flex mb-8 ml-12">
                  {/* Profile Image Circle */}
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src="/profile-image.jpg"
                      alt="Andrew Scott"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>

                  {/* Single Decorative Circle */}
                  <div
                    className="absolute w-32 h-32 rounded-full"
                    style={{
                      background: `url('/img.png'), linear-gradient(145deg, #e6e6e6, #ffffff)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow:
                        "18px 18px 36px #6c6c6c, -18px -18px 36px #ffffff",
                      transform: "translateX(-45px) translateY(-20px)",
                      opacity: "0.9",
                    }}
                  />
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 mb-8 ml-12">
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Side - Main Content */}
              <div className="w-2/3">
                <div
                  className="text-3xl md:text-5xl font-medium leading-tight text-gray-900 mb-8 framer-text framer-styles-preset-1rbt0vf"
                  data-styles-preset="Ef9x12Hcq"
                >
                  <h1>
                    Hi! I am{" "}
                    <span className="bg-white rounded-full px-3 py-0.5">
                      Andrew Scott
                    </span>
                    <br />a{" "}
                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full inline-block my-1">
                      Digital Designer
                    </span>{" "}
                    from{" "}
                    <span className="border border-gray-300 px-4 py-1 rounded-full inline-block my-1">
                      Boston
                    </span>
                    <br />
                    turning your ideas into
                    <br />
                    pixel-perfect realities
                  </h1>
                </div>

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
              </div>
            </div>
          </div>
        </div>

        {/* Unlock Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-black text-white px-3 py-1 rounded-full flex items-center text-[10px]">
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
          </button>
        </div>

        {/* Made in Framer Badge */}
        <div className="fixed bottom-6 right-28">
          <button className="bg-white border border-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center text-[10px]">
            <span className="mr-1">₣</span> Made in Framer
          </button>
        </div>
      </div>
    </main>
  );
}
