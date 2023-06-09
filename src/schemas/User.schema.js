const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    money: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }

},{
    timestamps: false,
    schema: 'carrito',
    freezeTableName: true
});

module.exports = User;