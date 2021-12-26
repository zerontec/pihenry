const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type:DataTypes.UUID,
      allowNull: false,
      defaultValue:DataTypes.UUIDV1,
      primaryKey: true
    },
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    summary:{

      type:DataTypes.STRING,
      allowNull:false
    },

    aggregateLikes:{

  type:DataTypes.INTEGER
    },
    healthScore:{
      type:DataTypes.INTEGER
    },
    analyzedInstructions:{
      type:DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING,
    },
        createdDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
     
    },
 
  });
};
