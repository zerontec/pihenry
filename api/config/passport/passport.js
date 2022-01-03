const bcrypt = require("bcrypt-nodejs");
const {User} = require ('../../src/db')

module.exports = function (passport, user) {
  let User = user;
  let LocalStrategy = require("passport-local").Strategy;

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        emailField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },

      function (req, email, password, done) {
        let generateHash = function (password) {
          return bcrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
          where: {
            email: email,
          },
        }).then(function (user) {
          if (user) {
            return done(null, false, {
              message: "Este email ya esta registrado",
            });
          } else {
            let userPassword = generateHash(password);
            let data = {
              email: email,
              password: password,
              name: req.body.name,
              lastName: req.body.lastName,
            };

            User.create(data).then(function (newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
};
