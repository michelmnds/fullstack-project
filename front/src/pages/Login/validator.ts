import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Must be an email."),
});

export type LoginData = z.infer<typeof schema>;
