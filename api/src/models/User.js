const {DataTypes} = require ('sequelize');

module.exports = (sequelize)=> {

sequelize.define('users', {

    id:{
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    username:{

        type:DataTypes.STRING,
        allowNull:false
        

},

lastName:{

    type:DataTypes.STRING,
    allowNull:false



},
    password:{

        type:DataTypes.STRING,
        allowNull:false,

    },

  
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        },
        allowNull: false,
        unique:true

    },

    lastLoging:{

        type:DataTypes.DATE
    },
    status:{

        type:DataTypes.ENUM('active', 'inactive'),
        defaultValue:'active'

    }

    





})





}


