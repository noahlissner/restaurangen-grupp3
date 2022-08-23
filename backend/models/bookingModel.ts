import { Schema, model } from "mongoose";

interface IBooking {
  date: string;
  time: number;
  quantity: number;
  tables: number;
  bookingID: string;
  customer: any;
}

export const BookingSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  tables: {
    type: Number,
    required: true,
  },
  bookingID: {
    type: String,
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

export const Booking = model<IBooking>("Booking", BookingSchema);
