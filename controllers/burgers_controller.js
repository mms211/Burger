const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const burger = require("../models/burger.js")

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create("burger_name", req.body.name, (result) => {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
            console.log(`you have added ${req.body.name} to you database`)
        });
});

router.put("/api/burgers/:id", (req, res) => {

});

// Export routes for server.js to use.
module.exports = router;