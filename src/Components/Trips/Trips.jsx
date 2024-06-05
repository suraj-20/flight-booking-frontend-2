import React, { useEffect, useState } from "react";
import "./Trips.css";

const Trips = ({ userDetails }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/getAllUserPrevFlight`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.json();
      console.log(res.filteredBookings);
      setTrips(res.filteredBookings);
    }

    fetchData();
  }, []);

  
  const getTotalAmount = (flight) => {
    console.log(flight)
    return Number(flight.passengers.length*flight.amount)
  }

  return (
    <div className="trip-section-container">
      <div className="trip-container container">
        <div className="myTrip-heading">
          <h2>My Trips</h2>
        </div>
        <div className="myTrip-content-container" style={{ overflowX: "auto" }}>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Amount/Price</th>
            </tr>

            {trips.map((trip, index) => (
              <tr key={index}>
                <td style={{ textTransform: "uppercase" }}>
                  {trip.bookingId.slice(30)}
                </td>
                <td>{userDetails.first_name}</td>
                <td>{trip.bookingDate}</td>
                <td>INR {getTotalAmount(trip)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trips;
