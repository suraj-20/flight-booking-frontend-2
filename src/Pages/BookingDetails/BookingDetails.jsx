import React from "react";
import "./BookingDetails.css";
import Booking from "../../Components/Booking/Booking";

const BookingDetails = ({
  selectedFlight,
  updateFormData,
  setUpdateFormData,
  flightDetails,
  passengerDetails,
  setPassengerDetails,
}) => {
  return (
    <div className="booking_section">
      <Booking
        passengerDetails={passengerDetails}
        setPassengerDetails={setPassengerDetails}
        selectedFlight={selectedFlight}
        updateFormData={updateFormData}
        setUpdateFormData={setUpdateFormData}
        flightDetails={flightDetails}
      />
    </div>
  );
};

export default BookingDetails;
