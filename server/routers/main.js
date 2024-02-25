import express from "express";
import userRouter from "./users.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "I'm learning express and mongoDB",
  });
});

router.get("/about", (req, res) => {
  return res.json({ message: "Welcome to the About Page" });
});

router.get("/about/:user", (req, res) => {
  console.log(req.params.user);
  return res.json({ message: `Hi there! ${req.params.user}` });
});

router.use("/users", userRouter);

export default router;
