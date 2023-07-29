import { Request, Response } from "express";
import { tUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/createUser.service";
import { getUserService } from "../services/getUser.service";
import { User } from "../entities/user.entitie";
import { deleteUserSerive } from "../services/deleteUser.service";
import { patchUserService } from "../services/patchUser.service";
import { userRequestSchema, userResponseSchema } from "../schemas/users.schema";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: tUserRequest = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userList: User[] = await getUserService();

  return res.status(200).json(userList);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);

  await deleteUserSerive(userId);

  return res.status(201).send();
};

const patchUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const userId = Number(req.params.id);

  const user = await patchUserService(userId, userData);
  const returnedUser = userResponseSchema.parse(user);

  return res.status(201).json(returnedUser);
};

export {
  createUserController,
  getUserController,
  deleteUserController,
  patchUserController,
};
