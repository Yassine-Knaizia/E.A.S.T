const {connection}=require("../database")

const Apply =(req,callback)=>{
    connection.query(`INSERT INTO Applications (PersonID,ApplicationContent,Postid) values ('${req.freelancer}','${req.text}','${req.postid}');`, function (error, results, fields) {
console.log(results)
    })
}

const RetriveAppliers =async (req,callback)=>{

  await connection.query(`SELECT * from Applications where postid=${req.postid}`, function (error, results, fields) {
  var appliers=[]

  var test= results.map((elem)=>{
 connection.query(`SELECT * from Freelancers where id=${elem.PersonID}`, function (error, resul, fields) {
  delete resul[0].password
  resul[0].content=elem.ApplicationContent
appliers.push(resul[0])
      })
    })
    
    setTimeout(()=>{
     callback(appliers) 
    },200)

    })
}
module.exports={
  Apply,RetriveAppliers
  }
