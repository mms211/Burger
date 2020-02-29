const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burgers = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (col, val, cb) {
        orm.create("burgers", col, val, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;