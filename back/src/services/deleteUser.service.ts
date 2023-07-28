import { Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities/user.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";

const deleteUserSerive = async (userId: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRepository.delete({
    id: userId,
  });
};

export { deleteUserSerive };
