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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
    ],
  },
]);

export default router;
