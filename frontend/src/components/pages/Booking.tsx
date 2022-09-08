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
  const [loading, setLoading] = useState(false);

  const handleScreenOneSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5000/api/booking/search", {
        quantity,
        date,
      })
      .then(function (response) {
        console.log(response);
        setLoading(true);
        setNextScreen(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleScreenTwoSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
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
        />
      )}
    </>
  );
};
