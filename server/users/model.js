const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'founding_year',
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'founding_year',
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'users'
})

module.exports = User