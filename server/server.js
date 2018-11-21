const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4001

app.use(cors())

app.get('/adds', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(port, () => console.log(`Listening on port ${port}`))