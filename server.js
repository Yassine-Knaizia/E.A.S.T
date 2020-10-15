const express = require('express')
const {connection}=require("./Data-Base/database")
const PORT = 3000
const app = express()

app.use(express.json()); 
app.use(express.static(__dirname + '/client/dist'));


// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

app.post('/', function (req, res) { 
    console.log(req.body.name) 
    res.end(); 
});

app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 