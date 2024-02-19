import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/workout.route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected");
    app.listen(port, () => console.log("Server listening at port :", port));
  })
  .catch((error) => {
    console.log("Error connecting to DB", error.message);
  });
