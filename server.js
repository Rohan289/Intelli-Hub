const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variables

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App  live on port ${port}!`))