import { Request, Response } from "express";
import {
  CreateOrderInput,
  UpdateOrderInput,
} from "../schema/order.schema";
import {
  createOrder,
  deleteOrder, findAllOrder,
  findAndUpdateOrder,
  findOrder,
} from "../service/order.service";
import {getCategoryHandler} from "./category.controller";
import {findCategory} from "../service/category.service";
import {OrderInput} from "../models/order.model";

export async function createOrderHandler(
  req: Request<{}, {}, CreateOrderInput["body"]>,
  res: Response
) {

  // @ts-ignore
  const body: OrderInput = req.body;
  const order = await createOrder(body);

  return res.send(order);
}

export async function updateOrderHandler(
  req: Request<UpdateOrderInput["params"]>,
  res: Response
) {

  const orderId = req.params.orderId;
  const update = req.body;

  const order = await findOrder({ orderId });

  if (!order) {
    return res.sendStatus(404);
  }

  const updatedOrder = await findAndUpdateOrder({ orderId }, update, {
    new: true,
  });

  return res.send(updatedOrder);
}

export async function getAllOrderHandler(
    req: Request<UpdateOrderInput["params"]>,
    res: Response
) {
  const order = await findAllOrder({ });

  if (!order) {
    return res.sendStatus(404);
  }

  return res.send(order);
}

export async function getOrderHandler(
  req: Request<UpdateOrderInput["params"]>,
  res: Response
) {
  const orderId = req.params.orderId;
  const order = await findOrder({ orderId });

  if (!order) {
    return res.sendStatus(404);
  }

  return res.send(order);
}

export async function deleteOrderHandler(
  req: Request<UpdateOrderInput["params"]>,
  res: Response
) {
  const orderId = req.params.orderId;

  const order = await findOrder({ orderId });

  if (!order) {
    return res.sendStatus(404);
  }

  await deleteOrder({ orderId });

  return res.sendStatus(200);
}
