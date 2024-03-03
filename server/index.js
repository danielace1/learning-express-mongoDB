import express from "express";
import router from "./routers/index.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const SERVER_PORT = 3000;
dotenv.config();

// should be before the routing
app.use(cors());
app.use(express.json());
app.use(router);

router.get("*", (req, res) => {
  return res.status(404);
});

app.listen(SERVER_PORT, () => {
  console.log("server listening on port " + SERVER_PORT);
});

// using mongoose to connect to the MONGODB server
// install mongoose and env packages
// create .env and .env.example files
if (process.env.MONGODB_URL) {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(err);
  }
} else {
  console.error("ENV is not set");
}

// extracting URL
