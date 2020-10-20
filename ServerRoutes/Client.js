const express = require('express')
var router = express.Router();
const Client=require("../Data-Base/client/client")

             /*Login Client*/

router.post('/Login', function(req, res, next) {
  Client.loginClient(req.body,(result,error)=>{
     if(result.userData){
         delete result.userData.password
 res.send({Login:true,userData:result.userData})
     }else{
 res.send({Login:false,userData:result.userData})
}
 })
  });
             /*Signup Client*/

router.post('/Signup', function(req, res, next) {

  Client.SignupClient( req.body,(result,error)=>{
  if(error){
      if(error.code=="ER_DUP_ENTRY"){
          res.send({Dup:true})
         }else{
           throw error
           res.send(error)
         }
    }else{
          res.send({Signup:true})
        }
    })
});
 
module.exports=router

