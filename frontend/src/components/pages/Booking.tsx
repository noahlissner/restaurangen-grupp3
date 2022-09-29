import BookingScreenOne from "../../containers/BookingScreenOne";
import "../../styles/Booking.scss";
import { useState } from "react";
import axios from "axios";
import BookingScreenTwo from "../../containers/BookingScreenTwo";

export const Booking = () => {
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nextScreen, setNextScreen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [availableTables, setAvailableTables] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScreenOneSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:5000/api/booking/search", {
        quantity,
        date,
      })
      .then(function (response) {
        setAvailableTables(response.data);
        if (response.data.available_18 || response.data.available_21) {
          setNextScreen(true);
        } else {
          setError("Inga lediga bord på valt datum.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleScreenTwoSubmit = (e: any) => {
    e.preventDefault();

    console.log(quantity, date, time, name, email, phone);

    axios
      .post("http://localhost:5000/api/booking/create", {
        quantity,
        date,
        time,
        tables: Math.ceil(parseInt(quantity) / 6),
        name,
        email,
        phone,
        bookingID: Math.floor(Math.random() * 1000000),
      })
      .then(function (response) {
        console.log(response);
        setShowConfirmation(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="booking-wrapper">
      <p className="booking_error">{error}</p>
      {!nextScreen ? (
        <BookingScreenOne
          onSubmit={handleScreenOneSubmit}
          quantity={setQuantity}
          date={setDate}
        />
      ) : (
        <BookingScreenTwo
          time={setTime}
          name={setName}
          email={setEmail}
          phone={setPhone}
          onSubmit={handleScreenTwoSubmit}
          availableTables={availableTables}
        />
      )}
    </div>
  );
};
