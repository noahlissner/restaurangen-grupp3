import { Request, Response } from "express";
import { Booking } from "../../models/bookingModel";
import { Customer } from "../../models/customerModel";

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
export const createBooking = async (req: Request, res: Response) => {
  const { date, time, quantity, tables, bookingID, name, email, phone } =
    req.body;

  const foundCustomer = await Customer.findOne({ email });

  if (foundCustomer) {
    const newBooking = new Booking({
      date,
      time,
      quantity,
      tables,
      bookingID,
      customer: foundCustomer._id,
    });

    await newBooking.save();

    res.status(200).json({
      success: true,
      data: newBooking,
    });
  } else {
    const newCustomer = new Customer({
      name,
      email,
      phone,
    });

    await newCustomer.save();

    const newBooking = new Booking({
      date,
      time,
      quantity,
      tables,
      bookingID,
      customer: newCustomer._id,
    });

    await newBooking.save();

    res.status(200).json({
      success: true,
      data: newBooking,
    });
  }
};
