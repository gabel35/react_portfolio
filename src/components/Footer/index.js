import React from "react";
import "./style.css";
import Logo from "../Assets/bella_icon.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="reverse" type="image/png" src={Logo} alt="my icon"/>
      <span>&copy; gabel35, 2021 </span>
      <img className="reg" type="image/png" src={Logo} alt="my icon"/>
    </footer>
  );
}

export default Footer;
