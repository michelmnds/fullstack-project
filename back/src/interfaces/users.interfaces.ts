import { z } from "zod";
import {
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/users.schema";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userRequestSchema>;
type tUserResponse = z.infer<typeof userResponseSchema>;

export { tUser, tUserRequest, tUserResponse };
