const express = require('express')
const cors = require('cors')
const app = express()
const itemRouter = require('./items/routes')

const port = process.env.PORT || 4001

app
  .use(cors())
  .use(itemRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))



