import "reflect-metadata";
// import "express-async-errors";
import express from "express";

const app = express();

app.use(express.json());
app.get("/user", (req, res) => {
  return res.json("funciona");
});
export default app;
