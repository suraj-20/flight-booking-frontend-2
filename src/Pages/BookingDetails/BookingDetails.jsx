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
  alert,
  setAlert,
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
        alert={alert}
        setAlert={setAlert}
      />
    </div>
  );
};

export default BookingDetails;
