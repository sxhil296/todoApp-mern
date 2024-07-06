import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login to Continue</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="todo123@gamil.com" />
        <label htmlFor="password">Password</label>
        <input type="password" name="passowrd" />
        <button>Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span>
          <Link to="/register">Signup</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
