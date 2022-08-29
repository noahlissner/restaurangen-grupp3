export interface ICustomer {
  name: string;
  email: string;
  phone: string;
}

export const defaultValue: ICustomer = {
  name: "",
  email: "",
  phone: "",
};
