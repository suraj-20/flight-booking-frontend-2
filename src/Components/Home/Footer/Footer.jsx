import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import image from "../../../Assets/wowfare-blue.svg";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer-container d-lg-flex ">
        <div className="upper-content-container d-lg-flex d-grid align-items-start justify-content-between">
          <div className="footer-logo">
            <ul className="footer-link d-flex gap-3">
              <img src={image} alt="" />
            </ul>
          </div>
          <div className="footer-links">
            <ul className="footer-link d-flex gap-3">
              <Link className="list-items">
                <li>Help</li>
              </Link>
              <Link className="list-items">
                <li>Privacy Setting</li>
              </Link>
              <Link className="list-items">
                <li>Login</li>
              </Link>
            </ul>
          </div>
          <div className="footer-links">
            <ul className="footer-link d-flex gap-3">
              <Link className="list-items">
                <li>Cookie policy</li>
              </Link>
              <Link className="list-items">
                <li>Privacy policy</li>
              </Link>
              <Link className="list-items">
                <li>Terms of service</li>
              </Link>
              <Link className="list-items">
                <li>Company Details</li>
              </Link>
            </ul>
          </div>
          <div className="footer-links">
            <ul className="footer-link d-none d-lg-flex gap-3">
              <Link className="list-items">
                <li>Explore</li>
              </Link>
              <Link className="list-items">
                <li>Company</li>
              </Link>
              <Link className="list-items">
                <li>Partners</li>
              </Link>
              <Link className="list-items">
                <li>Trips</li>
              </Link>
              <Link className="list-items">
                <li>International Sites</li>
              </Link>
            </ul>
          </div>
        </div>
        <div
          className="horizontal-line w-100"
          style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.495)", margin: "1rem 0rem" }}
        ></div>
        <div className="copyright-content">
          <p>
            Cheap flight booking from anywhere, to everywhere <br />© Skyscanner
            Ltd 2002 – 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
