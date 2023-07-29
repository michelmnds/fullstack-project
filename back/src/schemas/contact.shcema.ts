import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  register_data: z
    .date()
    .nullish()
    .default(() => new Date()),
});
const contactRequestSchema = contactSchema.omit({
  id: true,
  register_data: true,
});
const contactResponseSchema = contactSchema;

const contactPacthSchema = z.object({
  full_name: z.string().nullish(),
  email: z.string().email().nullish(),
  phone_number: z.string().nullish(),
});

export {
  contactRequestSchema,
  contactResponseSchema,
  contactSchema,
  contactPacthSchema,
};
