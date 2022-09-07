import "../../styles/Booking.scss";
import { Calendar } from "react-calendar";
import { format, startOfDay, startOfToday } from "date-fns";

export const Booking = () => {
  let today = startOfToday();
  return (
    <div className="booking-wrapper">
      <Calendar next2Label={null} prev2Label={null} />
      <div className="booking-btns">
        <button className="booking-btns-cancel">Cancel</button>
        <button className="booking-btns-pick">Pick Date</button>
      </div>
    </div>
  );
};
