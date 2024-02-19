import express from "express";
import {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workout.controller.js";

const router = express.Router();

// Get all Workouts
router.get("/", getAllWorkouts);

// Get a single workout
router.get("/:id", getWorkoutById);

// Post a new Workout
router.post("/", createWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

export default router;
