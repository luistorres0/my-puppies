import "./App.css";
import LoginView from "./login/LoginView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginView />} />
      </Routes>
    </div>
  );
}

export default App;
