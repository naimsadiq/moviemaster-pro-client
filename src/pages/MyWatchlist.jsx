import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Loader from "./Loader";
import WatchListCard from "../components/WatchListCard";

const MyWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/my-watchlist?email=${user?.email}`, {
      // headers: {
      //   authorization: `Bearer ${user.accessToken}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-[#f5f3ff] text-[#6992f3] min-h-screen">
      <div className="max-w-9/12 mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          My Watchlist
        </h2>
        {movies.length === 0 ? (
          <div className="flex flex-col items-center justify-start mt-20 text-gray-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076509.png"
              alt="Empty collection"
              className="w-32 h-32 mb-4 opacity-70"
            />
            <p className="text-lg font-medium">
              No movies found in your watchlist
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Browse Movies
            </button>
          </div>
        ) : (
          <div className="pt-8 flex flex-col-reverse gap-7">
            {movies.map((movie) => (
              <WatchListCard
                key={movie._id}
                setMovies={setMovies}
                movie={movie}
              ></WatchListCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWatchlist;
