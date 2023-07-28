import { z } from "zod";
import {
  userPatchSchema,
  userRequestSchema,
  userResponseSchema,
  userSchema,
} from "../schemas/users.schema";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userRequestSchema>;
type tUserResponse = z.infer<typeof userResponseSchema>;

type tUserPatch = z.infer<typeof userPatchSchema>;

export { tUser, tUserRequest, tUserResponse, tUserPatch };
