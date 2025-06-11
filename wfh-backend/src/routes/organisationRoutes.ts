// src/routes/organisationRoutes.ts
import express, { Request, Response } from "express";
import Organisation from "../models/organisationModel";

const organisationRouter = express.Router();

organisationRouter.get("/", async (req: Request, res: Response) => {
  try {
    const organisations = await Organisation.find();
    res.status(200).json(organisations);
  } catch (error) {
    console.error("Error fetching organisations:", error);
    res.status(500).json({ error: "Server error" });
  }
});

organisationRouter.post(
  "/create-organisation",
  async (req: Request, res: Response) => {
    try {
      const { org_name, name, max_wfh_days } = req.body;

      if (!org_name || !name) {
        return res
          .status(400)
          .json({ error: "org_name and name are required" });
      }

      const organisation = new Organisation({
        org_name,
        name,
        max_wfh_days,
      });

      const savedOrg = await organisation.save();
      res.status(201).json(savedOrg);
    } catch (error) {
      console.error("Error creating organisation:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

export default organisationRouter;
