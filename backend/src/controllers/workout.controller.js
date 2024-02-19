import mongoose from "mongoose";
import Workout from "../models/workout.model.js";

// Get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    if (workouts) {
      res.status(200).json(workouts);
    }
  } catch (error) {
    console.log("Error getting workouts");
    res.status(400).json({ error: error.message });
  }
};

// Get a single workout
const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "No workout found for the given id" });
    }
    const workout = await Workout.findById(id);
    if (workout) {
      res.status(200).json(workout);
    } else {
      return res
        .status(404)
        .json({ error: "No workout found for the given id" });
    }
  } catch (error) {
    console.log("Error getting a workout for id", id);
    res.status(400).json({ error: error.message });
  }
};

// Create a workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    if (workout) {
      res.status(201).json({ status: "success" });
    } else {
      res.status(500).json({ status: "failure" });
    }
  } catch (error) {
    console.log("Error creating workout");
    res.status(400).json({ error: error.message });
  }
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findByIdAndUpdate(id, { ...req.body });
    if (workout) {
      res.status(200).json({ status: "success" });
    } else {
      res.status(404).json({ error: "Invalid parameters" });
    }
  } catch (error) {
    console.log("Error updating workout");
    res.status(400).json({ error: error.message });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "No workout found for the given id" });
    }
    const workout = await Workout.findByIdAndDelete(id);
    if (workout) {
      res.status(200).json({ status: "success" });
    } else {
      res.status(400).json({ status: "No workput found for given id" });
    }
  } catch (error) {
    console.log("Error deleting workout");
    res.status(400).json({ error: error.message });
  }
};

export {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
