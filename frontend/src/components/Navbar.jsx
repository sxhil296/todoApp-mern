import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-white font-poppins">
      <nav className="max-w-[1180px] mx-auto text-black min-h-[60px] flex justify-between items-center">
        <Link to={'/'} className="font-medium text-2xl">Todo App</Link>
        <div className="flex gap-4 font-medium text-xl">
          <Link to='/login'> LogIn</Link>
          <Link to='/'> LogOut </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
