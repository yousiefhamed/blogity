import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-zinc-100 sticky top-0 p-4 max-w-screen-lg mx-auto z-10">
      <div className="absolute w-screen h-full top-0 left-1/2 -translate-x-1/2 shadow-md -z-10 bg-zinc-100"></div>
      <div className="logo">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-purple-800">blog</span>
          <span className="text-yellow-400">ity</span>
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className="text-purple-800 hover:text-yellow-400 hover:font-bold font-semibold transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-purple-800 hover:text-yellow-400 hover:font-bold font-semibold transition-all"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/add"
            className="text-purple-800 hover:text-yellow-400 hover:font-bold font-semibold transition-all"
          >
            Add
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-purple-800 hover:text-yellow-400 hover:font-bold font-semibold transition-all"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/auth/login"
            className="text-purple-800 hover:text-yellow-400 hover:font-bold font-semibold transition-all"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
