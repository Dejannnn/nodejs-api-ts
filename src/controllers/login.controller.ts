import { db } from "@/database/db";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "@/utils/generateJwt";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }
  console.log(">>>>>req.body>>>", req.body);
  let user = await db.user.findUnique({ where: { email } });
  console.log(">>>>user>>>", user);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }
  //let token = generateToken({ email: user.email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  // Login successful
  return res.status(200).json({ message: "Login success!", user });
};
