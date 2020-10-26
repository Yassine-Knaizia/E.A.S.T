const express = require('express')
var router = express.Router();
const Jobs = require("../Data-Base/jobs/jobs");



router.get('/', function(req, res, next) {
    console.log("resived")
    Jobs.retrieveJobs((result, error) => {
        if(result) {
          res.send(result)
        } else {
          res.send(error)
        }
      })
      });

     
 module.exports=router