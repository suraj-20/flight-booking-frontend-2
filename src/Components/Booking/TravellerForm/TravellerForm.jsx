import React, { useState } from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const TravellerForm = ({
  flightDetails,
  passengerDetails,
  setPassengerDetails,
}) => {
  console.log({ flightDetails });

  const handleChange = (e, index) => {
    const updatedPassengerDetails = { ...passengerDetails };
    updatedPassengerDetails[index] = {
      ...updatedPassengerDetails[index],
      [e.target.name]: e.target.value,
    };
    setPassengerDetails(updatedPassengerDetails);

    console.log(setPassengerDetails);
  };

  return (
    <div className="traveller-details d-flex gap-2">
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <IoBagRemoveSharp />
          Traveller Details
        </h4>
      </div>
      {Array.from({ length: flightDetails.total_Passenger }).map(
        (passenger, index) => (
          <>
            <div key={index} className="type-of-passenger">
              <h6>
                {index + 1}. {index === 0 ? "Adult" : "Passenger"}
              </h6>
            </div>
            <div className="passenger-details">
              <form className="passenger-form d-grid">
                <div className="input-fields">
                  <label htmlFor="title">Title</label>
                  <select
                    value={passengerDetails.title}
                    onChange={handleChange}
                    name="title"
                    id=""
                  >
                    <option value="Title">Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>
                <div className="input-fields">
                  <label htmlFor="first_name">First Name *</label>
                  <input
                    value={passengerDetails.first_name}
                    onChange={handleChange}
                    type="text"
                    name="first_name"
                    id=""
                  />
                </div>
                <div className="input-fields">
                  <label htmlFor="last_name">Last Name *</label>
                  <input
                    value={passengerDetails.last_name}
                    onChange={handleChange}
                    type="text"
                    name="last_name"
                    id=""
                  />
                </div>
                <div className="input-fields">
                  <label htmlFor="email">Age *</label>
                  <input
                    value={passengerDetails.age}
                    onChange={handleChange}
                    type="tel"
                    name="age"
                    id=""
                  />
                </div>
                <div className="input-fields">
                  <label htmlFor="phone_number">Gender *</label>
                  <select
                    value={passengerDetails.gender}
                    onChange={handleChange}
                    name="gender"
                    id=""
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </form>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default TravellerForm;
