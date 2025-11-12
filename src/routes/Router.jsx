import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AllMovies from "../pages/AllMovies";
import MovieDetails from "../components/MovieDetails";
import AddMovieForm from "../pages/AddMovieForm";
import MyCollection from "../pages/MyCollection";
import MyWatchlist from "../pages/MyWatchlist";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateMovieDetails from "../components/UpdateMovieDetails";
import Loader from "../pages/Loader";
import GenreMovies from "../pages/GenreMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "sign-in",
        element: <Login></Login>,
      },
      {
        path: "movies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "movie-details/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "add-movie",
        element: <AddMovieForm></AddMovieForm>,
      },
      {
        path: "my-collection",
        element: <MyCollection></MyCollection>,
      },
      {
        path: "my-watchlist",
        element: <MyWatchlist></MyWatchlist>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },

      {
        path: "update-movie/:id",
        element: <UpdateMovieDetails></UpdateMovieDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
      },

      {
        path: "genre/:genreName",
        element: <GenreMovies></GenreMovies>,
      },
    ],
  },
]);

export default router;
