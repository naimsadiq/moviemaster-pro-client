import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Loader from "./Loader";
import movieCamera from "../assets/movie-camera.png";
import WatchListCard from "../components/WatchListCard";

const MyWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://moviemaster-pro-server-rho.vercel.app/my-watchlist?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="min-h-screen">
      <div className="md:max-w-9/12 max-w-11/12 mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          My Watchlist
        </h2>
        {movies.length === 0 ? (
          <div className="flex flex-col items-center justify-start mt-20 text-gray-500">
            <img
              src={movieCamera}
              alt="Empty collection"
              className="w-32 h-32 mb-4 opacity-70"
            />
            <p className="text-lg font-medium">
              No movies found in your watchlist
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white rounded-lg font-semibold transition cursor-pointer"
            >
              Browse Movies
            </button>
          </div>
        ) : (
          <div className="pt-8 flex flex-col-reverse gap-7">
            {movies.map((movie) => (
              <WatchListCard
                key={movie._id}
                setMovies={setMovies}
                movie={movie}
              ></WatchListCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWatchlist;
