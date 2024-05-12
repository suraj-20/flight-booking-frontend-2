import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import FlightDetails from "./Pages/FlightDetails/FlightDetails.jsx";
import BookingDetails from "./Pages/BookingDetails/BookingDetails.jsx";
import Navbar from "./Components/Home/Navbar/Navbar.jsx";
import Footer from "./Components/Home/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/flightdetails" element={<FlightDetails />}></Route>
        <Route path="/bookingdetails" element={<BookingDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
