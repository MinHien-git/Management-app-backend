import express, { Express, Request, Response } from "express";
import { authController } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {});

router.post("/login", authController.postLogin);

module.exports = router;
