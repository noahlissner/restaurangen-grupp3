import { Request, Response } from "express";
import { Customer } from "../../models/customerModel";

interface ICustomer {
  name: string;
  email: string;
  phone: string;
}

export const getCustomer = async (req: Request, res: Response) => {
  const { customer } = req.query;

  if (!customer) {
    return res.status(400).json({ message: "Bad request." });
  }

  const queriedCustomer: ICustomer = (await Customer.findById(
    customer
  )) as unknown as ICustomer;

  res.send(queriedCustomer);
};
