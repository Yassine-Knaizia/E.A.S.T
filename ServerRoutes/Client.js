const express = require('express');
const { useCallback } = require('react');
const client = require('../Data-Base/client/client');
var router = express.Router();
const Client = require("../Data-Base/client/client")
const jobs = require("../Data-Base/jobs/jobs");
const application = require("../Data-Base/application/application")
const passport = require("passport")


/*Login Client*/

// router.post('/Login', function (req, res, next) {
//   if (Object.keys(req.body).length) {
//     Client.loginClient(req.body, (result, error) => {
//       if (result.userData) {
//         result.userData.type = "client"
//         delete result.userData.password
//         res.send({ Login: true, userData: result.userData })
//       } else {
//         res.send({ Login: false, userData: result.userData })
//       }
//     })
//   } else {
//     res.send({ Login: false, userData: null })
//   }
// });

/*Local Session Login*/
router.post('/loginSession', function (req, res, next) {
  passport.authenticate('local', function (err, user) {
    console.log("heyyyy", err, user);
    if (user) {
      Client.loginClient(req.body, (result, error) => {
        if (result.userData) {
          result.userData.type = "client"
          delete result.userData.password
          res.send({ Login: true, userData: user });
        }
      })
    } else {
      res.send({ Login: false, userData: null });
    }
  })(req, res, next);
});

// router.post('/loginSession', function(req, res, next) {
//   passport.authenticate('local', function(err, user) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/ClientLogin'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.Email);
//     });
//   })(req, res, next);
// });
/*Signup Client*/

router.post('/Signup', function (req, res, next) {
  console.log(req.body)
  if (Object.keys(req.body).length) {
    Client.SignupClient(req.body, (result, error) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          res.send({ Dup: true })
        } else {
          throw error
          //  res.send(error)
        }
      } else {
        res.send({ Signup: true })
      }
    })
  } else {
    res.send({ Signup: false })
  }
});

/*Post Job*/

router.post("/postJob", (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length) {
    jobs.saveJobs(req.body, (result, error) => {
      if (result) {
        res.send({ success: true })
      } else {
        res.send(error)
      }
    })
  }
});

/*Retrive Client Posted Job*/
router.post("/PostedJob/:userid", (req, res) => {
  jobs.retriveClientPosts(req.params, (result) => {
    res.send(result)
  })
});

/*Check Appliers*/
router.post("/appliers", (req, res) => {
  console.log(req.body)
  application.RetriveAppliers(req.body, (result => {
    res.send(result)
  }))
});

/*Update Client Profile*/
router.post("/editProfile", (req, res) => {
  Client.updateProfile(req.body, (result, error) => {
    if (result) {
      res.send(result)
    } else {
      res.send(error)
    }
  })
});

module.exports = router

