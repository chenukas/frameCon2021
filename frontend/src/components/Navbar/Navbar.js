import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <div className="nav" >
      <div className="navbarContainer">
        <h3 to="/" className="navLogo">
          <img style={{ width: "2.2vw" }} src={logo} alt="logo" />
          &nbsp; ICAF
        </h3>
        <div className="mobileIcon" onClick={toggle}>
          <p className="faBars"></p>
        </div>
        <div className="navMenu">
          <div className="navItem">
            <p className="navLinks" href="#aboutus" to="">
              About
            </p>
          </div>
          <div className="navItem">
            <p className="navLinks" to="">
              Discover
            </p>
          </div>
          <div className="navItem">
            <p className="navLinks" to="">
              Services
            </p>
          </div>
          <div className="navItem">
            <Link className="navLinks" style={{textDecoration:"none"}} to="/register">
              Sign Up
            </Link>
          </div>
          <div className="navBtn">
<<<<<<< HEAD
            <a className="navBtnLink" href="/login" style={{textDecoration:"none", marginBottom:20}}>
=======
            <p className="navBtnLink" to="/signin">
>>>>>>> 64acb0d4f76e8ecdcfd1588d80bb1a3dd868e914
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
