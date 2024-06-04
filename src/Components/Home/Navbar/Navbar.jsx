import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/wowfare-blue.svg";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [userDetails, setUserDetails] = useState("");

  const fetchUserDetail = async () => {
    if (localStorage.getItem("token")) {
      fetchUserDetailApi();
    }
  };

  function fetchUserDetailApi() {
    try {
      fetch(`http://localhost:8000/api/v1/user`, {
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserDetails(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error("Error in user Fetching.", error);
    }
  }

  useEffect(() => {
    fetchUserDetail();
  }, []);

  // if (!userDetails) {
  //   return <div>Tora mai k chodo..</div>;
  // }

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
          <div className="nav-login">
            {localStorage.getItem("token") ? (
              ""
            ) : (
              <Link to={"/login"}>
                <button
                  className="btn custom-btn custom-login-btn"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            )}
          </div>

          {localStorage.getItem("token") ? (
            <div className="dropdown">
              <button className="btn custom-btn dropbtn">
                <FaUserCircle />
              </button>

              <div className="dropdown-content">
                <a href="#link 1" className="d-flex align-items-center gap-2">
                  <IoCall />
                  {userDetails.first_name}
                </a>
                <a href="#link 2" className="d-flex align-items-center gap-2">
                  <MdEmail />
                  {userDetails.email}
                </a>
                <a href="#link 3" className="d-flex align-items-center gap-1">
                  <div className="nav-login">
                    <button
                      className="btn custom-btn custom-login-btn"
                      style={{ border: "1px solid gray" }}
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location.replace("/");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
