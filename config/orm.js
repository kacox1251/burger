/*
    * `selectAll()`
    * `insertOne()`
    * `updateOne()`
*/

const connection = require("../config/connection.js");

const orm = {
  all: function(table, cb) {
    const queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, column, value, cb) {
    const queryString = `INSERT INTO ${table} (${column}, devoured) VALUES (${value}, false)`;

    console.log(queryString);

    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(table, columnVal, condition, cb) {
    const queryString = `UPDATE ${table} SET (${columnVal}) WHERE (${condition} false)`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
