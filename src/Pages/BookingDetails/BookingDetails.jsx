import React from "react";
import "./BookingDetails.css";
import Booking from "../../Components/Booking/Booking";

const BookingDetails = ({ selectedFlight }) => {
  return (
    <div className="booking_section">
      <Booking selectedFlight={selectedFlight} />
    </div>
  );
};

export default BookingDetails;
