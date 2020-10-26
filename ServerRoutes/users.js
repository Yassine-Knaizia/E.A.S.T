const express = require('express')
var router = express.Router();
const Users = require("../Data-Base/users/users");

router.post('/name', function(req, res, next) {
Users.GetUserNameById(req.body,(result)=>{
    delete result.password
    res.send(result)
})
});

module.exports=router