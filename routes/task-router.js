const express = require("express");
const {createTask, getAllTasks, getTask, deleteTask, updateTask} = require("../controller/task-controller");
const router = express.Router();
//?Get route and post
router.route("/").get(getAllTasks).post(createTask);
//?put , delete and update route
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

module.exports = router;