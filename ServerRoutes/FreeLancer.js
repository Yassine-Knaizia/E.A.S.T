const express = require('express')
var router = express.Router();
const FreeLancer=require("../Data-Base/freelancer/freelancer")

             /*Login FreeLancer*/

router.post('/Login', function(req, res, next) {

 FreeLancer.loginFreeLancer(req.body,(result,error)=>{
     if(result.userData){
         delete result.userData.password
 res.send({Login:true,userData:result.userData})
     }else{
 res.send({Login:false,userData:result.userData})
}
 })
  });
             /*Signup FreeLancer*/

router.post('/Signup', function(req, res, next) {

 FreeLancer.SignupFreeLancer(req.body,(result,error)=>{
  if(error){
      if(error.code=="ER_DUP_ENTRY"){
          res.send({Dup:true})
         }
    }else{
          res.send({Signup:true})
        }
    })
});
 
module.exports=router
//{FisrtName:'alaa',LastName:'lassoued',Email:'d',Password:'0000',Gender:'hello',Age:21,City:'tunis',Adresse:"mg",Field:"designe"}