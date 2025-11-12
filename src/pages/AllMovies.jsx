import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { MovieContext } from "../context/movieContext";
import MovieCard from "../components/MovieCard";
import Loader from "./Loader";

const AllMovies = () => {
  const { movies, loading, setLoading } = useContext(MovieContext);
  const [searchedMovies, setSearchedMovies] = useState([]);
  // console.log(movies);

  useEffect(() => {
    setSearchedMovies(movies);
  }, [movies]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="max-w-9/12 mx-auto pt-6">
        <SearchBar
          setSearchedMovies={setSearchedMovies}
          setLoading={setLoading}
          allMovies={movies}
        ></SearchBar>
        <div className="grid grid-cols-5 gap-8 py-8">
          {searchedMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
