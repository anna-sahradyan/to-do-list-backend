const express = require("express");
const {createTask, getAllTasks} = require("../controller/task-controller");
const router = express.Router();
//?Get All Tasks
router.get("/api/tasks", getAllTasks)
//?Create Tasks
router.post("/api/tasks", createTask)

module.exports = router;