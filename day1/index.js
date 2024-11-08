// console.log("hello Backend")

const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send("Hello Backend")
}) 


app.get("/login", (req, res)=>{
    res.send("login section")
})

app.listen(process.env.PORT, ()=>{
    console.log(`port is listening at https://localhost:${port}`)
})