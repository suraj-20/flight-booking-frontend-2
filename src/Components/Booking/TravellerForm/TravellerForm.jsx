import React, { useState } from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const TravellerForm = () => {
  const [passengerDetails, setPassengerDetails] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setPassengerDetails({
      ...passengerDetails,
      [e.target.value]: e.target.name,
    });
  };

  return (
    <div className="traveller-details d-flex gap-2">
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <IoBagRemoveSharp />
          Traveller Details
        </h4>
      </div>
      <div className="type-of-passenger">
        <h6>1. Adult</h6>
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
            <label htmlFor="email">Email Id *</label>
            <input
              value={passengerDetails.email}
              onChange={handleChange}
              type="email"
              name="email"
              id=""
            />
          </div>
          <div className="input-fields">
            <label htmlFor="phone_number">Phone no. *</label>
            <input
              value={passengerDetails.phone_number}
              onChange={handleChange}
              type="tel"
              name="phone_number"
              id=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravellerForm;
