import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../context/movieContext";
import Loader from "./Loader";
import MovieCard from "../components/MovieCard";

const GenreMovies = () => {
  const { genreName } = useParams();
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
    <div className="max-w-11/12 md:max-w-9/12 mx-auto pt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        🎬 {genreName} Movies
      </h2>

      {movies.length === 0 ? (
        <p className="text-center text-gray-500">
          No movies found in this genre.
        </p>
      ) : (
        <div className="md:grid md:grid-cols-5 grid-cols-1 flex justify-center flex-wrap gap-8 pt-8">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenreMovies;
