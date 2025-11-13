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
      <div className="md:max-w-9/12 max-w-11/12 mx-auto pt-6">
        <SearchBar
          setSearchedMovies={setSearchedMovies}
          setLoading={setLoading}
          allMovies={movies}
        ></SearchBar>
        <div className="md:grid md:grid-cols-5 grid-cols-1 flex justify-center flex-wrap gap-8 pt-8">
          {searchedMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
