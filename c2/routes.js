const express = require("express");
const Dog = require("./models/Dog");

const router = express.Router();

module.exports = router;

router.get("/dog", async (req, res) => {
    const dogs = await Dog.find({});
    res.send(dogs);
});

router.post("/dog", async (req, res) => {
    const dog = new Dog({ name: req.body.name, race: req.body.race, color: req.body.color });
    await dog.save();
    res.send(dog);
});
