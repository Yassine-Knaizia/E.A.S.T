const {connection}=require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = 10;

const loginClient=(req,callback)=>{
 var userData=null
 var password=null
    connection.query(`SELECT * from Clients where Email="${req.Email}"`, function (error, results, fields) {
        if(results.length){
            userData=results[0]
            password=results[0].password
            {bcrypt.compare(req.password, password) ? callback({error:null,userData}):callback({error:"Wrong Password",userData:null})}
        }else{
            callback({error:"Email Unvalid",userData:null,})
        }
      }); 
  }

const SignupClient=(req,callback)=>{
    var hash = bcrypt.hash(req.password, salt);
    var query=`INSERT INTO Clients (FisrtName,LastName,Email,password,Gender,Age,City,Adresse) values ('${req.FisrtName}','${req.LastName}','${req.Email}','${hash}','${req.Gender}',${req.Age},'${req.City}','${req.Adresse}');`
    connection.query(query, function (error, results, fields) {callback(results,error)});
}

  module.exports={
    loginClient,
    SignupClient
  }
