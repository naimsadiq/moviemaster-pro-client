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
import { PrivateRoute } from "./PrivateRoute";
import PageNotFound from "../pages/PageNotFound";

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
        errorElement: <PageNotFound />,
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "add-movie",
        element: (
          <PrivateRoute>
            <AddMovieForm></AddMovieForm>
          </PrivateRoute>
        ),
      },
      {
        path: "my-collection",
        element: (
          <PrivateRoute>
            <MyCollection></MyCollection>
          </PrivateRoute>
        ),
      },
      {
        path: "my-watchlist",
        element: (
          <PrivateRoute>
            <MyWatchlist></MyWatchlist>
          </PrivateRoute>
        ),
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },

      {
        path: "update-movie/:id",
        errorElement: <PageNotFound />,
        element: (
          <PrivateRoute>
            <UpdateMovieDetails></UpdateMovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/movies/${params.id}`),
      },

      {
        path: "genre/:genreName",
        element: <GenreMovies></GenreMovies>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
