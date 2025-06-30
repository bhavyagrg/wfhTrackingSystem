// src/server.ts or src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database";
import organisationRoutes from "./routes/organisationRoutes";
import healthRoutes from "./routes/healthRoutes";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/organisations", organisationRoutes);
app.use("/api/health", healthRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
