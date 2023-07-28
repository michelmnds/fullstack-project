import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { tUserRequest, tUserResponse } from "../interfaces/users.interfaces";
import { userResponseSchema } from "../schemas/users.schema";
import { AppError } from "../errors/AppError";

const createUserService = async (
  data: tUserRequest
): Promise<tUserResponse> => {
  const { email, full_name, phone_number } = data;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }
  console.log(email);
  const user: User = userRepository.create(data);
  await userRepository.save(user);

  const returnedUser = userResponseSchema.parse(user);

  return returnedUser;
};

export { createUserService };
