import React from "react";
import "./Flights.css";
import { Link, useLocation } from "react-router-dom";
import Filter from "../FilterFlight/Filter";

const Flights = ({ searchResults }) => {
  
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

    return formattedTime
  };

  console.log(searchResults);

  // let flights = [
  //   {
  //     _id: "665d9a16a9b3905a3508d2cd",
  //     airline: "Air India",
  //     flight_number: "fd876",
  //     departure_location: "Delhi",
  //     arrival_location: "Mumbai",
  //     departure_date: "2024-06-04T11:00:00Z",
  //     arrival_date: "2024-06-04T19:30:00Z",
  //     available_seats: 70,
  //     price: 1999,
  //     class_of_service: "Premium Economy",
  //     created_at: "2024-06-03T10:25:26.603Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "665d9a16a9b3905a3508d2cd",
  //     airline: "Lauda Airways",
  //     flight_number: "fd876",
  //     departure_location: "Delhi",
  //     arrival_location: "Mumbai",
  //     departure_date: "2024-06-04T17:00:00Z",
  //     arrival_date: "2024-06-04T21:30:00Z",
  //     available_seats: 70,
  //     price: 4999,
  //     class_of_service: "Premium Economy",
  //     created_at: "2024-06-03T10:25:26.603Z",
  //     __v: 0,
  //   },
  // ];

  //   {
  //     "message": "Searched Flight",
  //     "fliterFlight": [
  //         {
  //             "_id": "665d9a16a9b3905a3508d2cd",
  //             "airline": "Air India",
  //             "flight_number": "fd876",
  //             "departure_location": "Delhi",
  //             "arrival_location": "Mumbai",
  //             "departure_date": "2024-06-04T17:00:00Z",
  //             "arrival_date": "2024-06-04T19:30:00Z",
  //             "available_seats": 70,
  //             "price": 3999,
  //             "class_of_service": "Premium Economy",
  //             "created_at": "2024-06-03T10:25:26.603Z",
  //             "__v": 0
  //         }
  //     ]
  // }
  return (
    <div className="filter-or-flight-container d-flex align-items-start justify-content-between">
      <div className="filter-container d-none d-lg-flex">
        <Filter />
      </div>
      <p>{searchResults.fliterFlight}</p>
      <div className="flight-container d-flex gap-3">
        <div className="sorting-contents">
          <ul className="list-items d-none d-lg-flex justify-content-around">
            <li className="list-links">Airline</li>
            <li className="list-links">Departure</li>
            <li className="list-links">Arrival</li>
            <li className="list-links">Duration</li>
            <li className="list-links">Price</li>
            <li className="list-links"></li>
            {/* <li className="list-links"></li> */}
          </ul>
        </div>
        {searchResults.map((flight, index) => (
          <div key={index} className="flight-card-container">
            <ul className="list-items d-lg-flex d-grid justify-content-between">
              <li className="list-link d-flex align-items-center gap-2">
                <img src="" alt="" width={50} height={50} />
                <h6>
                  {flight.airline} <br /> <p>{flight.flight_number}</p>
                </h6>
              </li>
              <li className="list-link">
                <p>
                  {getTimeInHoursAndMin(flight.departure_date)} <br /> {flight.departure_location}
                </p>
              </li>
              <li className="list-link">
                <p>
                  {getTimeInHoursAndMin(flight.arrival_date)} <br /> {flight.arrival_location}
                </p>
              </li>
              <li className="list-link">
                <p>{`${calTimeDiff(
                  flight.departure_date,
                  flight.arrival_date
                )} hours`}</p>
              </li>
              <li className="list-link">
                <h6 style={{ color: "red" }}>{`₹ ${flight.price}`}</h6>
              </li>
              <li className="list-link">
                <Link to={"/bookingdetails"}>
                  <button type="submit" className="btn">
                    Book
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
