import "./App.css";
import HomeView from "./home/HomeView";
import LoginView from "./login/LoginView";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
