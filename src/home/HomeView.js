import React, { useContext } from "react";
import "./HomeView.css";
import { AuthContext } from "../common/authContext";

function HomeView() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home View</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomeView;
