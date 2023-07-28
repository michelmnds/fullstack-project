import { Repository } from "typeorm";
import { tUserRequest, tUserResponse } from "../interfaces/users.interfaces";
import { User } from "../entities/user.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import {
  userPatchSchema,
  userRequestSchema,
  userResponseSchema,
} from "../schemas/users.schema";

const patchUserService = async (
  userId: number,
  userData: tUserRequest
): Promise<tUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const userValidatedData = userPatchSchema.parse(userData);
  const oldUserData: User | null | any = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!oldUserData) {
    throw new AppError("User not found", 404);
  }

  const newUserData: tUserRequest | any = userRepository.create({
    ...oldUserData,
    ...userValidatedData,
  });
  await userRepository.save(newUserData);

  const returnedUser = userResponseSchema.parse(newUserData);

  return returnedUser;
};

export { patchUserService };
