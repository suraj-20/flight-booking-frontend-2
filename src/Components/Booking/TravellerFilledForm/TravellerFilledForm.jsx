import React from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const TravellerFilledForm = ({ passengerDetails }) => {
  console.log(passengerDetails);
  return (
    <div className="traveller-details d-flex gap-2">
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <IoBagRemoveSharp />
          Traveller Details
        </h4>
      </div>
      <div
        className="myTrip-content-container"
        style={{ overflowX: "auto" }}
      >
        <table>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone No.</th>
          </tr>
          {passengerDetails.map((passengerDetail, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{passengerDetail.first_name}</td>
                <td>{passengerDetail.age}</td>
                <td>{passengerDetail.gender}</td>
                <td>8287146841</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TravellerFilledForm;
