import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import { AppError } from "../errors/AppError";

const deleteContactService = async (contactId: number) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOne({
    where: { id: contactId },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.delete({
    id: contactId,
  });
};

export { deleteContactService };
