import React from "react";
import "./Flights.css";
import { Link } from "react-router-dom";

const Flights = () => {
  return (
    <div className="filter-or-flight-container d-flex align-items-start justify-content-between">
      <div className="filter-container">Filter</div>
      <div className="flight-container d-flex gap-3">
        <div className="sorting-contents">
          <ul className="list-items d-flex justify-content-around">
            <li className="list-links">Airline</li>
            <li className="list-links">Departure</li>
            <li className="list-links">Arrival</li>
            <li className="list-links">Duration</li>
            <li className="list-links">Price</li>
            <li className="list-links"></li>
            {/* <li className="list-links"></li> */}
          </ul>
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
            <li className="list-link">
              <Link to={"/bookingdetails"}>
                <button type="submit" className="btn">
                  Book
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Flights;
