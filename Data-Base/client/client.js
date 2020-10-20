const {connection}=require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);

const loginClient=async (req,callback)=>{
  try{
    var userData=null
    var password=null
      await connection.query(`SELECT * from Clients where Email="${req.Email}"`, function (error, results, fields) {
           if(results.length){
               userData=results[0]
               password=results[0].password
               console.log(results)
               {bcrypt.compareSync(req.Password, password)?callback({error:null,userData}):callback({error:"Wrong Password",userData:null})}
           }else{
               callback({error:"Email Unvalid",userData:null})
           }
         }); 
  }catch(err){
   if(err){ throw err}
  }
 
  }

const SignupClient=async (req,callback)=>{
  try{
    if(req.Password){
      var hash = bcrypt.hashSync(req.Password, salt);
      var query=`INSERT INTO Clients (FisrtName,LastName,Email,password,Gender,Age,City,Adresse) values ('${req.FisrtName}','${req.LastName}','${req.Email}','${hash}','${req.Gender}',${req.Age},'${req.City}','${req.Adresse}');`
      connection.query(query, function (error, results, fields) {callback(results,error)});
    }
  }catch(err){
     if(err){throw err}
  }
}

  module.exports={
    loginClient,
    SignupClient
  }
