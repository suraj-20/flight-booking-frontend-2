import React from "react";
import "./FlightDetails.css";
import Hero from "../../Components/Home/Hero/Hero";
import Flights from "../../Components/Flights/FlightsDetails/Flights";
import ReviewSection from "../../Components/Home/ReviewsSection/ReviewSection";

const FlightDetails = () => {
  return (
    <div className="flight-details-page">
      <section className="modify_section">
        <Hero />
      </section>
      <section className="filter_section_or_flights_details">
        <Flights />
      </section>
      <section className="reviewAndStarSection">
        <ReviewSection />
      </section>
    </div>
  );
};

export default FlightDetails;
