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

router.get('/users/:id', (req, res, next) => {
  const id = req.params.id
  User
  .findById(id)
  .then(item => {
    if (!item) {
      return res.status(404).json({ message: 'Item not found!'})
    }
    res.json({ item: item})
  })
  .catch(err => console.log(err))
  res.status(500).json({message: 'Something went wrong, try again!'})
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