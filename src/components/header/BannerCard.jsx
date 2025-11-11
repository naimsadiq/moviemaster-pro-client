import React from "react";

const BannerCard = ({ movie }) => {
  const { title, rating, image_url, genres } = movie;
  const genresString = genres.join(", ");
  return (
    <div className="hover:shadow-md w-60 h-[410px] pb-3 bg-[#ffffff] group relative transition rounded-b-sm col-span-1">
      <div className="relative h-[300px]">
        <img
          className="h-full w-full object-cover"
          src={image_url}
          alt={title}
        />
        <div className="bg-[#e88f00] w-10 h-10 rounded-full flex justify-center items-center font-bold text-white absolute bottom-5 -right-5 z-50">
          {rating}
        </div>
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-60 bg-black"></div>
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-30">
          <span className=" px-4 py-1.5 text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white rounded-lg font-semibold transition cursor-pointer">
            ▶ View Details
          </span>
        </button>
      </div>
      <div className="mt-3 text-[#1e293b] pl-1">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm italic">{genresString}</p>
      </div>
    </div>
  );
};

export default BannerCard;
