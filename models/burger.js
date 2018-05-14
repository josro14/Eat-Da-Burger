var orm = require("../config/orm.js");


// CHANGE THIS CODE TO BE SPECIFIC TO "BURGERS" AND NOT "CATS"
var burger = {
    all: function (cb) {
        orm.all("cats", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("cats", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("cats", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;