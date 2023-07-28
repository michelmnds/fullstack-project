import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  patchUserController,
} from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userRequestSchema } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userRequestSchema), createUserController);
userRoutes.get("", getUserController);
userRoutes.delete("/:id", deleteUserController);
userRoutes.patch("/:id", patchUserController);

export { userRoutes };
