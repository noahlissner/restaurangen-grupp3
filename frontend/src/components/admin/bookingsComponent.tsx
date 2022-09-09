import { useEffect, useState } from "react";
import { BookingCard } from "./bookingCard";

type search = string;

interface IProps {
  list: "today" | "tomorrow" | search | Date;
}

interface IBooking {
  booking_id: number;
  name: string;
  customer_id: number;
  phone: string;
  email: string;
  quantity: number;
  date: Date;
}

export const Bookings = ({ list }: IProps) => {
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    const getBookings = async () => {
      const response = await fetch(
        `http://localhost:2500/api/bookings/${list}`
      );
      const data = await response.json();
      setBookings(data);
    };
    // getBookings(); SÄTTS PÅ NÄR BACKEND ÄR KLAR
    setBookings([
      {
        booking_id: 1,
        name: "Test",
        customer_id: 1,
        phone: "0701234567",
        email: "asd",
        quantity: 1,
        date: new Date(),
      },
      {
        booking_id: 2,
        name: "Test2",
        customer_id: 2,
        phone: "0701234567",
        email: "asd",
        quantity: 1,
        date: new Date(),
      },
      {
        booking_id: 3,
        name: "Test3",
        customer_id: 3,
        phone: "0701234567",
        email: "asd",
        quantity: 1,
        date: new Date(),
      },
    ]);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="bookings">
        {bookings.map((booking) => (
          <BookingCard key={booking.booking_id} booking={booking} />
        ))}
      </div>
    </>
  );
};
