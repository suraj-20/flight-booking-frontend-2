import React, { useEffect } from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const TravellerForm = ({
  flightDetails,
  passengerDetails,
  setPassengerDetails,
}) => {
  // console.log({ flightDetails });

  useEffect(() => {
    // Create an array of objects based on the numberOfPassengers
    const initialPassengerDetails = Array.from(
      { length: flightDetails.total_Passenger },
      () => ({
        title: "",
        first_name: "",
        last_name: "",
        age: "",
        gender: "",
      })
    );

    setPassengerDetails(initialPassengerDetails);
  }, [flightDetails.total_Passenger, setPassengerDetails]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedPassengerDetails = [...passengerDetails];
    updatedPassengerDetails[index] = {
      ...updatedPassengerDetails[index],
      [name]: value,
    };
    setPassengerDetails(updatedPassengerDetails);
  };

  console.log(passengerDetails);

  return (
    <div className="traveller-details d-flex gap-2">
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <IoBagRemoveSharp />
          Traveller Details
        </h4>
      </div>
      {passengerDetails.map((passenger, index) => (
        <React.Fragment key={index}>
          <div className="type-of-passenger">
            <h6>{index + 1}. Passenger</h6>
          </div>
          <div className="passenger-details">
            <form className="passenger-form d-grid">
              <div className="input-fields">
                <label htmlFor="title">Title</label>
                <select
                  value={passenger.title}
                  onChange={(e) => handleChange(index, e)}
                  name="title"
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
                  value={passenger.first_name}
                  onChange={(e) => handleChange(index, e)}
                  type="text"
                  name="first_name"
                />
              </div>
              <div className="input-fields">
                <label htmlFor="last_name">Last Name *</label>
                <input
                  value={passenger.last_name}
                  onChange={(e) => handleChange(index, e)}
                  type="text"
                  name="last_name"
                />
              </div>
              <div className="input-fields">
                <label htmlFor="age">Age *</label>
                <input
                  value={passenger.age}
                  onChange={(e) => handleChange(index, e)}
                  type="tel"
                  name="age"
                />
              </div>
              <div className="input-fields">
                <label htmlFor="gender">Gender *</label>
                <select
                  value={passenger.gender}
                  onChange={(e) => handleChange(index, e)}
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </form>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TravellerForm;
