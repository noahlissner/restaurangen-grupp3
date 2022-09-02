import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";
const jwt = require("jsonwebtoken");

/**
 * This function is used to check token authorization for admin routes.
 * If token is authorized redirect to admin page.
 * Otherwise sends error message.
 *
 * @route GET /admin/auth
 * @public
 */

export const checkAuth = async (req: Request, res: Response) => {
  const auth: string | undefined = req.headers.authorization;

  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        res.status(401).json({
          message: "Unauthorized",
        });
      } else {
        const tokenData = jwt.decode(token, process.env.JWT_SECRET);
        res.location("http://127.0.0.1:3000/admin");
      }
    });
  }
};
