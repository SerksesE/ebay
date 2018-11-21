const { Router } = require('express')
const User = require('./model')

const router = new Router()


router.get('/users', (req, res, next) => {
  User
    .findAll()
    .then(user => {
      res.send({ user })
    })
    .catch(error => next(error))
})

router.post('/users', (req, res, next) => {
  User
    .create(req.body)
    .then(user => {
      return res.status(201).send(user)
    })
    .catch(error => next(error))
})


module.exports = router