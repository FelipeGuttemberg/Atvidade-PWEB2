const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

/** Representação de uma tabela do banco mapeada nessa classe */
/**
 * https://sequelize.org/docs/v6/core-concepts/model-basics/ 
 * 
 * */

const Aluno = sequelize.define('Aluno', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  idade:{
      type: DataTypes.INTEGER,
      allowNull:false
  },
}, {
  sequelize,
  tableName: 'usuario',
  timestamps: false,
});

module.exports = Aluno;
