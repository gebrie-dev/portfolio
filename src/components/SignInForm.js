import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "example@example.com" && password === "password") {
      console.log("Successfully signed in");
      setErrorMessage("");
      // You can redirect or set user state here
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm">
          <a href="#!" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-center mb-4 text-gray-500">
            <span className="border-t w-1/5"></span>
            <span className="mx-2 text-sm">or continue with</span>
            <span className="border-t w-1/5"></span>
          </div>

          <div className="flex gap-3 justify-center">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
              <i className="fab fa-google"></i>
              Google
            </button>
            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#!" className="text-blue-600 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
