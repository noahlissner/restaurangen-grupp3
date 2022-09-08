import BookingScreenOne from "../../containers/BookingScreenOne";
import "../../styles/Booking.scss";
import { useState } from "react";
import axios from "axios";
import BookingScreenTwo from "../../containers/BookingScreenTwo";
// import { Calendar } from "react-calendar";
// import { format, startOfDay, startOfToday } from "date-fns";

export const Booking = () => {
  // let today = startOfToday();
  // const [date, setDate] = useState(today);

  // console.log(format(date, "EEEE do MMMM yyyy"));
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
    <div className="booking-wrapper">
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
      {/* <div className="booking-wrapper">
      <Calendar
        onChange={setDate}
        minDate={today}
        navigationLabel={({ date }) => `${format(date, "MMMM")}`}
        next2Label={null}
        prev2Label={null}
        value={date}
      />
      <div className="booking-btns">
        <button className="booking-btns-cancel">Cancel</button>
        <button className="booking-btns-pick">Pick Date</button>
      </div>
    </div> */}
    </div>
  );
};
