import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  patchUserController,
} from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userRequestSchema } from "../schemas/users.schema";
import { emailValidation } from "../middlewares/emailValidation.middleware";
import { contactRequestSchema } from "../schemas/contact.shcema";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  patchContactController,
} from "../controllers/contacts.controller";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userRequestSchema), createUserController);
userRoutes.post(
  "/:id/contact",
  ensureDataIsValid(contactRequestSchema),
  createContactController
);
userRoutes.get("", getUserController);
userRoutes.get("/:id/contact", getAllContactsController);
userRoutes.delete("/:id", deleteUserController);
userRoutes.patch("/:id", emailValidation, patchUserController);
userRoutes.patch("/contact/:id", emailValidation, patchContactController);
userRoutes.delete("/contact/:id", deleteContactController);

export { userRoutes };
