import { useContext, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser, setLoading } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignOut = (e) => {
    e.preventDefault();
    setError("");
    const displayName = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    if (displayName.trim().length < 5) {
      setErrorName("Name should be more than 5 characters");
      return;
    }

    const length6Pattern = /^.{6,}$/;
    const upperCasePattern = /[A-Z]/;
    const lowerCasePattern = /[a-z]/;

    if (!length6Pattern.test(password)) {
      setError("At least 6 characters required");
      return;
    } else if (!upperCasePattern.test(password)) {
      setError("Add at least one uppercase letter");
      return;
    } else if (!lowerCasePattern.test(password)) {
      setError("Add at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUserProfile(displayName)
          .then(() => {
            // setUser(user);
            console.log(user);
            navigate("/");
            // setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create your account
        </h2>

        <form onSubmit={handleSignOut} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full py-2 outline-none"
                required
              />
            </div>
            {errorName && (
              <p className="text-sm text-red-500 mt-1">{errorName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-2 outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 relative">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full py-2 outline-none"
                required
              />
              <button
                onClick={handleTogglePasswordShow}
                className="cursor-pointer top-3 right-5 absolute"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-500 mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
