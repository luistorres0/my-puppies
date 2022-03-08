import React, { useContext } from "react";
import "./NavBar.css";
import logo from "../images/logo.jpg";
import { AuthContext } from "../common/authContext";

const NavBar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <img className="logo" src={logo} alt="logo" />
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default NavBar;
