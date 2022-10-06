import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

interface ICredentials {
  username: string;
  password: string;
}

/**
 * This function is used to login the admin.
 * If credentials are correct a token is generated and returned to the client.
 * Otherwise an error message is returned.
 *
 * The body of the request is expected to be as interface {@link ICredentials}.
 *
 * @route POST /admin/login
 * @public
 */

export const adminLogin = async (req: Request, res: Response) => {
  const { username, password }: ICredentials = req.body;
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    res.status(200).json({
      message: "Success",
      token,
    });
  } else {
    res.status(406).json({
      message: `Wrong credentials.`,
    });
  }
};
