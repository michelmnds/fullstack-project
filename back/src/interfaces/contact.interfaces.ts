import { z } from "zod";
import {
  contactPacthSchema,
  contactRequestSchema,
  contactResponseSchema,
  contactSchema,
} from "../schemas/contact.shcema";

type tContact = z.infer<typeof contactSchema>;
type tContactRequest = z.infer<typeof contactRequestSchema>;
type tContactResponse = z.infer<typeof contactResponseSchema>;
type tContactPatch = z.infer<typeof contactPacthSchema>;

export { tContact, tContactRequest, tContactResponse };
