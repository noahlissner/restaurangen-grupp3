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

export const getBookings = async (req: Request, res: Response) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ message: "Bad request." });
  }

  const queriedBookings: IBooking[] = await Booking.find({
    $or: [{ date: q }, { bookingID: q }],
  });

  res.send(queriedBookings);
};
