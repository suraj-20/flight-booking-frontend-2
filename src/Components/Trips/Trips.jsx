import React from "react";
import "./Trips.css";

const Trips = () => {
  return (
    <div className="trip-section-container">
      <div className="trip-container container">
        <div className="myTrip-heading">
          <h2>My Trips</h2>
        </div>
        <div className="myTrip-content-container">
          <table>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>From - Destination</th>
              <th>Amount/Price</th>
            </tr>
            <tr>
              <td>123</td>
              <td>Suraj</td>
              <td>12:00</td>
              <td>NDLS - PTA</td>
              <td>$ 3999</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trips;
