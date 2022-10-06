import { Request, Response } from "express";
import { Booking } from "../../models/bookingModel";

export const deleteBooking = async (req: Request, res: Response) => {
  const { bookingID } = req.params;

  if (!bookingID) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const booking = await Booking.find({ bookingID: bookingID });

  if (!booking) {
    return res.status(400).json({ message: "Booking not found" });
  }

  await Booking.findByIdAndDelete(booking[0]._id);

  res.status(200).json({ success: true });
};
