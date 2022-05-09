import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar-div">

        <Link to="/" className="nav__element">Home</Link> 
        <Link to="/landings" className="nav__element">Landings</Link>
        <Link to="/neas" className="nav__element">Neas</Link>
        
    
    </div>
  )
};

export default Navbar;
