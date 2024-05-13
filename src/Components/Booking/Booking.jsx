import React from "react";
import "./Booking.css";
import { PiAirplaneTiltFill } from "react-icons/pi";

import ContactForm from "./ContactForm/ContactForm";
import TravellerForm from "./TravellerForm/TravellerForm";
import Discound from "./Discound/Discound";
import Coupon from "../Coupon/Coupon";
import FareBreakup from "./FareBreakup/FareBreakup";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="booking-container ">
      <div className="upper-content-container"></div>
      <div className="lower-content-container d-flex align-items-start justify-content-between">
        <div className="left-content-container d-flex gap-3">
          <div className="flight-details-container">
            <div className="flight-details" style={{ padding: "1rem" }}>
              <div className="details-heading">
                <h4 className="d-flex align-items-center gap-2">
                  <PiAirplaneTiltFill />
                  Flight Details
                </h4>
              </div>
              <div className="flight-card-container">
                <ul className="list-items d-flex justify-content-between">
                  <li className="list-link d-flex gap-2">
                    <img src="" alt="" width={50} height={50} />
                    <h5>
                      IndiGo <br /> <p>SG-4345</p>
                    </h5>
                  </li>
                  <li className="list-link">
                    <p>
                      23:00 <br /> New Delhi
                    </p>
                  </li>
                  <li className="list-link">
                    <p>
                      23:00 <br /> New Delhi
                    </p>
                  </li>
                  <li className="list-link">
                    <p>
                      23:00 <br /> 0 stop
                    </p>
                  </li>
                  <li className="list-link">
                    <h6 style={{ color: "red" }}>₹ 3500</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="traveller-details-container">
            <TravellerForm />
          </div>
          <div className="contact-information-container">
            <ContactForm />
          </div>
          <div className="previous-or-submit-btn d-flex align-items-center justify-content-center gap-3">
            <Link to={"/flightdetails"}>
              <button
                type="submit"
                className="btn primary-btn"
                style={{ background: "white" }}
              >
                Previous
              </button>
            </Link>
            <Link to={"#"}>
              <button
                type="submit"
                className="btn secondary-btn"
                style={{ background: "#034", color: "white" }}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
        <div className="right-content-container d-flex gap-3">
          <div className="fare-breakup-container">
            <FareBreakup />
          </div>
          <div className="discount-offer-container">
            <Discound />
          </div>
          <div className="coupons-container">
            <Coupon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
