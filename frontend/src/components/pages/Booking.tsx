import BookingScreenOne from "../../containers/BookingScreenOne";
import "../../styles/Booking.scss";
import { useState } from "react";
import axios from "axios";
import BookingScreenTwo from "../../containers/BookingScreenTwo";
import Confirmation from "../Confirmation";
import { IBooking } from "../../models/IBooking";

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
  const [error, setError] = useState("");
  const [booking, setBooking] = useState<IBooking>({
    date: "",
    time: "",
    bookingID: "",
    quantity: 0,
    tables: 0,
    customer: "",
  });

  const handleScreenOneSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:2500/api/booking/search", {
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
        setError(error.response.data.message);
        console.log(error.response.data.message);
      });
  };

  const handleScreenTwoSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:2500/api/booking/create", {
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
        setBooking(response.data.data);
        setShowConfirmation(true);
      })
      .catch(function (error) {
        setError(error.response.data.message);
      });
  };

  return (
    <div className="booking-wrapper">
      <p className="booking-error">{error}</p>
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
      {showConfirmation && <Confirmation booking={booking} />}
    </div>
  );
};
