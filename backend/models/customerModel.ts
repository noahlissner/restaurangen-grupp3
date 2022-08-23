import { Schema, model } from "mongoose";

interface ICustomer {
  name: string;
  email: string;
  phone: string;
}

export const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export const Customer = model<ICustomer>("Customer", CustomerSchema);
