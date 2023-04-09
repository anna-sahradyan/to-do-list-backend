const Task = require("../model/taskModel");
//?Create Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
//?GetAllTasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);

    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
//?getTask
const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json(`NO task with id ${id}`)
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
//?Delete
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            res.status(404).json(`NO task with id ${id}`);
        }
        res.status(200).send("Task deleted");

    } catch (err) {
        res.status(500).json({message: err.message})
    }
};
//?Updated
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await  Task.findByIdAndUpdate({_id:id},
            req.body,
            {new:true,runValidators:true,});
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({message: err.message})
    }

}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    updateTask
}



