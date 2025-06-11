"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts or src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const organisationRoutes_1 = __importDefault(require("./routes/organisationRoutes"));
const healthRoutes_1 = __importDefault(require("./routes/healthRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, database_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/organisations", organisationRoutes_1.default);
app.use("/api/health", healthRoutes_1.default);
app.listen(process.env.PORT || 3000, () => {
    console.log("🚀 Server is running on http://localhost:3000");
});
