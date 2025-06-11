import express from "express";
const cors = require("cors");
require("dotenv").config();

import connectDB from "./config/database";

const app = express();

connectDB();

app.use(express.json());
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
