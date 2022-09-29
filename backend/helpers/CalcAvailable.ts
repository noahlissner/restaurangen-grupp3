interface IBooking {
  date: string;
  time: number;
  quantity: number;
  tables: number;
  bookingID: string;
  customer: any;
}

export const CalcAvailable = (
  currentBookings: IBooking[],
  quantity: number
) => {
  const bookings_18 = currentBookings.filter((booking) => booking.time === 18);
  const bookings_21 = currentBookings.filter((booking) => booking.time === 21);

  const tables_18: number = bookings_18.reduce((acc, curr) => {
    return acc + curr.tables;
  }, 0);

  const tables_21: number = bookings_21.reduce((acc, curr) => {
    return acc + curr.tables;
  }, 0);

  const available = {
    available_18: Math.ceil(quantity / 6) + tables_18 <= 15,
    available_21: Math.ceil(quantity / 6) + tables_21 <= 15,
  };

  return available;
};
