import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/movieContext";
import MovieCard from "./MovieCard";

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
    <div className="max-w-9/12 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Latest Movies</h1>
        <div className="pr-6">View all</div>
      </div>
      <div className="grid grid-cols-5 gap-8 pt-8">
        {latestMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
