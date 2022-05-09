import React from "react";
import Nav from './Navbar/Navbar';
import logo from "./../../assets/logo.png";

const Header = () => {
  return <div className="header">
  <img src={logo} alt="nasa logo" className="nasa-logo" />
  <Nav />
</div>;
};

export default Header;
