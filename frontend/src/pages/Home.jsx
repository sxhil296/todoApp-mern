import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1720121990316-b74068f20a3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <h1 className="text-6xl font-bold mb-4">
        Welcome to Your To-Do App
      </h1>
      <p className="text-2xl font-medium mb-8">Stay Organized and Productive!</p>
      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-blue-500 text-white py-2 px-6 rounded-sm hover:bg-blue-700 transition duration-300"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-green-500 text-white py-2 px-6 rounded-sm hover:bg-green-700 transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
