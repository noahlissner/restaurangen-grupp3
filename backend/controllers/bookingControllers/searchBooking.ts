import { Request, Response } from "express";
import { CalcAvailable } from "../../helpers/CalcAvailable";
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

  if (!quantity || !date) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const currentBookings: IBooking[] = await Booking.find({ date });

  const available = CalcAvailable(currentBookings, quantity);

  console.log(available);

  res.send(available);
};
