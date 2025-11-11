import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { ResetPassword, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);

  const handleReset = (e) => {
    e.preventDefault();
    ResetPassword(email)
      .then(() => {
        setLoading(false);
        toast.success("Password reset link sent! Check your email.");
        window.open("https://mail.google.com/", "_blank");
      })
      .then((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Forgot your password?
          </h2>
          <p className="text-gray-500">Your password will be reset by email.</p>
        </div>

        <form onSubmit={handleReset}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Rest Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/sign-in"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Back to log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
