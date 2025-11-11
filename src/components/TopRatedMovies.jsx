import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/movieContext";
import Loader from "../pages/Loader";

const TopRatedMovies = () => {
  const { movies, loading } = useContext(MovieContext);
  const [topRated, setTopRated] = useState([]);
  // console.log(movies);
  useEffect(() => {
    if (movies && movies.length > 0) {
      const sortedMovie = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 10);
      setTopRated(sortedMovie);
    }
  }, [movies]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="max-w-9/12 mx-auto">
      <div className="flex justify-between items-center my-10">
        <h1 className="text-2xl font-bold">Top Rated Movies</h1>
        <div>View all</div>
      </div>
      <div className="grid grid-cols-5 gap-8 pt-8">
        {topRated.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
