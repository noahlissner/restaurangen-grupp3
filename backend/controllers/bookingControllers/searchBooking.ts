import { Request, Response } from "express";
import { Booking } from "../../models/bookingModel";

interface IBooking {
  date: string;
  time: number;
  quantity: number;
  tables: number;
  bookingID: string;
  customer: any;
}

export const searchBooking = async (req: Request, res: Response) => {
  const { quantity, date } = req.body;

  console.log(quantity, date);

  const currentBookings = await Booking.find({ date });

  // console.log(currentBookings);

  res.send(currentBookings);
};
