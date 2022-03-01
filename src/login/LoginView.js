import React from "react";
import Login from "./Login";
import "./LoginView.css";

function LoginView({ login, signup }) {
  return (
    <div className="login-view">
      <Login login={login} signup={signup} />
    </div>
  );
}

export default LoginView;
