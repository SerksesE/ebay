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

router.get('/items/:id' ,(req, res, next) => {
  const id = req.params.id
  Item
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

router.post('/items', (req, res, next) => {
  Item
    .create(req.body)
    .then(item => {
      return res.status(201).send(item)
    })
    .catch(error => next(error))
})


module.exports = router