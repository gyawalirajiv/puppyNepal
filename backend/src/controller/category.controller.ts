import { Request, Response } from "express";
import {
  CreateCategoryInput,
  UpdateCategoryInput,
} from "../schema/category.schema";
import {
  createCategory,
  deleteCategory,
  findAndUpdateCategory,
  findCategory, findAllCategory,
} from "../service/category.service";

export async function createCategoryHandler(
    req: Request<{}, {}, CreateCategoryInput["body"]>,
    res: Response
) {
  const body = req.body;

  const product = await createCategory(body);

  return res.send(product);
}

export async function getAllCategoryHandler(
    req: Request<{}>,
    res: Response
) {
  const categories = await findAllCategory();
  if (!categories) {
    return res.sendStatus(404);
  }

  return res.send(categories);
}

export async function updateCategoryHandler(
    req: Request<UpdateCategoryInput["params"]>,
    res: Response
) {
  const update = req.body;
  const categoryId = req.params.categoryId;

  const category = await findCategory({ categoryId: categoryId });

  if (!category) {
    return res.sendStatus(404);
  }

  const updatedCategory = await findAndUpdateCategory({ categoryId: categoryId }, update, {
    new: true,
  });

  return res.send(updatedCategory);
}

export async function getCategoryHandler(
    req: Request<UpdateCategoryInput["params"]>,
    res: Response
) {
  const categoryId = req.params.categoryId;
  const category = await findCategory({ categoryId: categoryId });

  if (!category) {
    return res.sendStatus(404);
  }

  return res.send(category);
}

export async function deleteCategoryHandler(
    req: Request<UpdateCategoryInput["params"]>,
    res: Response
) {
  const categoryId = req.params.categoryId;

  const category = await findCategory({ categoryId });

  if (!category) {
    return res.sendStatus(404);
  }

  await deleteCategory({ categoryId });

  return res.sendStatus(200);
}
