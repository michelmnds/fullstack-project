import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { handelAppError } from "./middlewares/handleAppError.middleware";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use(handelAppError);

export default app;
