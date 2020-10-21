const { connection } = require("../database");
const { get } = require("../../ServerRoutes/Client");

const saveJobs = (req, callback) => {
  var query = `INSERT INTO Jobs (jobTitle,fields,imgUrl,jobDescription) values ('${req.jobTitle}','${req.fields}','${req.imgUrl}','${req.jobDescription}');`;
  connection.query(query, (error, results, fields) => {
    callback(results, error);
  });
};

const retrieveJobs = (callback) => {
    var query = `Select * from Jobs`;
    connection.query(query, (error, results, fields) => {
        callback(results, error)
    });
}

module.exports = { 
    saveJobs,
    retrieveJobs
};