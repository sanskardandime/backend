import dotenv from "dotenv";
import express from "express";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Working...");
});

app.listen(port, () => {
  console.log(`I am listening at http://localhost:${port} port`);
});
