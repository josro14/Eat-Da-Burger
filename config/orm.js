var connection = require("../config/connection.js");

// write code here to create methods for storing and updating information to the database

// var orm = {
//    selectAll: function(cb) {
//     connection.query("SELECT * FROM burgers", function(error, results) {
//         if (error) throw error;
        
//         cb(results);
//     })
//    },
//    insertOne: function(burger) {
//     connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [burger.burger_name, burger.devoured], function(err) {
//         if (err) throw err;
//     })
//    },
//    updateOne: function(burger) {
//     connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burger.id], function(err) {
//         if (err) throw err;
//     })
//    }
// };


// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
  
  
//   function objToSql(ob) {
//     var arr = [];
  
    
//     for (var key in ob) {
//       var value = ob[key];
     
//       if (Object.hasOwnProperty.call(ob, key)) {
        
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
       
//         arr.push(key + "=" + value);
//       }
//     }
  
   
//     return arr.toString();
//   }
  
  
  var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };

module.exports = orm;
