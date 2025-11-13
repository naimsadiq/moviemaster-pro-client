import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CollectionCard = ({ movie, setMovies }) => {
  const navigate = useNavigate();
  const {
    title,
    rating,
    image_url,
    genres,
    _id,
    overview,
    runtime,
    release_year,
  } = movie;

  const handleEdit = (id) => {
    navigate(`/update-movie/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Deleted!",
      icon: "success",
      draggable: true,
    });
    console.log(id);
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
      });
  };
  return (
    <div className="shadow-md rounded-md p-5 bg-white text-gray-800 dark:bg-[#121128] dark:text-white">
      <div className="lg:grid lg:grid-cols-8">
        <div className="lg:col-span-6">
          <div className="flex gap-3">
            <div className="h-26">
              <img className="h-full" src={image_url} alt="" />
            </div>
            <div>
              <h3 className="font-semibold text-xl">{title}</h3>
              <p>
                <span>{release_year}</span> <span>{runtime}</span>{" "}
                <span className="flex gap-3 items-center">
                  {" "}
                  <FaStarHalfAlt className="text-yellow-300" /> {rating}
                </span>
              </p>
              <p className="font-medium">
                Genres:{" "}
                <span className="text-sm italic">{genres.join(", ")}</span>
              </p>
            </div>
          </div>
          <div className="mt-5 md:mb-0 mb-5">
            <p>{overview}</p>
          </div>
        </div>
        <div className="col-span-2 text-right">
          <button
            onClick={() => handleEdit(movie._id)}
            className="px-4 py-2 ml-7 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(movie._id)}
            className="px-4 py-2 ml-7 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
