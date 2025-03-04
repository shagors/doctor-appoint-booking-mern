import express from "express";
import cors from "cors";
import "dotenv/config";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// api routes

app.get("/", (req, res) => {
  res.send("Doctor appointment API is running");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
