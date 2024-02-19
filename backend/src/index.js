import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/workout.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => console.log("Server listening at port :", port));
