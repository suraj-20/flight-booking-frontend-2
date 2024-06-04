import React from "react";
import "./FlightDetails.css";
import Hero from "../../Components/Home/Hero/Hero";
import Flights from "../../Components/Flights/FlightsDetails/Flights";
import ReviewSection from "../../Components/Home/ReviewsSection/ReviewSection";

const FlightDetails = ({ searchResults, setSelectedFlight }) => {
  return (
    <div className="flight-details-page">
      {/* <section className="modify_section">
        <Hero
          flightDetails={flightDetails}
          setFligthDetails={setFligthDetails}
        />
      </section> */}
      <section className="filter_section_or_flights_details">
        <Flights
          searchResults={searchResults}
          setSelectedFlight={setSelectedFlight}
        />
      </section>
      <section className="reviewAndStarSection">
        <ReviewSection />
      </section>
    </div>
  );
};

export default FlightDetails;
