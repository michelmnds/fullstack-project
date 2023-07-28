import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const emailValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userList: User[] = await userRepository.find();

  const emailList = userList.map((user) => {
    return user.email;
  });

  if (emailList.includes(email)) {
    throw new AppError("Email already registered", 409);
  }
  return next();
};

export { emailValidation };
