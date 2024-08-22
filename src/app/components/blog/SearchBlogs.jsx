"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBlogs = ({ blogsLength, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target?.value !== undefined) setSearchTerm(e.target.value);
    onSearch(searchTerm);
  };

  return (
    <div className="w-full flex flex-col gap-1 justify-center items-start">
      <h2 className="font-bold text-lg text-purple-800">
        Search Blogs ({blogsLength}):
      </h2>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by title or content"
            value={searchTerm}
            onChange={handleSearch}
            className="w-[350px] max-w-full border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:shadow-lg transition-all focus:border focus:border-yellow-300"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded font-bold text-xl text-white bg-purple-600 hover:bg-purple-800"
          >
            <CiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBlogs;
