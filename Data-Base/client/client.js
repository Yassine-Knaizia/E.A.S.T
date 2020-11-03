const { connection } = require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);

const loginClient = (req, callback) => {
  var userData = null
  var password = null
  connection.query(`SELECT * from Clients where Email="${req.Email}"`, function (error, results, fields) {
    if (results.length) {
      userData = results[0]
      password = results[0].password
      console.log(results)
      { bcrypt.compareSync(req.password, password) ? callback({ error: null, userData }) : callback({ error: "Wrong Password", userData: null }) }
    } else {
      callback({ error: "Email Unvalid", userData: null })
    }
  });
}

//*local Session Login//*
const findOne = (req, callback) => {
  console.log('foundd')
  var userData = null;
  var query = `SELECT * from Clients where Email="${req.Email}"`;
  connection.query(query, (error, results, fields) => {
    if(results.length){
      userData = results[0];
      console.log("test", userData)
      callback({ error: null, userData })
    }
  })
}

const verifyPassword = (req, callback) => {
  console.log('passsss')
  var userData = null;
  var password = null;
  var query = `SELECT * from Clients where Email="${req.Email}"`;
  connection.query(query, (error, results, fields) => {
    if(results.length){
      userData = results[0];
      password = results[0].password
      { bcrypt.compareSync(req.Password, password) ? callback({ error: null, userData }) : callback({ error: "Wrong Password", userData: null }) }
    } else {
      callback({ error: "Email Unvalid", userData: null })
    }
  })
}
//*local Session Login//*



//*Google Strategy Login//*
const googleLogin = (req, callback) => {
  var query1 = `SELECT * from Clients where Email="${req._json.email}"`
  connection.query(query1, (error, results, fields) => {
    callback(results, error)
  })
}

const findById = (id, callback) => {
  var userData = null;
  var query = `SELECT * from Clients where id="${id}"`;
  connection.query(query, (error, results) => {
    if(results.length){
      userData = results[0];
      console.log("test", userData)
      callback(error,{  userData })
    }
  })
}
//*Google Strategy Login//*

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

const retriveClient = (req, callback) => {
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
  googleLogin,
  findOne,
  verifyPassword,
  findById
}
