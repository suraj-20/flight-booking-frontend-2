import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/wowfare-blue.svg";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

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
          <Link to={"/mytrips"}>
            <button className="btn custom-btn custom-login-btn" type="submit">
              My Trips
            </button>
          </Link>
          <div className="dropdown">
            <button className="btn custom-btn dropbtn">Contact Us</button>
            <div className="dropdown-content">
              <a href="#link 1" className="d-flex align-items-center gap-2">
                <IoCall />
                8287146841
              </a>
              <a href="#link 2" className="d-flex align-items-center gap-2">
                <MdEmail />
                suraaj0015@gmail.com
              </a>
              <a href="#link 3" className="d-flex align-items-center gap-2">
                <FaFilePdf />
                Corporate Enquiry
              </a>
            </div>
          </div>
          <Link to={"/login"}>
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
