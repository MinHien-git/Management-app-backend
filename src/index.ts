import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const authRoutes = require("../src/routes/auth.routes");
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(authRoutes);

app.listen(port, () => console.log("listen to port: ", port));
