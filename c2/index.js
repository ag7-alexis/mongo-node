const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const host = "localhost";
const port = 3000;
mongoose.connect("mongodb+srv://mongo_admin:test123@cluster0.4hmoj.mongodb.net/test");

const database = mongoose.connection;

database.on("error", (e) => console.log("Error", e));
database.on("open", () => {
    console.log("Open");
    app.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
});

const app = express();
app.use(express.json());
app.use("/api", router);

app.get("", (req, res) => {
    res.send("test");
});
