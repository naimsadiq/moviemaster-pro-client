import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/movieContext";
import MovieCard from "./MovieCard";
import { Link } from "react-router";

const LatestMovies = () => {
  const { movies, loading } = useContext(MovieContext);
  const [latestMovies, setLatestMovies] = useState([]);
  // console.log(movies);
  useEffect(() => {
    if (movies && movies.length > 0) {
      const sortedMovie = [...movies]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setLatestMovies(sortedMovie);
    }
  }, [movies]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="md:max-w-9/12 max-w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Latest Movies</h1>
        <Link to={"/movies"} className="pr-0 md:pr-6 hover:underline">
          View all
        </Link>
      </div>
      <div className="md:grid md:grid-cols-5 grid-cols-1 flex justify-center flex-wrap gap-8 pt-8">
        {latestMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
