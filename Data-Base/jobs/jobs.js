const { connection } = require("../database");
const { get } = require("../../ServerRoutes/Client");

const saveJobs = (req, callback) => {
  var query = `INSERT INTO Jobs (client_id,jobTitle,fields,imgUrl,jobDescription,budget) values ('${req.client_id}','${req.jobTitle}','${req.fields}','${req.imgUrl}','${req.jobDescription}','${req.budget*1}');`;
  connection.query(query, function (error, results, fields) {
    console.log(results,error)
    callback(results, error);
  });
};

const retrieveJobs = (callback) => {
  var query = `Select * from Jobs`;
  connection.query(query, (error, results, fields) => {
      callback(results, error)
  });
}

const retriveClientPosts = (req,callback) => {
  var query = `Select * from Jobs where client_id=${req.userid}`;
  connection.query(query, (error, results, fields) => {
      // callback(results, error)
     callback(results)
  });
}

module.exports = { saveJobs,retrieveJobs,retriveClientPosts };