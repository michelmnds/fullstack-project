import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";

const getAllContactsService = async (userId: number): Promise<Contact[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  console.log(user);
  return user.contacts;
};

export { getAllContactsService };
