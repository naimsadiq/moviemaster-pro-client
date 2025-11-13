import React, { useContext, useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Navigate, useNavigate, useParams } from "react-router";
import Loader from "../pages/Loader";
import { MovieContext } from "../context/movieContext";
import { AuthContext } from "../context/AuthContext";
const MovieDetails = () => {
  const { id } = useParams();
  const { setMovies } = useContext(MovieContext);
  const { user } = useContext(AuthContext);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://moviemaster-pro-server-rho.vercel.app/movie-details/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.result);
        setLoading(false);
      });
  }, [id, user]);

  const modalRef = useRef(null);
  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const {
    created_by,
    image_url,
    overview,
    rating,
    title,
    trailer_url,
    genres,
  } = movie;

  const handleEdit = (id) => {
    navigate(`/update-movie/${id}`);
  };

  const handleDelete = (id) => {
    fetch(`https://moviemaster-pro-server-rho.vercel.app/movie/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies((prevMovies) => prevMovies.filter((m) => m._id !== id));
        console.log(data);
        navigate("/movies");
      });
  };

  const handleWatchlist = (movie) => {
    const movieData = {
      title: movie.title,
      release_year: movie.release_year,
      rating: movie.rating,
      genres: movie.genres,
      overview: movie.overview,
      image_url: movie.image_url,
      trailer_url: movie.trailer_url,
      release_date: movie.release_date,
      runtime: movie.runtime,
      language: movie.language,
      country: movie.country,
      download: movie.download,
      created_by: movie.created_by,
      watchlist_by: user?.email,
      created_at: movie.created_at,
    };
    fetch(
      `https://moviemaster-pro-server-rho.vercel.app/watchlist/${movie._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-[#200b0b] min-h-8/12">
      <div className="max-w-9/12 mx-auto px-4">
        <div className="flex gap-8 py-20">
          <div className="h-[470px]">
            <img className="h-full rounded-md" src={image_url} alt="" />
          </div>
          <div>
            <div className="mb-5">
              <h1 className="text-white font-bold text-4xl ">{title}</h1>
              <div className="flex items-center gap-2 text-[#FFFFFF90]">
                IMDb RATING : <FaStar className="text-yellow-400" />{" "}
                <span className="font-semibold text-white">{rating}</span>/10
              </div>
              <div className="text-white ">
                <span className="font-medium text-lg"> Genre:</span>{" "}
                {genres.join(", ")}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-[#032541] rounded-full text-white flex items-center justify-center">
                <CiHeart className="text-xl" />
              </div>
              <div className="h-10 w-10 bg-[#032541] rounded-full text-white flex items-center justify-center">
                <IoCloudDownloadOutline className="text-xl" />
              </div>
              <div
                onClick={handleOpenModal}
                className=" text-white flex items-center gap-2 justify-center"
              >
                <FaPlay /> Play Trailer
              </div>
            </div>
            <div className="text-white text-xl font-semibold my-5">
              Overview
              <p className="text-[16px]">{overview}</p>
            </div>
            <div className="text-white text-sm italic">
              <span className="font-semibold">Created_by :</span> {created_by}
            </div>

            <div className="text-white flex gap-5 mt-7">
              <div className="text-center">
                <span className="font-bold">0</span>
                <div className="text-sm">Likes</div>
              </div>
              <div className="text-center">
                <span className="font-bold">0</span>
                <div className="text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <span className="font-bold">0</span>
                <div className="text-sm">Total views</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              {user?.email === created_by && (
                <>
                  <button
                    onClick={() => handleEdit(movie._id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(movie._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </>
              )}

              <button
                onClick={() => handleWatchlist(movie)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <iframe
            width="940"
            height="600"
            src={trailer_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MovieDetails;
