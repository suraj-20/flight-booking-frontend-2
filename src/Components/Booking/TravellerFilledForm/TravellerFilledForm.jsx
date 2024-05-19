import React from "react";
import { IoBagRemoveSharp } from "react-icons/io5";

const TravellerFilledForm = () => {
  return (
    <div className="traveller-details d-flex gap-2">
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <IoBagRemoveSharp />
          Traveller Details
        </h4>
      </div>
      <div className="myTrip-content-container" style={{overflowX: "auto"}}>
        <table>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Type</th>
            <th>DOB</th>
            <th>Phone No.</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Suraj</td>
            <td>Adult</td>
            <td>NA</td>
            <td>8287146841</td>
          </tr>
        </table>
      </div>
      {/* <div className="passenger-details">
        <form className="passenger-form d-grid">
          <div className="input-fields">
            <label htmlFor="">Title</label>
            <select name="" id="">
              <option value="1">Title</option>
              <option value="2">Mr.</option>
              <option value="3">Mrs.</option>
              <option value="4">Ms.</option>
            </select>
          </div>
          <div className="input-fields">
            <label htmlFor="">First Name *</label>
            <input type="text" name="" id="" />
          </div>
          <div className="input-fields">
            <label htmlFor="">Last Name *</label>
            <input type="text" name="" id="" />
          </div>
          <div className="input-fields">
            <label htmlFor="">Email Id *</label>
            <input type="email" name="" id="" />
          </div>
          <div className="input-fields">
            <label htmlFor="">Phone no. *</label>
            <input type="tel" name="" id="" />
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default TravellerFilledForm;
