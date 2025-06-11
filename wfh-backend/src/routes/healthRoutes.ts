import express, { Request, Response } from "express";

const healthRouter = express.Router();

healthRouter.get("/", async (req: Request, res: Response) => {
  res.status(201).json({ message: "Server is healthy" });
});

export default healthRouter;
