import { Request, Response } from "express";
import {
  CreateProductInput,
  UpdateProductInput,
} from "../schema/product.schema";
import {
  createProduct,
  deleteProduct, findAllProduct,
  findAndUpdateProduct,
  findProduct,
} from "../service/product.service";
import {getCategoryHandler} from "./category.controller";
import {findCategory} from "../service/category.service";
import {ProductInput} from "../models/product.model";

export async function createProductHandler(
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
) {

  // @ts-ignore
  const body: ProductInput = req.body;
  const product = await createProduct(body);

  return res.send(product);
}

export async function updateProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {

  const productId = req.params.productId;
  const update = req.body;

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });

  return res.send(updatedProduct);
}

export async function getAllProductHandler(
    req: Request<UpdateProductInput["params"]>,
    res: Response
) {
  const product = await findAllProduct({ });

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}

export async function getProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {
  const productId = req.params.productId;
  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
}

export async function deleteProductHandler(
  req: Request<UpdateProductInput["params"]>,
  res: Response
) {
  const productId = req.params.productId;

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  await deleteProduct({ productId });

  return res.sendStatus(200);
}
