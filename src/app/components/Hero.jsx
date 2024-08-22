import Link from "next/link";
import React from "react";

const Hero = ({ heading }) => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 64px - 56px)" }}
      className="flex flex-col justify-between items-center p-4"
    >
      <div></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-yellow-400 text-center">
          {heading}
        </h1>
        <p className="text-xl text-gray-500 my-3">
          A place to share your thoughts
        </p>
        <Link
          href="/blog"
          className="px-4 py-2 text-white font-semibold bg-purple-800 rounded-md hover:bg-purple-950 transition-all"
        >
          Explore Blog
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
