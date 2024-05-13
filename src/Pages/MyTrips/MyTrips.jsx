import React from "react";
import "./MyTrips.css";
import Trips from "../../Components/Trips/Trips";

const MyTrips = () => {
  return (
    <div className="MyTrip-page">
      <section className="mytrips-section">
        <Trips />
      </section>
    </div>
  );
};

export default MyTrips;
