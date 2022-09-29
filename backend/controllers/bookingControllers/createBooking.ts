import { Request, Response } from "express";
import { Booking } from "../../models/bookingModel";
import { Customer } from "../../models/customerModel";
import validator from "validator";

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Public
export const createBooking = async (req: Request, res: Response) => {
  const { date, time, quantity, tables, bookingID, name, email, phone } =
    req.body;

  if (
    !date ||
    !time ||
    !quantity ||
    !tables ||
    !bookingID ||
    !name ||
    !email ||
    !phone
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  if (!validator.isMobilePhone(phone)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid phone number" });
  }

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
