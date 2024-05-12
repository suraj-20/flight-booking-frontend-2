import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/wowfare-blue.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container d-flex align-item-center justify-content-between w-90">
        <div className="nav-logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-links d-flex align-item-center">
          <Link to={"/"}>
            <button className="btn custom-btn custom-login-btn" type="submit">
              My Trips
            </button>
          </Link>
          <div class="dropdown">
            <button class="btn custom-btn dropbtn">Contact Us</button>
            <div class="dropdown-content">
              <a href="#link 1">Link 1</a>
              <a href="#link 2">Link 2</a>
              <a href="#link 3">Link 3</a>
            </div>
          </div>
          <Link to={"/"}>
            <button className="btn custom-btn custom-login-btn" type="submit">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
