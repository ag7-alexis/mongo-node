require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

mongoose.connect(process.env.MONGODB_URI);

const database = mongoose.connection;

database.on("error", (e) => console.log("Error", e));
database.on("open", () => {
    console.log("Open");
    app.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
    });
});

const app = express();
app.use(express.json());
app.use("/api", router);

app.get("", (req, res) => {
    res.send("test");
});
