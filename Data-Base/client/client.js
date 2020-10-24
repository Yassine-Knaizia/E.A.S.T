const { connection } = require("../database")
var bcrypt = require('bcryptjs');
const { get } = require("../../ServerRoutes/Client");
var salt = bcrypt.genSaltSync(10);

const loginClient = async (req, callback) => {
  try {
    var userData = null
    var password = null
     connection.query(`SELECT * from Clients where Email="${req.Email}"`, function (error, results, fields) {
      if (results.length) {
        userData = results[0]
        password = results[0].password
        console.log(results)
        { bcrypt.compareSync(req.Password, password) ? callback({ error: null, userData }) : callback({ error: "Wrong Password", userData: null }) }
      } else {
        callback({ error: "Email Unvalid", userData: null })
      }
    });
  } catch (err) {
    if (err) { throw err }
  }

}

const SignupClient = async (req, callback) => {
  try {
    if (req.Password) {
      var hash = bcrypt.hashSync(req.Password, salt);
      var query = `INSERT INTO Clients (FirstName, LastName, Email, Password, Gender, Age, City, Adresse, ImgUrl, PhoneNumber) 
      values (
        '${req.FirstName}',
        '${req.LastName}',
        '${req.Email}',
        '${hash}',
        '${req.Gender}',
        '${req.Age}',
        '${req.City}',
        '${req.Adresse}',
        '${req.ImgUrl}',
        '${req.PhoneNumber}'
        );`
       connection.query(query, function (error, results, fields) { callback(results, error) });
    }
  } catch (err) {
    if (err) { throw err }
  }
}

const updateProfile = async (req, callback) => {
  try {
    var query = `UPDATE IGNORE Clients SET  
    FirstName = '${req.FirstName}', 
    LastName = '${req.LastName}', 
    Adresse = '${req.Adresse}', 
    Password = '${req.Password}', 
    imgUrl = '${req.ImgUrl}' 
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

module.exports = {
  loginClient,
  SignupClient,
  updateProfile,
}


