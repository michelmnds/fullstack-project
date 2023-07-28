import { Router } from "express";
import { createUserController } from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userRequestSchema } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userRequestSchema), createUserController);

export { userRoutes };
