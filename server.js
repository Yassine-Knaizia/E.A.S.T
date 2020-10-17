const express = require('express')
const { connection } = require("./Data-Base/database")
const PORT = 3000
const app = express()
var passport = require('passport')
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys.js");

app.use(express.json());
app.use(express.static(__dirname + '/client/dist'));

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        accessToken => {
            console.log(accessToken);
        }
    )
);

app.get('/auth/google',
    passport.authenticate('google', {
        scope : ['https://www.googleapis.com/auth/plus.login']
    })
);
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {     
    res.redirect('/');
  });


// app.get('/api/current_user', (req, res) => {
//     res.send(req.user);
//     console.log(req.user)
//   });

app.post('/login', function (req, res) {
    res.send(req.body);
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
}); 