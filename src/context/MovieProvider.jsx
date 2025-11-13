import React, { useEffect, useState } from "react";
import { MovieContext } from "./movieContext";

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://moviemaster-pro-server-rho.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);
  const moviesInfo = { movies, setMovies, loading, setLoading };
  return <MovieContext value={moviesInfo}>{children}</MovieContext>;
};

export default MovieProvider;
