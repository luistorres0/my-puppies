import React from "react";
import "./Footer.css";

const Footer = () => {
    return <div className="footer">
        Copyright &copy; {new Date().getFullYear()}
    </div>
}

export default Footer;