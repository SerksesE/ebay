const Sequelize = require('sequelize')
const sequelize = require('../db')
// const User = require('../users/model')

const Item = sequelize.define('items', {
    itemName: {
        type: Sequelize.STRING,
        field: 'item_name',
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        field: 'price',
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        field: 'description',
        allowNull: true
      }

}, { 
    timestamps: false,
    tableName: 'items'
})

// Item.belongsTo(User)

module.exports = Item