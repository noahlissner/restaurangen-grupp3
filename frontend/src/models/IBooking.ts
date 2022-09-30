import { ICustomer } from "./ICustomer";

export interface IBooking {
  date: string;
  time: string;
  quantity: number;
  tables: number;
  customer: String;
  bookingID: string;
}

export const defaultValue: IBooking = {
  date: "",
  time: "",
  bookingID: "",
  quantity: 0,
  tables: 0,
  customer: "",
};
