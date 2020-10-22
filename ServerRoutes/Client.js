const express = require("express");
var router = express.Router();
const Client = require("../Data-Base/client/client");
const Jobs = require("../Data-Base/jobs/jobs");

/*Login Client*/

router.post("/Login", function (req, res, next) {
  if (Object.keys(req.body).length) {
    Client.loginClient(req.body, (result, error) => {
      if (result.userData) {
        delete result.userData.password;
        res.send({ Login: true, userData: result.userData });
      } else {
        res.send({ Login: false, userData: result.userData });
      }
    });
  } else {
    res.send({ Login: false, userData: null });
  }
});

/*Signup Client*/

router.post("/Signup", function (req, res, next) {
  console.log(req.body);
  if (Object.keys(req.body).length) {
    Client.SignupClient(req.body, (result, error) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          res.send({ Dup: true });
        } else {
          throw error;
          res.send(error);
        }
      } else {
        res.send({ Signup: true });
      }
    });
  } else {
    res.send({ Signup: false });
  }
});
/*Post Job*/

router.post("/postJob", (req, res) => {
  if (Object.keys(req.body).length) {
    Jobs.saveJobs(req.body, (result, error) => {
      if (result) {
        res.send({ success: true })
      } else {
        res.send(error)
      }
    })
  }
});

router.get("/postedJobs", (req, res) => {
    Jobs.retrieveJobs((result, error) => {
      if(result) {
        res.send(result)
      } else {
        res.send(error)
      }
    })
})

router.get("/postedJobs/:id", async (req, res) => {
  try {
    const jobs = await Jobs.findOne({ _id: req.params.id });
    res.send(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;