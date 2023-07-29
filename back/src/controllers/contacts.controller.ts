import { Request, Response } from "express";
import { createContactSerivce } from "../services/createContact.service";
import {
  tContactRequest,
  tContactResponse,
} from "../interfaces/contact.interfaces";
import { getAllContactsService } from "../services/getAllContacts.service";
import { contactPacthSchema } from "../schemas/contact.shcema";
import { patchContactService } from "../services/patchContact.service";
import { deleteContactService } from "../services/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.id;
  const contactData: any = req.body;

  const newContact: any = await createContactSerivce(id, contactData);

  return res.status(201).json(newContact);
};

const getAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);
  const contacts = await getAllContactsService(userId);

  return res.json(contacts);
};

const patchContactController = async (req: Request, res: Response) => {
  const contactId = Number(req.params.id);
  const data = req.body;

  const contact = await patchContactService(data, contactId);
  return res.status(201).json(contact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = Number(req.params.id);

  await deleteContactService(contactId);

  return res.status(200).send();
};

export {
  createContactController,
  getAllContactsController,
  patchContactController,
  deleteContactController,
};
