const express = require('express')
const cors = require('cors')
const app = express()
const itemRouter = require('./items/routes')
const userRouter = require('./users/routes')
const bodyParser = require('body-parser')

const port = process.env.PORT || 4001

app
  .use(cors())
  .use(bodyParser.json())
  .use(itemRouter)
  .use(userRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))



