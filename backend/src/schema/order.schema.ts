import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
    fullName: string({
      required_error: "Full Name is required",
    }),
    location: string({
      required_error: "Location is required",
    }).min(10, "Description should be at least 120 characters long"),
    phoneNumber: number({
      required_error: "Phone Number is required",
    }),
  }),
};

const params = {
  params: object({
    orderId: string({
      required_error: "orderId is required",
    }),
  }),
};

export const createOrderSchema = object({
  ...payload,
});

export const updateOrderSchema = object({
  ...payload,
  ...params,
});

export const deleteOrderSchema = object({
  ...params,
});

export const getOrderSchema = object({
  ...params,
});

export type CreateOrderInput = TypeOf<typeof createOrderSchema>;
export type UpdateOrderInput = TypeOf<typeof updateOrderSchema>;
export type ReadOrderInput = TypeOf<typeof getOrderSchema>;
export type DeleteOrderInput = TypeOf<typeof deleteOrderSchema>;
