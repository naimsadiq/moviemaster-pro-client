import React from "react";
import { useNavigate } from "react-router";

const genres = [
  { name: "Action", icon: "💥", color: "bg-red-500" },
  { name: "Comedy", icon: "😂", color: "bg-yellow-500" },
  { name: "Drama", icon: "🎭", color: "bg-purple-500" },
  { name: "Sci-Fi", icon: "🚀", color: "bg-blue-500" },
  { name: "Horror", icon: "👻", color: "bg-gray-700" },
  { name: "Romance", icon: "💖", color: "bg-pink-500" },
  { name: "Thriller", icon: "🔪", color: "bg-orange-500" },
  { name: "Animation", icon: "🎨", color: "bg-green-500" },
];

const GenreMenu = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-wrap justify-center gap-4 px-2 md:px-0 py-6 rounded-xl shadow-md">
      {genres.map((genre) => (
        <button
          key={genre.name}
          onClick={() => navigate(`/genre/${genre.name}`)}
          className={`
            flex items-center gap-2 px-4 py-2 text-white font-medium rounded-full 
            transition-transform duration-200 hover:scale-105 hover:shadow-lg
            ${genre.color}
          `}
        >
          <span className="text-lg">{genre.icon}</span>
          <span>{genre.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default GenreMenu;
