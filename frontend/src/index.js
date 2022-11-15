const express = require('express')
const cors= require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app = express()
dotenv.config({path:'./config.env'})
const Port = process.env.Port;
require('./database/connection')
app.use(express.json());
app.use(cors())
app.use(require('./routes/router'))

const User=require('./models/userSchema')

const middleware=(req,res,next)=>{
    console.log(`Hello from the MiddleWare`)
    next();
}



app.get('/about', middleware,(req, res) => {
    res.send('Hello about from the server')
  })
  app.get('/contact', (req, res) => {
    res.send('Hello contact from the server')
  })
  app.get('/signin', (req, res) => {
    res.send('Hello Login from the server')
  })
  app.get('/signup', (req, res) => {
    res.send('Hello Register from the server')
  })

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})