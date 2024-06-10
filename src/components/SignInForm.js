import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    if (email === "example@example.com" && password === "password") {
      // Successfully signed in, you can redirect or set state here
      console.log("Successfully signed in");
    } else {
      // Failed to sign in, display error message
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 px-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl text-center font-semibold mb-4">Sign In To Your Acount</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </form>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      <div className="mt-4 flex justify-between items-center">
        <a href="#!" className="text-blue-500 hover:underline">Forgot Password?</a>
        <div className="flex gap-2">
          {/* Add Google Sign-In */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <i className="fab fa-google mr-2"></i>Sign in with Google
          </button>
          {/* Add Facebook Sign-In */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <i className="fab fa-facebook-f mr-2"></i>Sign in with Facebook
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-700">Don't have an account? <a href="#!" className="text-blue-500 hover:underline">Register</a></p>
      </div>
    </div>
  );
};

export default SignIn;
