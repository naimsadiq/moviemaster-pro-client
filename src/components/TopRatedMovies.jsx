import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/movieContext";
import Loader from "../pages/Loader";
import { Link } from "react-router";

const TopRatedMovies = () => {
  const { movies, loading } = useContext(MovieContext);
  const [topRated, setTopRated] = useState([]);
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
    <div className="md:max-w-11/12 lg:max-w-9/12 max-w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Top Rated Movies</h1>
        <Link to={"/movies"} className="pr-0 md:pr-6 hover:underline">
          View all
        </Link>
      </div>
      <div className=" lg:grid lg:grid-cols-5 grid-cols-1 flex justify-center flex-wrap gap-8 md:gap-14 pt-8">
        {topRated.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
