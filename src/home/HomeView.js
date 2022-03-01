import React from "react";
import "./HomeView.css";

function HomeView({logout}) {
  return (
    <div>
      <h1>Home View</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomeView;
