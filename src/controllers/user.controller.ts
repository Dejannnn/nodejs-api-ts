import { db } from "@/database/db";
import { Request, RequestHandler, Response } from "express";
import bcrypt from "bcrypt";
export const GetUsers: RequestHandler = (req: Request, res: Response) => {
  res.json({ message: "List of users" });
};

export const GetUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  let user = await db.user.findFirst({ where: { id } });
  if (!user) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.status(200).json(user);
};

export const CreateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await db.user.findUnique({ where: { email: req.body.email } });
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist with this email addres" });
    }
    
    let hashPassword = await bcrypt.hash(req.body.password, 10);
 
    await db.user.create({
      data: { ...req.body, password: hashPassword },
    });
    res.status(201).json({ message: "Created user" });
  } catch (error) {
    console.log(">>>error>>.", error);
  }
};

export const DeleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const user = await db.user.findUnique({ where: { id } });

  if (!user) {
    res.status(404).json({ message: "Not found user" });
  }

  let deletedUser = await db.user.delete({ where: { id } });

  res.status(201).json({ message: "User deleted" });
};
