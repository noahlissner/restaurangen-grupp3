import React from "react";
import "../styles/Confirmation.scss";
import { IBooking } from "../models/IBooking";

interface IProps {
  booking: IBooking;
}

const Confirmation = ({ booking }: IProps) => {
  return (
    <div className="confirmation">
      <span>✅</span>
      <h1>Confirmation #{booking.bookingID}</h1>
      <div className="confirmation__details">
        <div>
          <p>{booking.date}</p>
          <p>Date</p>
        </div>
        <div>
          <p>{booking.time}</p>
          <p>Time</p>
        </div>
        <div>
          <p>{booking.quantity}</p>
          <p>Guests</p>
        </div>
      </div>
      <p>Thank you for your order.</p>
      <a href="/">Return to home screen</a>
    </div>
  );
};

export default Confirmation;
