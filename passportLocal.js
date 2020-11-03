const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const client = require("./Data-Base/client/passport")
function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    try {
      const user = await client.getUserByEmail(email);
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
  passport.use(new LocalStrategy({ usernameField: "Email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser(async (id, done) => {
    try {
      user = await client.getUserById(id);
      return done(null, user);
    } catch (err) {
      console.log({ err });
    }
  });
}

module.exports = initialize;
