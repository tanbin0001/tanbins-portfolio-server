import { Types } from "mongoose";

export type TSale = {
    sportsItemId: Types.ObjectId;
    sellerId?: Types.ObjectId;
    productName: string;
    price: number;
    quantity: number;
    buyerName: string;
    branch:string;
    saleDate: string;
  }