import { format } from "date-fns";
import { useEffect, useState } from "react";
import { BookingCard } from "./bookingCard";
import { IBooking } from "../../models/IBooking";
import { ICustomer } from "../../models/ICustomer";
import { Text } from "../styled/adminStyled";

type search = string;

interface IProps {
  list: "today" | "tomorrow" | search | Date;
}

export const Bookings = ({ list }: IProps) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    const getBookings = async () => {
      const response = await fetch(
        `http://localhost:2500/api/booking/get?q=${
          list === "today"
            ? format(new Date(), "yyyy-MM-dd")
            : list === "tomorrow"
            ? format(new Date(new Date().getTime() + 86400000), "yyyy-MM-dd")
            : list
        }`
      );
      const data = await response.json();

      setBookings(data);
    };
    getBookings();
    // getBookings(); SÄTTS PÅ NÄR BACKEND ÄR KLAR

    // eslint-disable-next-line
  }, [list]);

  return (
    <>
      <div className="bookings">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard key={booking.bookingID} booking={booking} />
          ))
        ) : (
          <Text dim>Just nu finns det inga bokningar.</Text>
        )}
      </div>
    </>
  );
};
