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
    </div>
  );
};

export default FilledContactForm;
