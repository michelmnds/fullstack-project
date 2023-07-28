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

const userPatchSchema = z.object({
  full_name: z.string().nullish(),
  email: z.string().email().nullish(),
  phone_number: z.string().nullish(),
});

export { userRequestSchema, userResponseSchema, userSchema, userPatchSchema };
