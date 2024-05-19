import React, { useState } from "react";
import "./Booking.css";
import { PiAirplaneTiltFill } from "react-icons/pi";

import ContactForm from "./ContactForm/ContactForm";
import TravellerForm from "./TravellerForm/TravellerForm";
import Discound from "./Discound/Discound";
import Coupon from "./Coupon/Coupon";
import FareBreakup from "./FareBreakup/FareBreakup";
import { Link } from "react-router-dom";
import TravellerFilledForm from "./TravellerFilledForm/TravellerFilledForm";
import FilledContactForm from "./FilledContactForm/FilledContactForm";
// import { Link } from "react-router-dom";

const Booking = () => {
  const [showContent, setShowContent] = useState("page1");

  const handleToggleContent = (newContent) => {
    setShowContent(newContent);
  };

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
              <div
                className="flight-card-container"
                style={{ overflowX: "auto" }}
              >
                <table style={{ width: "100%", border: "none" }}>
                  <tr>
                    <td className="d-flex gap-3">
                      <img src="" alt="" width={50} height={50} />
                      <h5>
                        IndiGo <br /> <p>SG-4345</p>
                      </h5>
                    </td>
                    <td>
                      <p>
                        23:00 <br /> New Delhi
                      </p>
                    </td>
                    <td>
                      <p>
                        23:00 <br /> New Delhi
                      </p>
                    </td>
                    <td>
                      <p>
                        23:00 <br /> 0 stop
                      </p>
                    </td>
                    <td>
                      {" "}
                      <h6 style={{ color: "red" }}>₹ 3500</h6>
                    </td>
                  </tr>
                </table>
                {/* <ul className="list-items d-flex justify-content-between">
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
                </ul> */}
              </div>
            </div>
          </div>
          <div className="traveller-details-container">
            {showContent === "page1" ? (
              <TravellerForm />
            ) : (
              <TravellerFilledForm />
            )}
            {/* {showContent === "page2" && <TravellerFilledForm />} */}
          </div>
          <div className="contact-information-container">
            {showContent === "page1" ? <ContactForm /> : <FilledContactForm />}
          </div>
          {showContent === "page1" ? (
            ""
          ) : (
            <div className="checkbox d-flex gap-3 ">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                <p style={{ fontSize: "0.9rem" }}>
                  I agree with the{" "}
                  <Link style={{ color: "blue" }} to={"#"}>
                    Airline
                  </Link>{" "}
                  &{" "}
                  <Link style={{ color: "blue" }} to={"#"}>
                    User
                  </Link>{" "}
                  Terms & conditions and agree to pay total amount & Applicable
                  Payment Gateway Charges.
                </p>
              </label>
            </div>
          )}
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
            {showContent === "page1" && (
              <button
                type="submit"
                onClick={() => handleToggleContent("page2")}
                className="btn secondary-btn"
                style={{ background: "#034", color: "white" }}
              >
                Continue
              </button>
            )}
            {showContent === "page2" && (
              <Link to={"/paymentgateway"}>
                <button
                  type="submit"
                  onClick={() => handleToggleContent("page1")}
                  className="btn secondary-btn"
                  style={{ background: "#034", color: "white" }}
                >
                  Make Payment
                </button>
              </Link>
            )}
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
