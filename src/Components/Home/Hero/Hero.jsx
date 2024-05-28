import React, { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { DatePicker } from "rsuite";

const Hero = () => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [showPassengerOption, setShowPassengerOption] = useState(false);

  const handleToggleFlightType = (value) => {
    setIsOneWay(value === "one-way");
  };

  const handleToggleShowPassenger = () => {
    setShowPassengerOption(!showPassengerOption);
  };

  const handlePassengerChange = (type, increment) => {
    switch (type) {
      case "adults":
        setNumAdults(Math.max(numAdults + increment, 0));
        break;
      case "children":
        setNumChildren(Math.max(numChildren + increment, 0));
        break;
      case "infants":
        setNumInfants(Math.max(numInfants + increment, 0));
        break;
      default:
        break;
    }
  };

  const preventDefaultAction = (e) => {
    e.preventDefault();
  };

  return (
    <div className="hero-container d-flex align-items-center justify-content-center h-100">
      <div className="search-box search-container w-80">
        <div className="upper-content way-of-flight p-2">
          <div className="round-trip">
            <button
              className={isOneWay ? "active" : ""}
              onClick={() => handleToggleFlightType("one-way")}
            >
              One way
            </button>
            <button
              className={!isOneWay ? "active" : ""}
              onClick={() => handleToggleFlightType("round-trip")}
            >
              Round trip
            </button>
          </div>
        </div>
        <div
          className="horizontal-line w-100"
          style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.495)" }}
        ></div>
        <div className="lower-content input-contents">
          <div className="input-text-area d-lg-flex d-grid align-items-start">
            <div className="col-2 input-field">
              <input
                style={{ borderBottomLeftRadius: "10px" }}
                className="form-control custom-form-input"
                placeholder="Origin"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="col-2 input-field">
              <input
                className="form-control custom-form-input"
                placeholder="Destination"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="col-2 input-field">
              <DatePicker
                placeholder="Departure Date"
                className="form-control custom-date-input"
              />
            </div>
            <div className="col-2 input-field">
              <DatePicker
                placeholder="Return Date"
                className="form-control custom-date-input"
                disabled={isOneWay}
              />
            </div>
            <div
              className="col-2 input-field"
              style={{ position: "relative", height: "4rem" }}
            >
              <input
                style={{ position: "absolute" }}
                onClick={handleToggleShowPassenger}
                onChange={handlePassengerChange}
                className="form-control custom-form-input"
                placeholder="1 Treveller(s), Economy"
                type="text"
                name=""
                id=""
              />
              {showPassengerOption && (
                <div className="passenger-options">
                  <div className="passenger-type">
                    <label>Adults:</label>
                    <div className="addOrSubBtn">
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("adults", -1);
                        }}
                      >
                        -
                      </button>
                      <span>{numAdults}</span>
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("adults", 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="passenger-type">
                    <label>Children:</label>
                    <div className="addOrSubBtn">
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("children", -1);
                        }}
                      >
                        -
                      </button>
                      <span>{numChildren}</span>
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("children", 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="passenger-type">
                    <label>Infants:</label>
                    <div className="addOrSubBtn">
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("infants", -1);
                        }}
                      >
                        -
                      </button>
                      <span>{numInfants}</span>
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("infants", 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="fligh-class-dropdown">
                    <select
                      className="dropdown-flight-class"
                      aria-label="Default select example"
                    >
                      <option value="Economy">Economy</option>
                      <option value="1">Premium Economy</option>
                      <option value="2">Business</option>
                      <option value="3">First</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <div className="col-1 search-btn">
              <Link to={"#"}>
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
