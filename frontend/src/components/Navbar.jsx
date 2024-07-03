import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white font-poppins">
      <nav className="max-w-[1180px] mx-auto text-black min-h-[60px] flex justify-between items-center">
        <h1 className="font-medium text-2xl">Todo App</h1>
        <div className="flex gap-4 font-medium text-xl">
          <button> LogIn</button>
          <button> LogOut </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
