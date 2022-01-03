

const allAccess = (req, res) => {
    res.status(200).send("Contenido Publico.");
  };
  
 const userBoard = (req, res) => {
    res.status(200).send("Contenido de usuario");
  };
  
 const adminBoard = (req, res) => {
    res.status(200).send("Contenido Admin.");
  };
  
 const moderatorBoard = (req, res) => {
    res.status(200).send("Contenido Moderador.");
  };

  module.exports = {

    allAccess,
    userBoard,
    adminBoard,
    moderatorBoard

  }