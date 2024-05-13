import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container d-flex align-items-center justify-content-center h-100">
      <div className="search-box search-container w-80">
        <div className="upper-content way-of-flight p-2">
          <div className="round-trip">
            <button
              className="btn"
              //   className={!isOneWay ? "active" : ""}
              //   onClick={() => handleToggleFlightType("round-trip")}
            >
              Round trip
            </button>
            <button
              className="btn"
              //   className={isOneWay ? "active" : ""}
              //   onClick={() => handleToggleFlightType("one-way")}
            >
              One way
            </button>
          </div>
        </div>
        <div
          className="horizontal-line w-100"
          style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.495)" }}
        ></div>
        <div className="lower-content input-contents">
          <div class="input-text-area d-lg-flex d-grid align-items-start">
            <div class="col-2 input-field">
              <input
                style={{ borderBottomLeftRadius: "10px" }}
                className="form-control custom-form-input"
                placeholder="Origin"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="col-2 input-field">
              <input
                className="form-control custom-form-input"
                placeholder="Destination"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="col-2 input-field">
              <input
                className="form-control custom-form-input"
                placeholder="Departure"
                type="date"
                name=""
                id=""
              />
            </div>
            <div class="col-2 input-field">
              <input
                className="form-control custom-form-input"
                placeholder="Return"
                type="date"
                name=""
                id=""
              />
            </div>
            <div class="col-2 input-field">
              <input
                className="form-control custom-form-input"
                placeholder="1 Treveller(s), Economy"
                type="text"
                name=""
                id=""
              />
            </div>
            <div class="col-1 search-btn">
              <Link to={"/flightdetails"}>
                <button
                  style={{ borderBottomRightRadius: "10px" }}
                  type="submit"
                  className="btn custom-search-btn"
                >
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
