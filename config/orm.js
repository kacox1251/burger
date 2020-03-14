const connection = require("./connection.js");

function objToSql(ob) {
  const arr = [];

  for (let key in ob) {
    const value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

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
    const queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (?, false)`;
    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(table, columnVal, condition, cb) {
    const queryString = `UPDATE ${table} SET ${objToSql(columnVal)} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

module.exports = orm;
