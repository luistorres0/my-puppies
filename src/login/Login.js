import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h3 className="login-header">Please Sign In</h3>
      <form className="login-form">
        <div className="login-form-item">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </div>
        <div className="login-form-item">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
        <button className="login-form-button" type="submit">
          Login
        </button>
        <small className="login-form-small">
          Or create an account <Link className="login-form-link" to="/">here</Link>
        </small>
      </form>
    </div>
  );
}

export default Login;
