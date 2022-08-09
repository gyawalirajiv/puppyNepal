import { object, number, string, TypeOf } from "zod";

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    })
  }),
};

const params = {
  params: object({
    categoryId: string({
      required_error: "categoryId is required",
    }),
  }),
};

export const createCategorySchema = object({
  ...payload,
});

export const updateCategorySchema = object({
  ...payload,
  ...params,
});

export const deleteCategorySchema = object({
  ...params,
});

export const getCategorySchema = object({
  ...params,
});

export type CreateCategoryInput = TypeOf<typeof createCategorySchema>;
export type UpdateCategoryInput = TypeOf<typeof updateCategorySchema>;
export type ReadCategoryInput = TypeOf<typeof getCategorySchema>;
export type DeleteCategoryInput = TypeOf<typeof deleteCategorySchema>;
