import { db } from "@/database/db";
import { Request, Response } from "express";

class CustomerController {
  constructor() {
    //Insatnce service direct is bad pratcie over consturctor is better option
  }
  public static GetUser = async (req: Request, res: Response) => {
    const customers = await db.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(customers);
  };
  public static GetUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(">>>>>req.params", req.params);
    const customer = await db.customer.findUnique({
      where: { id },
    });
    res.status(200).json(customer);
  };

  public static async CreateCustomer(req: Request, res: Response) {
    let response = await db.customer.create({ data: { ...req.body } });
    res.status(201).json(response);
  }
}

export default CustomerController;
