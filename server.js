const express = require('express')
const { connection } = require("./Data-Base/database")
const PORT = 3000
const app = express()
const clientRouter = require("./ServerRoutes/Client")
const FreelancerRouter = require("./ServerRoutes/FreeLancer")
const offersRouter = require('./ServerRoutes/offers')
const UsersRouter = require('./ServerRoutes/users')
const Client=require("./Data-Base/client/client")

app.use(express.json());
app.use(express.static(__dirname + '/client/dist'));
app.use(express.urlencoded({ extended: false }));

// Credentials for Google and Facebook Authentication
const credentials = require("./keys.js")
// Passport Authentication
var passport = require('passport');
// Google Strategy
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

/*Routes*/
app.use('/api/clients', clientRouter);
app.use('/api/freeLancers', FreelancerRouter);
app.use('/api/offers', offersRouter);
app.use('/api/users', UsersRouter);

/*Passport Authentication*/
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  console.log("userrrrrrrrrrrrrrrrrr",user)
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
/*Google Strategy*/
passport.use(new GoogleStrategy({
  clientID: credentials.googleClientID,
  clientSecret: credentials.googleClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    let googleUser={
      ProviderId:profile.id,
      Provider:"google",
      Username:profile.displayName,
      Email:profile._json.email
    }
    Client.findOrCreate(googleUser, (user, error) => {
      if(user){
        return done(null, user);
      } else {
        return done(error, null)
      }
    })
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    if(req.user){
      res.redirect('/secondSignup');
    }
  });
  
/*Server Connection*/
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html")
})


app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
}); 