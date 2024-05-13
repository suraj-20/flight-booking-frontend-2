import React from "react";
import { MdDiscount } from "react-icons/md";

const Discound = () => {
  return (
    <>
      <div className="details-heading" style={{ padding: "1rem" }}>
        <h4 className="d-flex align-items-center gap-2">
          {" "}
          <MdDiscount />
          Discount/Offer
        </h4>
      </div>
      <div
        className="details-peragraph"
        style={{ padding: "1rem", color: "blue", textAlign: "center" }}
      >
        <p>No Offers availabe at this time</p>
      </div>
    </>
  );
};

export default Discound;
