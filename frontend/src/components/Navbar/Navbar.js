import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const logout = (e) => {
    console.log("hiiii");
    localStorage.removeItem("logUserId");
    localStorage.removeItem("logUserName");
  };

  return (
    <div className="nav">
      <div className="navbarContainer">
        <Link to="/" style={{ textDecoration: 'none'}}>
        <h3 className="navLogo">
          <img style={{ width: "2.2vw" }} src={logo} alt="logo" />
          &nbsp; ICAF
        </h3>
        </Link>
        <div className="mobileIcon" onClick={toggle}>
          <p className="faBars"></p>
        </div>
        <div className="navMenu">
          <div className="navItem"  href="#about">
            <p className="navLinks">
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
            <Link
              className="navLinks"
              style={{ textDecoration: "none" }}
              to="/register"
            >
              Sign Up
            </Link>
          </div>
          <div className="navBtn">
            {localStorage.getItem("logUserId") == null ? (
              <a
                className="navBtnLink"
                href="/login"
                style={{ textDecoration: "none" }}
              >
                Sign In
              </a>
            ) : (
              <a
                className="navBtnLink"
                style={{ textDecoration: "none" }}
                href="/"
                onClick={logout}
              >
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
