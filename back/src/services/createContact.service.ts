import { Repository } from "typeorm";
import {
  tContactRequest,
  tContactResponse,
} from "../interfaces/contact.interfaces";
import { Contact } from "../entities/contact.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import { contactResponseSchema } from "../schemas/contact.shcema";

import { User } from "../entities/user.entitie";

const createContactSerivce = async (
  userId: number,
  data: tContactRequest
): Promise<tContactResponse> => {
  const { email, full_name, phone_number } = data;

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });
  await contactRepository.save(contact);

  return contactResponseSchema.parse(contact);
};

export { createContactSerivce };
