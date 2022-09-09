const express = require('express')
const app = express()
const mainRoute = require('./route/main')

app.use(mainRoute)


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log("connected to port 3000")
})