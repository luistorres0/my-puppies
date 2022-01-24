import React, { useState } from "react";
import "./Login.css";

function Login() {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [loginMode, setLoginMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: post to backend for authentication
    console.log(formData);
    console.log(loginMode);
  };

  const handleChange = (e) => {
    const newData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(newData);
  };

  const handleToggleMode = () => {
    setLoginMode((prevState) => !prevState);
    setFormData(initialFormData);
  };

  return (
    <div className="login-container">
      <h3 className="login-header">{loginMode ? "Please Sign In" : "Please Register"}</h3>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form-item">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder={loginMode ? "" : "Enter a valid email"}
          />
        </div>
        <div className="login-form-item">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder={loginMode ? "" : "Password must be at least 6 characters"}
          />
        </div>
        <button className="login-form-button" type="submit">
          {loginMode ? "Login" : "Register"}
        </button>
        <small className="login-form-small">
          {loginMode ? "Or create an account " : "Already registered? Login "}
          <button className="login-form-toggle-button" onClick={handleToggleMode}>
            here
          </button>
        </small>
      </form>
    </div>
  );
}

export default Login;
