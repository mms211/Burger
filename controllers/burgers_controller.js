const express = require("express");

const router = express.Router();

// Import the model to use its database functions.
const burger = require("../models/burger.js")

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {

});

router.post("/api/burgers", (req, res) => {

});

router.put("/api/burgers/:id", (req, res) => {

});

// Export routes for server.js to use.
module.exports = router;