const {simulacion, testBorracho} = require("./experimento")

const express = require("express")

const path = require("path")

const cors = require("cors")


const app = express()

const PORT = 3000

//cors

app.use(cors())

//body-parser

app.use(express.json())
//middleware

app.use(express.static(path.join(__dirname,'client')))

app.get('/experimento', (req,res)=>{
    res.json(testBorracho(10))
})

app.get('/simulacion', (req,res)=>{
    res.json(simulacion(1000000))
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'client/error.html'))
})

//port initialization

app.listen(PORT, ()=> console.log(`server started at port ${PORT}`))