const{DataTypes} = require ('sequelize');

module.exports = (sequelize) => {

sequelize.define('dieta', {


name:{

    type:DataTypes.STRING,
    allowNull: false,
}

})

}