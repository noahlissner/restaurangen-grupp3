import { Request, Response } from "express";
import { CalcAvailable } from "../../helpers/CalcAvailable";
import { Booking } from "../../models/bookingModel";
import { Customer } from "../../models/customerModel";

interface IBooking {
  date: string;
  time: number;
  quantity: number;
  tables: number;
  bookingID: string;
  customer: any;
}

export const updateBooking = async (req: Request, res: Response) => {
  const { bookingID, date, quantity, tables, name, phone, email, customer } =
    req.body;

  if (
    !bookingID ||
    !date ||
    !quantity ||
    !tables ||
    !name ||
    !phone ||
    !email
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const booking = await Booking.find({ bookingID: bookingID });
  const oldCustomer = await Customer.find({ customerID: customer });

  if (!booking) {
    return res.status(400).json({ message: "Booking not found" });
  }

  const currentBookings: IBooking[] = await Booking.find({
    date,
    bookingID: { $ne: bookingID },
  });

  const available = CalcAvailable(currentBookings, quantity);

  if (!available) {
    return res.status(400).json({ message: "No tables available" });
  }

  const updatedCustomer = await Customer.findByIdAndUpdate(
    oldCustomer[0]._id,
    {
      name,
      phone,
      email,
    },
    { new: true }
  );

  const updatedBooking = await Booking.findByIdAndUpdate(
    booking[0]._id,
    {
      date,
      quantity,
      tables,
      customer: updatedCustomer!._id,
    },
    { new: true }
  );

  res.send({ updatedBooking, updatedCustomer });
};
