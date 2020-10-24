const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.use('/', express.static('code'))
app.use('//assets', express.static('./assets'))

app.get('/', (req, res) => {
  res.status(200)
})

app.listen(port)