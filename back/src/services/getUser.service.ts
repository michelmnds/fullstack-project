import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { tUserResponse } from "../interfaces/users.interfaces";

const getUserService = async (): Promise<User[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userList: User[] = await userRepository.find();

  return userList;
};

export { getUserService };
