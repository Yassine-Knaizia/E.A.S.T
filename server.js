const express = require('express')
const { connection, sql } = require("./Data-Base/database")
const PORT = 3000
const app = express()
const clientRouter = require("./ServerRoutes/Client")
const FreelancerRouter = require("./ServerRoutes/FreeLancer")
const offersRouter = require('./ServerRoutes/offers')
const UsersRouter = require('./ServerRoutes/users')
const Client = require("./Data-Base/client/client")


// Body-Parser 
const bodyParser = require("body-parser")
// Session 
const session = require("express-session")
// Passport 
const passport = require("passport")
// Google Strategy
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// Local Strategy
var LocalStrategy = require('passport-local').Strategy;

/*MiddleWare*/
app.use(express.static(__dirname + '/client/dist'));
app.use(session({
  secret: "Mary-J",
  resave: true,
  saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Credentials for Google and Facebook Authentication
const credentials = require("./keys.js")

/*Routes*/
app.use('/api/clients', clientRouter);
app.use('/api/freeLancers', FreelancerRouter);
app.use('/api/offers', offersRouter);
app.use('/api/users', UsersRouter);


/*Passport Authentication*/
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Client.findById(id, function (err, user) {
    done(err, user);
  });
});

/*Local Strategy Implementation*/
const authenticateUser = async (Email, password, done) => {
  try {
    const user = await getUserByEmail(Email);
    if (user == null) {
      return done(null, false, { message: "Username or Email not exist." });
    }

    if (await bcrypt.compare(password, user.password)) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Password incorrect" });
    }
  } catch (e) {
    return done(e);
  }
};

passport.use(new LocalStrategy({
  usernameField: 'Email',
  passwordField: 'password'
},
 async function (Email, password, done) {
  users=await sql(`SELECT * from Clients where Email="${Email}"`)
  if(users.length>0){
    await bcrypt.compare(password, user.password)) 
      return done(null, user);
    
    if (users[0].password != password) {
      return done(null, false, { message: 'Incorrect password' });
    } else {

    }
  }
    function (err, users) {
      console.log('the happy user', user[0])
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect Email' });
      }
      if (user[0].password != password) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    });
}));




/*Google Strategy Implementation*/
passport.use(new GoogleStrategy({
  clientID: credentials.googleClientID,
  clientSecret: credentials.googleClientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    console.log(profile)
    return done(null, profile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/ClientSignup' }),
  function (req, res) {
    Client.googleLogin(req.user, (result, error) => {
      if (result) {
        res.send({ Login: true, userData: result.userData })
      } else {

      }
    })
  });

/*Server Connection*/
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/dist/index.html")
})

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
}); 