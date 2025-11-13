import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "./Loader";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";
import movieCamera from "../assets/movie-camera.png";
import CollectionCard from "../components/CollectionCard";

const MyCollection = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://moviemaster-pro-server-rho.vercel.app/my-collection?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
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
    <div className="max-w-9/12 mx-auto py-10 h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Collection</h2>
      {movies.length === 0 ? (
        <div className="flex flex-col items-center justify-start mt-20 text-gray-500">
          <img
            src={movieCamera}
            alt="Empty collection"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-lg font-medium">
            No movies found in your collection
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white rounded-lg font-semibold transition cursor-pointer rounded-lg hover:bg-blue-700 transition"
          >
            Browse Movies
          </button>
        </div>
      ) : (
        <div className="pt-8 flex flex-col-reverse gap-7">
          {movies.map((movie) => (
            <CollectionCard
              key={movie._id}
              setMovies={setMovies}
              movie={movie}
            ></CollectionCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;
