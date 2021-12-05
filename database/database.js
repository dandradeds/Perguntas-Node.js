const Sequelize = require("sequelize")

const connection = new Sequelize('perguntas','root','1234',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection; 
