const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burgers = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (col, val, cb) => {
        orm.create("burgers", col, val, (res) => {
            cb(res);
        });
    },
    update: (id, cb) => {
        orm.update("burgers", "devoured", true, "id", id, (res) => {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;