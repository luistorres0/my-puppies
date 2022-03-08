import "./App.css";
import HomeView from "./home/HomeView";
import LoginView from "./login/LoginView";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import NotFound from "./common/NotFound";
import { AuthContext } from "./common/authContext";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);

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
      } else {
        throw res.error;
      }
    } catch (error) {
      window.alert(error + ". Please try again.");
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserEmail(null);
    setUserId(null);
    navigate("auth");
  }, [navigate]);

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
        <Route path="*" element={<NotFound />}></Route>
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
