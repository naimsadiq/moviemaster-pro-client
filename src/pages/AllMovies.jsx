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
      <div className="lg:max-w-9/12 max-w-11/12 mx-auto py-6">
        <SearchBar
          setSearchedMovies={setSearchedMovies}
          setLoading={setLoading}
          allMovies={movies}
        ></SearchBar>
        <div className="lg:grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2 flex justify-center flex-wrap gap-8 md:gap-14 pt-8">
          {searchedMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
