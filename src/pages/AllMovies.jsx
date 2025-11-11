import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import { MovieContext } from "../context/movieContext";
import MovieCard from "../components/MovieCard";
import Loader from "./Loader";

const AllMovies = () => {
  const { movies, loading } = useContext(MovieContext);
  // console.log(movies);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="max-w-9/12 mx-auto pt-6">
        <SearchBar></SearchBar>
        <div className="grid grid-cols-5 gap-8 py-8">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
