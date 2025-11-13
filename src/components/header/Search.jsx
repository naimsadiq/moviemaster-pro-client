import React from "react";

const Search = () => {
  return (
    <div className="absolute top-8 right-[250px]">
      <div className="flex items-center justify-end">
        <label className="flex items-center gap-2 bg-white/10 border border-gray-400/30 rounded-l-xl px-4 py-2 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search for a movie..."
            className="bg-transparent outline-none text-white placeholder-gray-400 w-56 sm:w-72"
          />
        </label>

        <button className="text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l dark:focus:ring-purple-800 font-medium px-5 py-[9px] rounded-r-xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
