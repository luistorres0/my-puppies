import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h3>Login</h3>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
