const db = require('../src/models/User');
const ROLES = db.ROLES;
const User = db.User;


checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Username ya Tomado :( !"
        });
        return;
      }
  
      // Email
      User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Este email esta en uso :(!"
          });
          return;
        }
  
        next();
      });
    });
  };
  

  checkRoleExisted = (req, res, next)=> {

    if(req.body.roles){

        for(let i = 0; i < req.bosy.roles.length; i ++){

            if(!ROLES.includes(req.body.role[i])){

                res.status(400).send({message:'Este Role no Existe = ' + req.body.roles[i]});

                return;


            }

        }

    }

    next();
  } 


  const verifiSignUp = { 
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRoleExisted :  checkRoleExisted 
   }

   module.exports = verifiSignUp;