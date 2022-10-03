import { Card, Text } from "../styled/adminStyled";
import { IBooking } from "../../models/IBooking";
import { ICustomer } from "../../models/ICustomer";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const BookingCard = ({ booking }: { booking: IBooking }) => {
  const [customer, setCustomer] = useState<ICustomer>();

  const handleClick = () => {
    window.location.href = `/admin/booking/${booking.bookingID}`;
  };

  useEffect(() => {
    // eslint-disable-next-line
    const getCostumer = async () => {
      const response = await fetch(
        `http://localhost:2500/api/booking/get-customer?customer=${booking.customer}`
      );
      const data = await response.json();
      setCustomer(data);
    };
    getCostumer();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card onClick={handleClick} data-booking-id={booking.bookingID}>
        <Text>{customer?.name}</Text>
        <Text alignRight>{booking.quantity}</Text>
        <Text small>{booking.time}:00</Text>
        <Text small alignRight>
          {booking.date}
        </Text>
        <Text block small dim>
          Bokningsnr:
          {" #" + booking.bookingID}
        </Text>
      </Card>
    </>
  );
};
