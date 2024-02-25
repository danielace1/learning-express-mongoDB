import express from "express";
import router from "./routers/main.js";
import userRouter from "./routers/users.js";

const app = express();

const SERVER_PORT = 3000;

app.use(userRouter);
app.use(router);

router.get("*", (req, res) => {
  return res.json({
    success: false,
    message: "This is the 404 page",
  });
});

app.listen(SERVER_PORT, () => {
  console.log("server listening on port " + SERVER_PORT);
});
