import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Sign in to your account
        </h2>

        <form onSubmit={"handleSubmit"} className="space-y-4">
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
                type="text"
                name="password"
                placeholder="Enter your password"
                className="w-full py-2 outline-none"
                required
              />
              <button
                onClick={"handleTogglePasswordShow"}
                className="cursor-pointer top-3 right-5 absolute"
              >
                {/* {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} */}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-sm">
              <a
                onClick={"handleForgotPassword"}
                href="#"
                className="font-medium text-indigo-600 hover:underline hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white py-2 rounded-lg font-semibold transition cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-6 mb-4 flex items-center">
          <div className="grow border-t border-gray-300"></div>
          <span className="shrink mx-4 text-gray-500 text-sm">
            Or continue with
          </span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        <div className="">
          <button
            onClick={"handleSignInWithGoogle"}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out cursor-pointer"
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            Google
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/sign-up")}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
