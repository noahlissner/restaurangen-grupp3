import "../../styles/Booking.scss";
import { Calendar } from "react-calendar";
import { format, startOfDay, startOfToday } from "date-fns";
import { useState } from "react";

export const Booking = () => {
  let today = startOfToday();
  const [date, setDate] = useState(today);

  console.log(format(date, "EEEE do MMMM yyyy"));
  return (
    <div className="booking-wrapper">
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
    </div>
  );
};
