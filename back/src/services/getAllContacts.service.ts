import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";
import { tContactResponse } from "../interfaces/contact.interfaces";
import { contactResponseSchema } from "../schemas/contact.shcema";

const getAllContactsService = async (userId: number): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();

  return contacts;
};

export { getAllContactsService };
