import "./App.css";
import HomeView from "./home/HomeView";
import LoginView from "./login/LoginView";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./common/authContext";

let logoutTimer;

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("puppiesUserData"));
    if (userData && userData.token && new Date(userData.expiration) > new Date()) {
      setToken(userData.token);
      setUserEmail(userData.email);
      setUserId(userData.userId);
      setTokenExpirationDate(new Date(userData.expiration));
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserEmail(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("puppiesUserData");
    navigate("auth");
  }, [navigate]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  const login = useCallback(async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      const status = response.status;
      const res = await response.json();

      if (status === 200) {
        setToken(res.data.token);
        setUserEmail(res.data.email);
        setUserId(res.data.userId);
        const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem(
          "puppiesUserData",
          JSON.stringify({ ...res.data, expiration: tokenExpirationDate.toISOString() })
        );
      } else {
        throw res.error;
      }
    } catch (error) {
      window.alert(error + ". Please try again.");
    }
  }, []);

  const signup = useCallback(async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      const status = response.status;
      const res = await response.json();

      if (status === 201) {
        setToken(res.data.token);
        setUserEmail(res.data.email);
        setUserId(res.data.userId);
        const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem(
          "puppiesUserData",
          JSON.stringify({ ...res.data, expiration: tokenExpirationDate.toISOString() })
        );
      } else {
        throw res.error;
      }
    } catch (error) {
      window.alert(error + ". Please try again.");
    }
  }, []);

  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" element={<HomeView userEmail={userEmail} userId={userId} />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="auth" element={<LoginView />}></Route>
        <Route path="*" element={<Navigate to="auth" />}></Route>
      </>
    );
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ token, login, signup, logout }}>
        <Routes>{routes}</Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
