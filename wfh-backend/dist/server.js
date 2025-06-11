"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
require("dotenv").config();
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
(0, database_1.default)();
app.use(express_1.default.json());
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/amar/:food", (req, res) => {
//   const food = req.params.food;
//   let jsonObj: { [key: string]: any } = {};
//   jsonObj["query"] = req.query;
//   jsonObj["body"] = req.body;
//   jsonObj["params"] = req.params;
//   jsonObj["headers"] = req.headers;
//   jsonObj["method"] = req.method;
//   jsonObj["url"] = req.url;
//   jsonObj["cookkies"] = req.cookies;
//   jsonObj["message"] = `Hey love!, I will cook ${food} for you`;
//   jsonObj["name"] = "Amar";
//   res.send(jsonObj);
//   //   res.format({
//   //     json: () => {
//   //       res.send({ message: "HI MY BUBBA" });
//   //     },
//   //   });
// });
app.listen(process.env.PORT || 3000, () => {
    console.log("🚀 Server is running on http://localhost:3000");
});
