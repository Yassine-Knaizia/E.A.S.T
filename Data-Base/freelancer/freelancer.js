const {connection}=require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);

const loginFreeLancer=async (req,callback)=>{
  try{
    var userData=null
    var password=null
       connection.query(`SELECT * from Freelancers where Email="${req.Email}"`, function (error, results, fields) {
           if(results.length){
               userData=results[0]
               password=results[0].password
               {bcrypt.compareSync(req.Password, password)?callback({error:null,userData}):callback({error:"Wrong Password",userData:null})}
           }else{
               callback({error:"Email Unvalid",userData:null,})
           }
         }); 
  }catch(err){
    if(err){
      throw err
    }
  }

  }


const SignupFreeLancer=async (req,callback)=>{
  try{
    if(req.Password){
      var hash = bcrypt.hashSync(req.Password, salt);
      var query=`INSERT INTO Freelancers (FirstName,LastName,Email,password,Gender,Age,City,Adresse,Field) values ('${req.FirstName}','${req.LastName}','${req.Email}','${hash}','${req.Gender}',${req.Age},'${req.City}','${req.Adresse}','${req.Field}');`
      connection.query(query, function (error, results, fields) {callback(results,error)});
    }
    ////dont forget this
  }catch(err){

 if(err){
  throw err
 }

  }
}

  module.exports={
    SignupFreeLancer,
    loginFreeLancer
  }