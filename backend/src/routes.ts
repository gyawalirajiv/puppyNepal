import {Express, Request, Response} from "express";
import {
  createProductHandler, deleteProductHandler, getAllProductByCategoryHandler,
  getAllProductHandler,
  getProductHandler,
  updateProductHandler,
} from "./controller/product.controller";
import {createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler,} from "./controller/session.controller";
import {
  createCategoryHandler,
  deleteCategoryHandler,
  getAllCategoryHandler,
  getCategoryHandler,
  updateCategoryHandler
} from "./controller/category.controller";
import {createUserHandler} from "./controller/user.controller";
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";
import {createSessionSchema} from "./schema/session.schema";
import {createUserSchema} from "./schema/user.schema";
import {
  createOrderHandler, deleteOrderHandler,
  getAllOrderHandler,
  getOrderHandler,
  updateOrderHandler
} from "./controller/order.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.post("/api/category", createCategoryHandler);
  app.get("/api/category", getAllCategoryHandler);
  app.get("/api/category/:categoryId", getCategoryHandler);
  app.put("/api/category/:categoryId", updateCategoryHandler);
  app.delete("/api/category/:categoryId", deleteCategoryHandler);

  app.get("/api/sessions", requireUser, getUserSessionsHandler);
  app.delete("/api/sessions", requireUser, deleteSessionHandler);

  app.post("/api/products", createProductHandler);
  app.get("/api/products", getAllProductHandler);
  app.get("/api/products/:categoryId/category", getAllProductByCategoryHandler);
  app.get("/api/products/:productId", getProductHandler);
  app.put("/api/products/:productId", updateProductHandler);
  app.delete("/api/products/:productId", deleteProductHandler);

  app.post("/api/order", createOrderHandler);
  app.get("/api/order", getAllOrderHandler);
  app.get("/api/order/:orderId", getOrderHandler);
  app.put("/api/order/:orderId", updateOrderHandler);
  app.delete("/api/order/:orderId", deleteOrderHandler);

  // app.post(
  //   "/api/products",
  //   [requireUser, validateResource(createProductSchema)],
  //   createCategoryHandler
  // );
  // app.get(
  //     "/api/products/:productId",
  //     validateResource(getProductSchema),
  //     getProductHandler
  // );
  // app.put(
  //   "/api/products/:productId",
  //   [requireUser, validateResource(updateProductSchema)],
  //   updateProductHandler
  // );
  // app.delete(
  //   "/api/products/:productId",
  //   [requireUser, validateResource(deleteProductSchema)],
  //   deleteProductHandler
  // );
}

export default routes;
