import { Request, Response } from "express";
import { createContactSerivce } from "../services/createContact.service";
import {
  tContactRequest,
  tContactResponse,
} from "../interfaces/contact.interfaces";
import { getAllContactsService } from "../services/getAllContacts.service";
import { patchContactService } from "../services/patchContact.service";
import { deleteContactService } from "../services/deleteContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);
  const data: tContactRequest = req.body;

  const newContact = await createContactSerivce(userId, data);

  return res.status(201).json(newContact);
};

const getAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);
  const contacts = await getAllContactsService(userId);

  return res.status(200).json(contacts);
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
