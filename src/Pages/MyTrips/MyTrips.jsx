import React from "react";
import "./MyTrips.css";
import Trips from "../../Components/Trips/Trips";

const MyTrips = ({userDetails}) => {
  return (
    <div className="MyTrip-page">
      <section className="mytrips-section">
        <Trips userDetails={userDetails} />
      </section>
    </div>
  );
};

export default MyTrips;
