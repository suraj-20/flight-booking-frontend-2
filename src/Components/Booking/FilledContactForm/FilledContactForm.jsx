import React from "react";
import { MdContacts } from "react-icons/md";

const FilledContactForm = ({updateFormData}) => {
  return (
    <div
      className="contact-information d-flex gap-2"
      style={{ padding: "1rem" }}
    >
      <div className="details-heading">
        <h4 className="d-flex align-items-center gap-2">
          <MdContacts />
          Contact Information
        </h4>
      </div>
      <div className="contact-content-container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>
              First Name
            </span>
            {updateFormData.first_name}
          </div>
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>
              Last Name
            </span>
            {updateFormData.last_name}
          </div>
          <div className="col-12 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>Email</span>
            {updateFormData.email}
          </div>
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>State</span>
            {updateFormData.state}
          </div>
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>City</span>
            {updateFormData.city}
          </div>
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>Country</span>
            {updateFormData.country}
          </div>
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>Pincode</span>
            {updateFormData.pincode}
          </div>
          <div className="col-6 col-md-4 col-lg-4 px-1 mb-3">
            <span style={{ display: "block", fontWeight: "600" }}>
              Mobile No.
            </span>
            {updateFormData.phone_number}
          </div>
        </div>
      </div>
      {/* <table style={{ overflow: "auto" }}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>State</th>
          <th>City</th>
          <th>Country</th>
          <th>Mobile No.</th>
        </tr>
        <tr>
          <td>Suraj</td>
          <td>Kumar</td>
          <td>suraaj0015@gmail.com</td>
          <td>Haryana</td>
          <td>Gurgaon</td>
          <td>India</td>
          <td>8287146841</td>
        </tr>
      </table> */}
      {/* <div className="passenger-details">
        <form className="passenger-form contact-form d-grid">
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
            <label htmlFor="">Country</label>
            <select name="" id="">
              <option value="1 mb-3">India</option>
            </select>
          </div>
          <div className="input-fields">
            <label htmlFor="">State</label>
            <select name="" id="">
              <option value="0"></option>
              <option value=" Andhra Pradesh"> Andhra Pradesh</option>
              <option value=" Arunachal Pradesh"> Arunachal Pradesh</option>
              <option value=" Assam"> Assam</option>
              <option value=" Bihar"> Bihar</option>
              <option value=" Chandigarh"> Chandigarh</option>
              <option value=" Chattisgarh"> Chattisgarh</option>
              <option value=" Daman and Diu"> Daman and Diu</option>
              <option value=" Delhi"> Delhi</option>
              <option value=" Goa"> Goa</option>
              <option value=" Gujarat"> Gujarat</option>
              <option value=" Haryana"> Haryana</option>
              <option value=" Himachal Pradesh"> Himachal Pradesh</option>
              <option value=" Jammu and Kashmir"> Jammu and Kashmir</option>
              <option value=" Jharkhand"> Jharkhand</option>
              <option value=" Karnataka"> Karnataka</option>
              <option value=" Kerala"> Kerala</option>
              <option value=" Ladakh"> Ladakh</option>
              <option value=" Lakshadweep"> Lakshadweep</option>
              <option value=" Madhya Pradesh"> Madhya Pradesh</option>
              <option value=" Maharashtra"> Maharashtra</option>
              <option value=" Manipur"> Manipur</option>
              <option value=" Meghalaya"> Meghalaya</option>
              <option value=" Mizoram"> Mizoram</option>
              <option value=" Nagaland"> Nagaland</option>
              <option value=" Rajasthan"> Rajasthan</option>
              <option value=" Sikkim"> Sikkim</option>
              <option value=" Tamil Nadu"> Tamil Nadu</option>
              <option value=" Telangana"> Telangana</option>
              <option value=" Tripura"> Tripura</option>
              <option value=" Uttar Pradesh"> Uttar Pradesh</option>
              <option value=" Uttarakhand"> Uttarakhand</option>
              <option value=" West Bengal"> West Bengal</option>{" "}
            </select>
          </div>
          <div className="input-fields">
            <label htmlFor="">City *</label>
            <input type="text" name="" id="" />
          </div>
          <div className="input-fields">
            <label htmlFor="">Pincode *</label>
            <input type="tel" name="" id="" />{" "}
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

export default FilledContactForm;
