import React from "react";
import { IoReceiptSharp } from "react-icons/io5";

const FareBreakup = ({ flightDetails, selectedFlight }) => {
  console.log(flightDetails.total_Passenger);
  console.log(selectedFlight);

  const totalFare = () => {
    let total_amount = Number(
      flightDetails.total_Passenger * selectedFlight.price
    );
    console.log(total_amount);

    return total_amount;
  };

  return (
    <>
      <div className="details-heading" style={{ padding: "1rem" }}>
        <h4 className="d-flex align-items-center gap-2">
          <IoReceiptSharp />
          Fare Breakup
        </h4>
      </div>
      <div className="fare-details d-flex align-items-start p-2 gap-1">
        <div>
          <p style={{ fontSize: "0.9rem" }}>
            Include all taxes, (Subject to airline fare rules)
          </p>
          <label htmlFor="">Passengers</label>
        </div>
        <div className="passenger-type">{/* <h6>Adult: 1</h6> */}</div>
        <div className="price-divide d-flex">
          <div className="base-fare d-flex align-items-center justify-content-between">
            <h5>Base Fare</h5>
            <p>{`₹ ${totalFare()}`}</p>
          </div>
          <hr />
          <div className="taxes d-flex align-items-center justify-content-between">
            <h5>Taxes & Fees</h5>
            <p>₹ 0</p>
          </div>
          <hr />
          <div className="total-fare d-flex align-items-center justify-content-between">
            <h5>Total Payable</h5>
            <p>{`₹ ${totalFare()}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FareBreakup;
