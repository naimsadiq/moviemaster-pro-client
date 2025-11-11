import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/movie-logo.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import profileIcon from "../../assets/profile-icon.png";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
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
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
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
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
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
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
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
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
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
    <nav className="bg-[#f8fafc] text-[#1e293b] dark:bg-black shadow">
      <div className="navbar md:w-9/12 mx-auto">
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
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center md:text-2xl text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
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
          {user ? (
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${
                  isActive ? "font-semibold text-[#7100d6]" : "hover:underline"
                } relative inline-block group `
              }
            >
              <img
                className="h-12 w-12 object-cover rounded-full cursor-pointer"
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
                `text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ${
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
                `text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" ${
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
