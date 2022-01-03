const {DataTypes} = require ('sequelize');




module.exports = (sequelize) => {
sequelize.define('roles', {

id:{
    type: DataTypes.INTEGER,
    primaryKey: true
},

name:{
    type: DataTypes.STRING

}




})



}
