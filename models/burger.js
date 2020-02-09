const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(column, values, cb) {
    orm.create("burgers", column, values, function(res) {
      cb(res);
    });
  },
  update: function(columnVal, condition, cb) {
    orm.update("burgers", columnVal, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
