const express = require('express')

const app = express()

const port=4000

app.get('/',(req,res)=>{
    res.send("Hello kaif")
})
app.get('/kaif',(req,res)=>{
    res.send('<h1>Hello kaif </h1>')
})
app.listen(port,(req,res)=>{
    console.log(`Your server was start on ${port}`)
})