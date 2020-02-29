// * Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");

// These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
    //   * `selectAll()`
    all: (tableInput, cb) => {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, tableInput, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //   * `insertOne()`
    create: (table, col, val, cb) => {
        const queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, col, val], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //   * `updateOne()`
    update: (table, col1, val1, col2, val2, cb) => {
        const queryString = "UPDATE ?? SET ?? = (?) WHERE ?? = (?);";
        connection.query(queryString, [table, col1, val1, col2, val2], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};
// * Export the ORM object in `module.exports`.
module.exports = orm;