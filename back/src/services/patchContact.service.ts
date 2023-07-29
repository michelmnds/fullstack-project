import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import {
  tContactRequest,
  tContactResponse,
} from "../interfaces/contact.interfaces";
import {
  contactPacthSchema,
  contactResponseSchema,
} from "../schemas/contact.shcema";

const patchContactService = async (
  contactData: tContactRequest,
  contactId: number
): Promise<tContactResponse> => {
  const contactRespository = AppDataSource.getRepository(Contact);
  const validatedData: any = contactPacthSchema.parse(contactData);

  const oldContact = await contactRespository.findOne({
    where: {
      id: contactId,
    },
  });

  const newContact = contactRespository.create({
    ...oldContact,
    ...validatedData,
  });
  await contactRespository.save(newContact);

  return contactResponseSchema.parse(newContact);
};

export { patchContactService };
