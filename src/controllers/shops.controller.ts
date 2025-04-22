import { Request, RequestHandler, Response } from "express";
import { db } from "@/database/db";
export const GetShops: RequestHandler = async (req: Request, res: Response) => {
  return await db.shop.findMany({ orderBy: { createdAt: "desc" } });
};
export const GetShopById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const shop = await db.shop.findFirst({ where: { id } });
  if (shop) {
    res.status(409).json({ message: "Already exist shop" });
  }

  res.status(200).json(shop);
};

export const CreateShop: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    //Get userid
    const { name, slug, location, adminId } = req.body;

    //Check does ship already exist
    const shop = await db.shop.findFirst({ where: { slug } });
    if (shop) {
      res.status(409).json({ message: "Already exist shop" });
    }
    //Create shop
    await db.shop.create({ data: { ...req.body } });
  } catch (error) {
    res.status(500).json("Create shop faild");
  }
};
