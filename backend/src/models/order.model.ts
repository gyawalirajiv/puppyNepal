import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";
import {CategoryDocument} from "./category.model";
import {ProductDocument} from "./product.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface OrderInput {
    product: ProductDocument["_id"];
    fullName: string;
    location: string;
    phoneNumber: number;
}

export interface OrderDocument extends OrderInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
            unique: true,
            default: () => `order_${nanoid()}`,
        },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        fullName: { type: String, required: true },
        location: { type: String, required: true },
        phoneNumber: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const OrderModel = mongoose.model<OrderDocument>("Order", orderSchema);

export default OrderModel;
