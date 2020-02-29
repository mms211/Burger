// * Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");

// These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
    //   * `selectAll()`
    all: (tableInput, cb) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //   * `insertOne()`
    create: (table, col, val, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //   * `updateOne()`
};
// * Export the ORM object in `module.exports`.
module.exports = orm;