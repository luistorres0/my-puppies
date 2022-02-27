import React, { useState } from "react";
import "./Login.css";

function Login() {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [loginMode, setLoginMode] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isLoginInputValid = () => {
    const { email, password } = formData;

    let isValid = true;

    if (!email.match(/^\S+@\S+$/)) {
      setEmailError(true);
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError(true);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);

    if (!isLoginInputValid()) {
      return;
    }

    if (loginMode) {
      // Authenticate
      try {
        const response = await fetch("http://localhost:5000/users/authenticate", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        });

        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        });

        await response.json();
      } catch (error) {
        console.log(error);
      }
    }
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
            type="input"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder={loginMode ? "" : "Enter a valid email"}
          />
          <small className={emailError ? "login-form-input-error show" : "login-form-input-error"}>
            Please enter a valid email
          </small>
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
          <small
            className={passwordError ? "login-form-input-error show" : "login-form-input-error"}
          >
            Password must contain at least 6 characters
          </small>
        </div>
        <button className="login-form-button" type="submit">
          {loginMode ? "Login" : "Register"}
        </button>
        <small className="login-form-small">
          {loginMode ? "Or create an account " : "Already registered? Login "}
          <button className="login-form-toggle-button" type="button" onClick={handleToggleMode}>
            here
          </button>
        </small>
      </form>
    </div>
  );
}

export default Login;
