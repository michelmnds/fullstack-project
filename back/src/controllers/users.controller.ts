import { Request, Response } from "express";
import { tUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/createUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: tUserRequest = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export { createUserController };
