import React from "react";
import "./Flights.css";
import { Link, useLocation } from "react-router-dom";
import Filter from "../FilterFlight/Filter";

const Flights = ({ searchResults }) => {
  console.log({ searchResults });
  return (
    <div className="filter-or-flight-container d-flex align-items-start justify-content-between">
      <div className="filter-container d-none d-lg-flex">
        <Filter />
      </div>
      <p>{searchResults.fliterFlight}</p>
      <div className="flight-container d-flex gap-3">
        <div className="sorting-contents">
          <ul className="list-items d-none d-lg-flex justify-content-around">
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
          <ul className="list-items d-lg-flex d-grid justify-content-between">
            <li className="list-link d-flex align-items-center gap-2">
              <img src="" alt="" width={50} height={50} />
              <h6>
                IndiGo <br /> <p>SG-4345</p>
              </h6>
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
                2h 50m
                <br /> 0 stop
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
