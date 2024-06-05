import React, { useState } from "react";
import "./Booking.css";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { addPassengers, updateInfoApiCall } from "../../Services/updateInfo";
import ContactForm from "./ContactForm/ContactForm";
import TravellerForm from "./TravellerForm/TravellerForm";
import Discound from "./Discound/Discound";
import Coupon from "./Coupon/Coupon";
import FareBreakup from "./FareBreakup/FareBreakup";
import { Link } from "react-router-dom";
import TravellerFilledForm from "./TravellerFilledForm/TravellerFilledForm";
import FilledContactForm from "./FilledContactForm/FilledContactForm";
import Alert from "../../Services/Alert";
// import { Link } from "react-router-dom";

const Booking = ({
  selectedFlight,
  updateFormData,
  setUpdateFormData,
  flightDetails,
  passengerDetails,
  setPassengerDetails,
  alert,
  setAlert,
}) => {
  const [showContent, setShowContent] = useState("page1");

  const handleToggleContent = (newContent) => {
    setShowContent(newContent);
  };

  const calTimeDiff = (departureDate, arrivalDate) => {
    const departure = new Date(departureDate);
    const arrival = new Date(arrivalDate);

    const differenceInMilliseconds = arrival - departure;

    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

    return differenceInHours;
  };

  const getTimeInHoursAndMin = (dateString) => {
    const date = new Date(dateString);

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

    return formattedTime;
  };

  const makePaymentApiCall = async () => {
    try {
      let body = {
        selectedFlight,
        passengerDetails,
      };
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/v1/createPayment`,
        {
          method: "POST",
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const responseData = await response.json();

      if (responseData.message) {
        setAlert({
          message: "Payment successfully ",
          type: "success",
          visible: true,
        });
        window.location.replace("/mytrips");
      } else {
        setAlert({
          message: responseData.message,
          type: "error",
          visible: true,
        });
      }
      // console.log(responseData);
    } catch (error) {
      setAlert({
        message: "Error submitting data: " + error.message,
        type: "error",
        visible: true,
      });
      console.error("Error in make payment", error);
    }
  };

  const closeAlert = () => {
    setAlert({ ...alert, visible: false });
  };

  return (
    <div className="booking-container ">
      <div className="upper-content-container"></div>
      <div className="lower-content-container d-flex align-items-start justify-content-between">
        <div className="left-content-container d-flex gap-3">
          <div className="flight-details-container">
            <div className="flight-details" style={{ padding: "1rem" }}>
              <div className="details-heading">
                <h4 className="d-flex align-items-center gap-2">
                  <PiAirplaneTiltFill />
                  Flight Details
                </h4>
              </div>
              <div
                className="flight-card-container"
                style={{ overflowX: "auto" }}
              >
                <table style={{ width: "100%", border: "none" }}>
                  <thead>
                    <tr>
                      <td className="d-flex gap-3">
                        <img
                          src={`${selectedFlight.img}`}
                          alt=""
                          width={50}
                          height={50}
                        />
                        <h5>
                          {selectedFlight.airline} <br />{" "}
                          <p style={{ textTransform: "uppercase" }}>
                            {selectedFlight.flight_number}
                          </p>
                        </h5>
                      </td>
                      <td>
                        <p>
                          {getTimeInHoursAndMin(selectedFlight.departure_date)}{" "}
                          <br /> {selectedFlight.departure_location}
                        </p>
                      </td>
                      <td>
                        <p>
                          {getTimeInHoursAndMin(selectedFlight.arrival_date)}{" "}
                          <br /> {selectedFlight.arrival_location}
                        </p>
                      </td>
                      <td>
                        <p>{`${calTimeDiff(
                          selectedFlight.departure_date,
                          selectedFlight.arrival_date
                        )} hours`}</p>
                      </td>
                      <td>
                        {" "}
                        <h6
                          style={{ color: "red" }}
                        >{`₹ ${selectedFlight.price}`}</h6>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div className="traveller-details-container">
            {showContent === "page1" ? (
              <TravellerForm
                flightDetails={flightDetails}
                passengerDetails={passengerDetails}
                setPassengerDetails={setPassengerDetails}
              />
            ) : (
              <TravellerFilledForm passengerDetails={passengerDetails} />
            )}
            {/* {showContent === "page2" && <TravellerFilledForm />} */}
          </div>
          <div className="contact-information-container">
            {showContent === "page1" ? (
              <ContactForm
                updateFormData={updateFormData}
                setUpdateFormData={setUpdateFormData}
              />
            ) : (
              <FilledContactForm updateFormData={updateFormData} />
            )}
          </div>
          {/* {showContent === "page1" ? (
            ""
          ) : (
            <div className="checkbox d-flex gap-3 ">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                <p style={{ fontSize: "0.9rem" }}>
                  I agree with the{" "}
                  <Link style={{ color: "blue" }} to={"#"}>
                    Airline
                  </Link>{" "}
                  &{" "}
                  <Link style={{ color: "blue" }} to={"#"}>
                    User
                  </Link>{" "}
                  Terms & conditions and agree to pay total amount & Applicable
                  Payment Gateway Charges.
                </p>
              </label>
            </div>
          )} */}
          <div className="previous-or-submit-btn d-flex align-items-center justify-content-center gap-3">
            <Link to={"/flightdetails"}>
              <button
                type="submit"
                className="btn primary-btn"
                style={{ background: "white" }}
              >
                Previous
              </button>
            </Link>
            {showContent === "page1" && (
              <button
                type="submit"
                onClick={() => {
                  handleToggleContent("page2");
                  updateInfoApiCall(
                    updateFormData,
                    setUpdateFormData,
                    setAlert
                  );
                  addPassengers(
                    passengerDetails,
                    setPassengerDetails,
                    setAlert
                  );
                }}
                className="btn secondary-btn"
                style={{ background: "#034", color: "white" }}
              >
                Continue
              </button>
            )}
            {showContent === "page2" && (
              <button
                type="submit"
                onClick={() => {
                  handleToggleContent("page1");
                  makePaymentApiCall();
                }}
                className="btn secondary-btn"
                style={{ background: "#034", color: "white" }}
              >
                Make Payment
              </button>
            )}
          </div>
        </div>
        <div className="right-content-container d-flex gap-3">
          <div className="fare-breakup-container">
            <FareBreakup
              flightDetails={flightDetails}
              selectedFlight={selectedFlight}
            />
          </div>
          <div className="discount-offer-container">
            <Discound />
          </div>
          <div className="coupons-container">
            <Coupon />
          </div>
        </div>
      </div>
      {alert.visible && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
          duration={5000}
        />
      )}
    </div>
  );
};

export default Booking;
