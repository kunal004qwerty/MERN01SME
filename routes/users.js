import express from "express";
import User from "../models/User.js";

const router = express.Router();

// -----CREATE A USER
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ------GET ALL USER
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ----GET USER BY ID
router.get("/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    let UserData = await User.findById(_id);
    if (!UserData) {
      return res.status(404).send();
    } else {
      res.status(200).json(UserData);
      console.log(UserData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// ----------UpDATE BY ID
router.patch("/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    let updateUser = await User.findByIdAndUpdate(_id, req.body);
    res.status(200).json(`user with id: ${_id} is updated`);
  } catch (error) {
    res.status(500).send(error);
  }
});

// ------------DELETE THE STUDENT BY ID
router.delete("/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    let deleteStudent = await User.findByIdAndDelete(_id);
    if (!req.params.id) {
      return res.status(400).send();
    } else {
      res.status(200).json(`User with id: ${_id} is deleted from database`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
