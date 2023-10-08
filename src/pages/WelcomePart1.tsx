import React from "react";
import "react-bootstrap";
import LogoCard from "./LogoCard";
import InfoCard from "./LogoCard";

export default function WelcomePage() {
  return (
    <div>
      <div className="m-2">
        <LogoCard></LogoCard>
      </div>
      <div className="text-center p-10">
        <h1> Friendships made easy! </h1>
      </div>
      <center>
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
      </center>
    </div>
  );
}
