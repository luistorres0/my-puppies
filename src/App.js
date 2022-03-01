import "./App.css";
import HomeView from "./home/HomeView";
import LoginView from "./login/LoginView";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const login = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/users/authenticate", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      const data = await response.json();
      const newToken = data.data.token;
      setToken(newToken);
      navigate("/", { replace: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      const data = await response.json();
      const newToken = data.data.token;
      setToken(newToken);
      navigate("/", { replace: "/" });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <HomeView /> : <Navigate to="auth" />}></Route>
        <Route path="auth" element={<LoginView login={login} signup={signup} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
