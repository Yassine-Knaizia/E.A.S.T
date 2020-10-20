const {connection}=require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);

const loginFreeLancer=(req,callback)=>{
 var userData=null
 var password=null
    connection.query(`SELECT * from Freelancers where Email="${req.Email}"`, function (error, results, fields) {
        if(results.length){
            userData=results[0]
            password=results[0].password
            console.log(results)
            {bcrypt.compareSync(req.Password, password)?callback({error:null,userData}):callback({error:"Wrong Password",userData:null})}
        }else{
            callback({error:"Email Unvalid",userData:null,})
        }
      }); 
  }


const SignupFreeLancer=(req,callback)=>{
    var hash = bcrypt.hashSync(req.Password, salt);
    var query=`INSERT INTO Clients (FisrtName,LastName,Email,password,Gender,Age,City,Adresse,Field) values ('${req.FisrtName}','${req.LastName}','${req.Email}','${hash}','${req.Gender}',${req.Age},'${req.City}','${req.Adresse}','${req.Field}');`
    connection.query(query, function (error, results, fields) {callback(results,error)});
}

  module.exports={
    SignupFreeLancer,
    loginFreeLancer
  }