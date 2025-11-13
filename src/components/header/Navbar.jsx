import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/movie-logo.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import profileIcon from "../../assets/profile-icon.png";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Log out successful");
        setUser(null);
        navigate("/sign-in");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const linksCssClass =
    "px-3 py-2 font-medium rounded hover:underline cursor-pointer";
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linksCssClass} ${
              isActive
                ? "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
                : ""
            }`
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${linksCssClass} ${
              isActive
                ? "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
                : ""
            }`
          }
        >
          ALL MOVIES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-collection"
          className={({ isActive }) =>
            `${linksCssClass} ${
              isActive
                ? "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
                : ""
            }`
          }
        >
          MY COLLECTION
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/add-movie"
          className={({ isActive }) =>
            `${linksCssClass} ${
              isActive
                ? "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
                : ""
            }`
          }
        >
          ADD MOVIES
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-watchlist"
          className={({ isActive }) =>
            `${linksCssClass} ${
              isActive
                ? "text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
                : ""
            }`
          }
        >
          MY WATCHLIST
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#f8fafc] text-[#1e293b] dark:bg-[#121212] dark:text-white shadow">
      <div className="navbar lg:w-9/12 md:w-11/12 mx-auto px-0 lg:px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu  bg-white dark:bg-black menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center md:text-2xl text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-pink-500"
            >
              <div className="h-16 pb-2 md:block hidden">
                <img className="h-full" src={logo} alt="" />
              </div>{" "}
              Film Review
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4 px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={(e) => handleTheme(e.target.checked)}
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off md:h-10 h-6 md:w-10 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on md:h-10 h-6 md:w-10 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {user ? (
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "font-semibold text-[#7100d6]" : "hover:underline"
                } relative inline-block group `
              }
            >
              <img
                className="md:h-12 md:w-12 h-10 w-10 object-cover rounded-full cursor-pointer"
                src={user?.photoURL || profileIcon}
                alt="profile pic"
              />

              <span
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 
                       bg-gray-800 text-white text-xs rounded px-2 py-1 
                       opacity-0 transition-opacity duration-300 
                       pointer-events-none
                       group-hover:opacity-100
                       whitespace-nowrap z-10"
              >
                {user?.displayName || "My Profile"}
              </span>
            </NavLink>
          ) : (
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                `font-semibold ${
                  isActive ? "font-semibold" : "hover:underline"
                }`
              }
            >
              Sign In
            </NavLink>
          )}

          {user ? (
            <NavLink
              onClick={handleLogOut}
              className={({ isActive }) =>
                `text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm md:px-5 px-4 md:py-2.5 py-2 text-center me-2 mb-2 ${
                  isActive
                    ? "font-semibold bg-linear-to-r from-blue-600 to-purple-600 text-white"
                    : "text-black"
                }`
              }
            >
              Log Out
            </NavLink>
          ) : (
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                `text-white bg-linear-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm md:px-5 px-4 md:py-2.5 py-2 text-center me-2 mb-2" ${
                  isActive
                    ? "font-semibold bg-linear-to-r from-indigo-900 to-indigo-900 text-white"
                    : ""
                }`
              }
            >
              Sign Up
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//<button class="relative z-0 h-12 rounded-full bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">Hover me</button>
