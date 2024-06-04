import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import FlightDetails from "./Pages/FlightDetails/FlightDetails.jsx";
import BookingDetails from "./Pages/BookingDetails/BookingDetails.jsx";
import Navbar from "./Components/Home/Navbar/Navbar.jsx";
import Footer from "./Components/Home/Footer/Footer.jsx";
import LoginSignup from "./Pages/Login/LoginSignup.jsx";
import MyTrips from "./Pages/MyTrips/MyTrips.jsx";
import PaymentGateway from "./Pages/PaymentGateway/PaymentGateway.jsx";
import { useState } from "react";

function App() {
  const [flightDetails, setFligthDetails] = useState({
    origin: "",
    destination: "",
    departureDate: new Date(),
    returnDate: new Date(),
    class_of_service: "",
    passenger: {
      adult: 1,
      children: 0,
      infants: 0,
    },
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              flightDetails={flightDetails}
              setFligthDetails={setFligthDetails}
            />
          }
        ></Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/mytrips" element={<MyTrips />}></Route>
        <Route path="/flightdetails" element={<FlightDetails />}></Route>
        <Route path="/bookingdetails" element={<BookingDetails />}></Route>
        <Route path="/paymentgateway" element={<PaymentGateway />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
