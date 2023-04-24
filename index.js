const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
const path = require("node:path");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/connectDB");

const taskRouter = require("./routes/task-router.js");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/tasks", taskRouter);
//?DEPLOYMENT CODE
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__filename, "../to-do-list-frontend/build")))
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../", "to-do-list-frontend", "build", "index.html")
        )
    })

} else {
    app.get("/", (req, res) => {
    res.send("Home Page")
    })

}

connectDB();
app.listen(PORT, () => {
    console.log(` Server is running in http://localhost:${PORT}`)
})







