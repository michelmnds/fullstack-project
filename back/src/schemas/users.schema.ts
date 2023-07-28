import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  register_data: z
    .date()
    .nullish()
    .default(() => new Date()),
});
const userRequestSchema = userSchema.omit({
  id: true,
  register_data: true,
});
const userResponseSchema = userSchema;

export { userRequestSchema, userResponseSchema, userSchema };
