import { Repository } from "typeorm";
import {
  tContactRequest,
  tContactResponse,
} from "../interfaces/contact.interfaces";
import { Contact } from "../entities/contact.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/AppError";
import {
  contactRequestSchema,
  contactResponseSchema,
} from "../schemas/contact.shcema";
import { Request } from "express";
import { User } from "../entities/user.entitie";

const createContactSerivce = async (
  userId: any,
  data: tContactRequest
): Promise<tContactResponse> => {
  const { email, full_name, phone_number } = data;
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);
  const findContact = await contactRepository.findOne({
    where: {
      email,
    },
  });
  const user: any = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("Invalid userId", 404);
  }

  if (findContact) {
    throw new AppError("Contact already exists", 409);
  }

  const savedContact = await contactRepository.save({
    ...data,
    user,
  });
  const returnedContact = contactResponseSchema.parse(savedContact);

  return returnedContact;
};

export { createContactSerivce };
