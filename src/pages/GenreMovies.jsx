import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../context/movieContext";
import Loader from "./Loader";
import MovieCard from "../components/MovieCard";

const GenreMovies = () => {
  const { genreName } = useParams(); // URL থেকে genre নাম নেওয়া
  const { loading, setLoading } = useContext(MovieContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://moviemaster-pro-server-rho.vercel.app/movies?genre=${genreName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [genreName, setLoading]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9/12 mx-auto pt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        🎬 {genreName} Movies
      </h2>

      {movies.length === 0 ? (
        <p className="text-center text-gray-500">
          No movies found in this genre.
        </p>
      ) : (
        <div className="grid grid-cols-5 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreMovies;
