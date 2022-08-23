import { Request, Response } from "express";

export const showBookings = async (req: Request, res: Response) => {
  res.send("Show Bookings");
};
