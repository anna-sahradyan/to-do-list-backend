const express = require("express");
const {createTask, getAllTasks, getTask, deleteTask, updateTask} = require("../controller/task-controller");
const router = express.Router();
//?Get All Tasks
router.get("/api/tasks", getAllTasks)
//?Create Tasks
router.post("/api/tasks", createTask)
//?Get Task
router.get("/api/tasks/:id", getTask);
//?Delete
router.delete("/api/tasks/:id", deleteTask);
//?Updated
router.put("/api/tasks/:id", updateTask);
module.exports = router;