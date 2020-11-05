var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yass94683607',
  database: 'east'
});
/* Db Connection*/

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const sql = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (!!error) {
        reject(error)
      }
      resolve(results);
    })
  })
}
module.exports = {
  connection, 
  sql
}