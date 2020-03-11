import React from "react";
import "./Header.css";
import icon from "./icon.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={icon} alt="Logo"></img>
      <h1 className="title">Umfragy</h1>
    </header>
  );
}

export default Header;
