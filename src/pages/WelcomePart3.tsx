import React from "react";
import "react-bootstrap";
import LogoCard from "./LogoCard";
import InfoCard from "./LogoCard";

export default function WelcomePage() {
  return (
    <section className="relative bg-[url(https://color-hex.org/colors/a2ceab.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-left">
            Friendship Made Easy!
            <strong className="text-2xl block font-extrabold text-indigo-500">
              Lasting connections in the palm of your hand.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-left">
            Maybe fill?
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-left">
          <a
          className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="login"
        >
          <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:mr-4">
            Login
          </span>
        </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-indigo-500 shadow hover:text-indigo-500 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
            >
              Fix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

