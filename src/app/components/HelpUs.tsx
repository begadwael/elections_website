"use client";

import Image from "next/image";

export default function HelpUsSection() {
  return (
    <section className="relative py-16 px-4 bg-[#f8f1e8] overflow-hidden">
      {/* Background Accent Shape */}
      <div className="absolute inset-0 z-0 flex justify-center opacity-10 pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="#e35724" />
        </svg>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative max-w-3xl mx-auto z-10">
        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center transition-shadow duration-300 hover:shadow-2xl">
          {/* Headings */}
          <h2 className="text-3xl font-extrabold text-gray-800">
            Help Us Make This Plan
          </h2>
          <p className="text-2xl font-extrabold text-[#F76902] mt-2">
            Come To Life
          </p>

          {/* Icon */}
          <div className="flex justify-center mt-6">
            <Image
              src="https://img.icons8.com/?size=100&id=WCf4kcsJ1PWW&format=png&color=000000"
              alt="Megaphone icon"
              width={80}
              height={80}
            />
          </div>

          {/* Subheading */}
          <h3 className="text-xl font-bold text-[#F76902] mt-6">
            How to help?
          </h3>

          {/* Bullet List with Icons */}
          <ul className="list-none mt-4 mb-6 text-gray-700 text-left mx-auto max-w-sm space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-[#F76902]">
                {/* Simple SVG arrow icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
              <span>Vote Begad & Mariia</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F76902]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
              <span>Spread the word</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F76902]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
              <span>
                Tag{" "}
                <a
                  href="https://www.instagram.com/marristmas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @marristmas
                </a>{" "}
                and{" "}
                <a
                  href="https://www.instagram.com/bigo.wael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @bigo.wael
                </a>
                {" "}in your stories
              </span>
            </li>
          </ul>

          {/* Elections Date & CTA */}
          <p className="text-gray-700">
            Elections take place on
            <span className="ml-2 inline-block px-2 py-1 bg-[#F76902] text-white text-sm font-semibold rounded">
              Monday, April 7th – Monday, April 14th
            </span>
          </p>

          {/* <a
            href="#"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-[#e35724] text-white font-bold hover:bg-[#d84f1f] hover:shadow-md transition-all duration-300"
          >
            vote for us
          </a> */}
        </div>
      </div>
    </section>
  );
}
