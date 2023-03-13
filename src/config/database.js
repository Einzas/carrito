const Sequelize = require('sequelize');

const sequelize = new Sequelize("d51g849jft7tso","fauvwdpbsuibow","36c503ebe96a44aba6607171d55682e10faca3afc1bc4c67159ace56b2df63a6",{
    host: "ec2-52-3-200-138.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = {sequelize};