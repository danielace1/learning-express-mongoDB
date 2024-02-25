import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  const users = ["a", "b", "c", "d"];

  return res.json({
    users: users,
  });
});

export default userRouter;
