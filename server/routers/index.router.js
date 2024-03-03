import express from "express";
import {
  createOperation,
  getAllData,
  updateData,
  deleteDataById,
} from "../services/user.services.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "I'm learning express and mongoDB",
  });
});

// create operation
router.post("/create", async (req, res) => {
  const clientData = { ...req.body, created_at: Date.now() };

  try {
    const creation = await createOperation(clientData);
    console.log("created", creation);
    return res.json(clientData);
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map(
        (values) => values.message
      );
      return res.status(400).json({
        error: message,
      });
    }
    res.status(400).json(error.message);
  }
});

// read operation
router.get("/read", async (req, res) => {
  const userData = await getAllData();

  console.log(userData);
  return res.json(userData);
});

// update operation
router.put("/read/:id", async (req, res) => {
  const docId = req.params.id;

  // validate req.body
  if (docId) {
    const updatedResult = await updateData(docId, req.body);

    return res.json(updatedResult);
  }
  return res.status(403);
});

// delete operation
router.delete("/read/:id", async (req, res) => {
  const docId = req.params.id;

  // validate req.body
  if (docId) {
    await deleteDataById(docId);

    return res.json(true);
  }
  return res.status(403);
});

export default router;
