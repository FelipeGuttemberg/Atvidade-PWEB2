const Sequelize = require('sequelize');

const sequelize = new Sequelize('pweb2', 'aluno', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
