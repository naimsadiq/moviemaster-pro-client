import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

const WatchListCard = ({ movie, setMovies }) => {
  const {
    title,
    rating,
    image_url,
    genres,
    _id,
    overview,
    runtime,
    release_year,
  } = movie;
  // console.log(movie);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/my-watchlist/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies((prevMovies) => prevMovies.filter((m) => m._id !== id));
        console.log(data);
      });
  };
  return (
    <div className="shadow-md rounded-md p-5 bg-white text-gray-800">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-3">
            <div className="h-26">
              <img className="h-full" src={image_url} alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">{title}</h3>
              <p>
                <span>{release_year}</span> <span>{runtime}</span>{" "}
                <span className="flex gap-3 items-center">
                  {" "}
                  <FaStarHalfAlt className="text-yellow-300" /> {rating}
                </span>
              </p>
              <p className="font-medium">
                Genres:{" "}
                <span className="text-sm italic">{genres.join(", ")}</span>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p>{overview}</p>
          </div>
        </div>
        <div>
          {" "}
          <button
            onClick={() => handleDelete(movie._id)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Remove
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
