import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "200px" }}>
        "{location.pathname}" was not found
      </h1>
    </>
  );
};

export default NotFound;
