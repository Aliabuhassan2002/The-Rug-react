import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 w-96 border border-white/20">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">Register</h2>
        
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 bg-transparent border-b border-white/50 text-white focus:outline-none focus:border-white"
            />
          </div>
        <Link to={"/"}>
          <button
            type="submit"
            className="w-full py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
            Register
          </button>
              </Link>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account? <a href="#" className="underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
