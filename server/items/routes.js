const { Router } = require('express')
const Item = require('./model')

const router = new Router()

router.get('/items', (req, res, next) => {
  Item
    .findAll()
    .then(items => {
      res.send({ items })
    })
    .catch(error => next(error))
})

module.exports = router