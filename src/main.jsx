import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/Router.jsx";
import MovieProvider from "./context/MovieProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MovieProvider>
        <RouterProvider router={router}></RouterProvider>
      </MovieProvider>
    </AuthProvider>
  </StrictMode>
);
