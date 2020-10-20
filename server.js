const express = require('express')
const {connection}=require("./Data-Base/database")
const app = express()
const clientRouter=require("./ServerRoutes/Client")
const FreelancerRouter=require("./ServerRoutes/FreeLancer")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys.js");
var passport = require('passport');
const PORT = 3000

app.use(express.json()); 
app.use(express.static(__dirname + '/client/dist'));

          /*Routes*/

app.use('/api/clients', clientRouter);
app.use('/api/freeLancers', FreelancerRouter);

        /*Server Connection*/

app.get("*",(req,res)=>{
     res.sendFile(__dirname +"/client/dist/index.html")
   }) 
   
        /*Google Authentication */
   passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        (request, accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);   
        })
);

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'],
        accessType: 'offline', approvalPrompt: 'force'
    })
);

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/Login'
    }),
    (req, res) => {
        res.redirect('/');
    });
   
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 