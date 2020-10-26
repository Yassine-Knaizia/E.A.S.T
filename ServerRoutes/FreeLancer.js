const express = require('express')
var router = express.Router();
const FreeLancer=require("../Data-Base/freelancer/freelancer")
const application=require("../Data-Base/application/application")
             /*Login FreeLancer*/

router.post('/Login', function(req, res, next) {
console.log(req.body)
 FreeLancer.loginFreeLancer(req.body,(result,error)=>{
     if(result.userData){
        result.userData.type="freelancer"
         delete result.userData.password
 res.send({Login:true,userData:result.userData})
     }else{
 res.send({Login:false,userData:result.userData})
}
 })
  });
             /*Signup FreeLancer*/

router.post('/Signup', function(req, res, next) {
    
    if(Object.keys(req.body).length){
 FreeLancer.SignupFreeLancer(req.body,(result,error)=>{
  if(error){
      if(error.code=="ER_DUP_ENTRY"){
          res.send({Dup:true})
         }
    }else{
          res.send({Signup:true})
        }
    })
}else{
    res.send({Signup:false})
}
});
router.post('/Jobdetail/application', function(req, res, next) { 

 application.Apply(req.body)
});
 
module.exports=router
//{FisrtName:'alaa',LastName:'lassoued',Email:'d',Password:'0000',Gender:'hello',Age:21,City:'tunis',Adresse:"mg",Field:"designe"}