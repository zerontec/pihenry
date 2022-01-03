/* const {User} = require ('../db')
 */

const db = require("../models/User");
const config = require("../../config/auth.config");

const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "Usuario Registrado exitosamente !" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "Usuario Registrado exitosamente !" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
const signin = (req, res, next) => {
  User.findOne({
    where: {
      usernema: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      let passwordIsvalid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsvalid) {
        return res.status(401).send({
          accessToken: null,
          message: "password Invalido",
        });
      }
      let token = jwt.sign({ id: user.id }, config.secret, {
        expireIn: 86400, // 24 horas
      });

      let authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUppercase());
        }

        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "err.message",
      });
    });
};

module.exports = {

        signin,
        signup

}
