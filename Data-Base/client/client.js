const { connection } = require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);


const loginClient = (req, callback) => {
  var userData = null
  var password = null
  var query = `SELECT * from Clients where Email="${req.Email}"`;
  connection.query(query, function (error, results) {
    if (results.length) {
      userData = results[0]
      password = results[0].password
      { bcrypt.compareSync(req.Password, password) ? callback({ error: null, userData }) : callback({ error: "Wrong Password", userData: null }) }
    } else {
      callback({ error: "Email Unvalid", userData: null })
    }
  });
}

const findOne = ({Provider, ProviderId}, callback) => {
  var userData = null;
  var query = `SELECT * from Clients where ProviderId="${ProviderId}" && Provider='${Provider}'`;
  connection.query(query, (error, results) => {
    if(results.length){
      console.log(results)
      userData = results[0];
      callback({ error: null, userData })
    } else {
      callback({error , userData : null})
    }
  })
}

const create = ({Username, Email, Provider, ProviderId}, callback) => {
  var query = `Insert into Clients (Username, Email, Provider, ProviderId) values ('${Username}','${Email}','${Provider}','${ProviderId}')`
  connection.query(query, (error, results) => {
     callback(results, error) ;
  })
}
 
const findOrCreate = ({Username, Email, Provider, ProviderId}, callback) => {
  var userData = null;
  findOne({Provider,ProviderId}, (error, results) => {
    if(results){
      userData = results[0];
      callback({error : null, userData })     
    } else {
      create({Username, Email, Provider, ProviderId}, (error, results) => {
        if(results){
          userData = results[0];
          callback({error : null, userData })
        } else {
          callback({error , userData : null})
        }
      })
    }
  })
}

const findById = (req, callback) => {
  var userData = null;
  var query = `Select * from clients where id='${req.id}'`
  connection.query(query, (error, results) => {
    if(results){
      userData = results[0];
      callback({error : null, userData})
    } else {
      callback({error, userData : null})
    }
  })
}

const SignupClient = (req, callback) => {
  if (req.Password) {
    var hash = bcrypt.hashSync(req.Password, salt);
    var query = `INSERT INTO Clients (FirstName,LastName,Email,password,Gender,Age,City,Adresse,imgsrc) values ('${req.FirstName}','${req.LastName}','${req.Email}','${hash}','${req.Gender}',${req.Age},'${req.City}','${req.Adresse}','https://bootdey.com/img/Content/User_for_snippets.png');`
    connection.query(query, function (error, results, fields) { callback(results, error) });
  }
}

const updateProfile = async (req, callback) => {
  try {
    var query = `UPDATE IGNORE Clients SET  
    FirstName = '${req.FirstName}', 
    LastName = '${req.LastName}', 
    Adresse = '${req.Adresse}', 
    Password = '${req.Password}', 
    imgsrc = '${req.imgsrc}' 
    WHERE id = '${req.id}' `;
    connection.query(query, (error, results, fields) => {
      callback(results, error)
    });
  } catch (err) {
    if (err) {
      throw err
    }
  }
}

const retriveClient = (req,callback) => {
  var query = `Select * from clients where client_id=${req.userid}`;
  connection.query(query, (error, results, fields) => {
      // callback(results, error)
     callback(results)
  });
}

module.exports = {
  loginClient,
  SignupClient,
  updateProfile,
  retriveClient,
  findOrCreate,
  findById,
  findOne,
}
