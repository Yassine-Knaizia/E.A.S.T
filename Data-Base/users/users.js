const {connection}=require("../database")

const GetUserNameById =(req,callback)=>{
    connection.query(`select * from Clients where id='${req.userid}'`, function (error, results, fields) {
   callback(results[0],error)
    })
}

module.exports={
    GetUserNameById
  }