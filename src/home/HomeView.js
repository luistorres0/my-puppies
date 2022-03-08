import React, { useContext } from "react";
import "./HomeView.css";
import { AuthContext } from "../common/authContext";
import NavBar from "./NavBar";
import Footer from "./Footer";

function HomeView({ userEmail, userId }) {
  const { logout, token } = useContext(AuthContext);

  const deleteAccountHandler = async () => {
    try {
      await fetch(`http://localhost:5000/users/${userId}`, {
        method: "delete",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-view">
      <NavBar />
      <h1 className="header">Welcome to My Puppies</h1>
      <Footer />
    </div>
  );
}

export default HomeView;
