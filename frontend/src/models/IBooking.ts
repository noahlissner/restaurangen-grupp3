import { ICustomer } from "./ICustomer";

export interface IBooking {
  date: string;
  time: string;
  quantity: number;
  tables: number;
  customer: ICustomer;
}

export const defaultValue: IBooking = {
  date: "",
  time: "",
  quantity: 0,
  tables: 0,
  customer: { name: "", email: "", phone: "" },
};
