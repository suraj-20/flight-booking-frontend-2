import React, { useState } from "react";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "rsuite";

const Hero = ({ flightDetails, setFligthDetails, setSearchResults }) => {
  const [isOneWay, setIsOneWay] = useState(true);
  const [showPassengerOption, setShowPassengerOption] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFligthDetails({ ...flightDetails, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2); // Add leading zero
    const day = `0${date.getDate()}`.slice(-2); // Add leading zero
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date, name) => {
    const formattedDate = formatDate(date);
    setFligthDetails((prevDetails) => ({
      ...prevDetails,
      [name]: formattedDate,
    }));
    // console.log(date);
  };

  const handleToggleFlightType = (value) => {
    setIsOneWay(value === "one-way");
  };

  const handleToggleShowPassenger = () => {
    setShowPassengerOption(!showPassengerOption);
  };

  const handlePassengerChange = (type, change) => {
    setFligthDetails((prevDetails) => {
      const newCount = prevDetails.passenger[type] + change;
      return {
        ...prevDetails,
        passenger: {
          ...prevDetails.passenger,
          [type]: newCount >= 0 ? newCount : 0, // Ensure value does not go below 0
        },
      };
    });
  };

  const handleSubmit = async () => {
    // console.log("Flight searched");

    try {
      flightDetails = {
        ...flightDetails,
        total_Passenger: Number(
          flightDetails.passenger.adult +
            flightDetails.passenger.children +
            flightDetails.passenger.infants
        ),
      };

      setFligthDetails(flightDetails);

      const response = await fetch(
        `http://localhost:8000/api/v1/searchFlights`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(flightDetails),
        }
      );
      const responseData = await response.json();
      // console.log(responseData);

      if (responseData.message) {
        alert(responseData.message);
        // window.location.replace("/flightdetails");
        setSearchResults(responseData.fliterFlight);
        navigate("/flightdetails");
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.log({ flightDetails });
      console.error("Error in searching flight", error);
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
                value={flightDetails.origin}
                onChange={handleChange}
                style={{ borderBottomLeftRadius: "10px" }}
                className="form-control custom-form-input"
                placeholder="Origin"
                type="text"
                name="origin"
                id=""
              />
            </div>
            <div className="col-2 input-field">
              <input
                value={flightDetails.destination}
                onChange={handleChange}
                className="form-control custom-form-input"
                placeholder="Destination"
                type="text"
                name="destination"
                id=""
              />
            </div>
            <div className="col-2 input-field">
              <DatePicker
                name="departureDate"
                // selected={new Date(flightDetails.departureDate)}
                value={new Date(flightDetails.departureDate)}
                onChange={(date) => handleDateChange(date, "departureDate")}
                formatdate={"yyyy-MM-dd"}
                placeholder="Departure Date"
                className="form-control custom-date-input"
              />
            </div>
            <div className="col-2 input-field">
              <DatePicker
                value={new Date(flightDetails.returnDate)}
                onChange={(date) => handleDateChange(date, "returnDate")}
                name="returnDate"
                formatdate={"yyyy-MM-dd"}
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
                // onChange={handlePassengerChange}
                className="form-control custom-form-input"
                placeholder="1 Treveller(s), Economy"
              />
              {showPassengerOption && (
                <div className="passenger-options">
                  <div className="passenger-type">
                    <label>Adults:</label>
                    <div className="addOrSubBtn">
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("adult", -1);
                        }}
                      >
                        -
                      </button>
                      <span>{flightDetails.passenger.adult}</span>
                      <button
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("adult", 1);
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
                      <span>{flightDetails.passenger.children}</span>
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
                        value={flightDetails.infants}
                        onChange={handleChange}
                        name="infants"
                        onClick={(e) => {
                          preventDefaultAction(e);
                          handlePassengerChange("infants", -1);
                        }}
                      >
                        -
                      </button>
                      <span>{flightDetails.passenger.infants}</span>
                      <button
                        value={flightDetails.infants}
                        onChange={handleChange}
                        name="infants"
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
                      value={flightDetails.class_of_service}
                      onChange={handleChange}
                      name="class_of_service"
                    >
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First">First</option>
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
                  onClick={(e) => {
                    preventDefaultAction(e);
                    handleSubmit();
                  }}
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
