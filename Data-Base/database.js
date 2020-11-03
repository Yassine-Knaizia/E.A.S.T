var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yass94683607',
  database : 'east'
});
         /* Db Connection*/

connection.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
  });
const sql = (str) => {
    return new Promise((resolve, reject) => {     
      connection(str, (err,result) => {
        if (err) return reject(err)
        resolve(result)
      })
    })
  }
module.exports={
  connection,
  sql,
}