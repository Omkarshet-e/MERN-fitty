import express from "express";

const router = express.Router();

// Get all Workouts
router.get("/", (req, res) => {
  res.send("Get all Workouts");
});

// Get a single workout
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send(`Get workpout for id:${id}`);
});

// Post a new Workout
router.post("/", (req, res) => {
  res.send("Create a workout");
});

// Delete a workout
router.delete("/:id", (req, res) => {
  res.send("Delete a workout");
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.send("Update a workout");
});

export default router;
