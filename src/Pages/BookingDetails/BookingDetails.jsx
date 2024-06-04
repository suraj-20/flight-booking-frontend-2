import React from "react";
import "./BookingDetails.css";
import Booking from "../../Components/Booking/Booking";

const BookingDetails = ({ selectedFlight , updateFormData , setUpdateFormData }) => {
  return (
    <div className="booking_section">
      <Booking selectedFlight={selectedFlight} updateFormData={updateFormData} setUpdateFormData={setUpdateFormData} />
    </div>
  );
};

export default BookingDetails;
