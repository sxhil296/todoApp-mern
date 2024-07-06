import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register to Continue</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter your name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="todo123@gamil.com" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="passowrd"
          placeholder="Enter your password"
        />
        <button>Register</button>
      </form>
      <p>
        Already have an account?
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
