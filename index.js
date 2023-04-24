const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");

const taskRouter = require("./routes/task-router.js");
app.use(cors({
    origin:["http://localhost:3000","https://to-do-list-app-l57x.onrender.com"]
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/tasks",taskRouter);

connectDB();
app.listen(PORT, () => {
    console.log(` Server is running in http://localhost:${PORT}`)
})







