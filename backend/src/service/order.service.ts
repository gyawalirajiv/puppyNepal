import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import OrderModel, {
  OrderDocument,
  OrderInput,
} from "../models/order.model";
import { databaseResponseTimeHistogram } from "../utils/metrics";
import {findCategory} from "./category.service";

export async function createOrder(input: OrderInput) {
  const metricsLabels = {
    operation: "createOrder",
  };

  const category = await findCategory({ categoryId: input.product._id });
  delete input.product;

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await OrderModel.create({...input, category});
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });
    throw e;
  }
}

export async function findOrder(
  query: FilterQuery<OrderDocument>,
  options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findOrder",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await OrderModel.findOne(query, {}, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findAllOrder(
    query: FilterQuery<OrderDocument>,
    options: QueryOptions = { lean: true }
) {
  const metricsLabels = {
    operation: "findAllOrder",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const result = await OrderModel.find({}, {}, options);
    timer({ ...metricsLabels, success: "true" });
    return result;
  } catch (e) {
    timer({ ...metricsLabels, success: "false" });

    throw e;
  }
}

export async function findAndUpdateOrder(
  query: FilterQuery<OrderDocument>,
  update: UpdateQuery<OrderDocument>,
  options: QueryOptions
) {
  return OrderModel.findOneAndUpdate(query, update, options);
}

export async function deleteOrder(query: FilterQuery<OrderDocument>) {
  return OrderModel.deleteOne(query);
}
