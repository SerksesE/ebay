const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    field: 'password',
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER,
    field: 'phone',
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'users'
})

module.exports = User