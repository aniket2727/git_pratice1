



const express=require('express')

const app=express()  //importing the express
const cors=require('cors')//importing cores
const mongoose=require('mongoose')
const Port=5000//localhost port
app.use(cors())//cores middleware
const mongourl=require("./keys")//database conncetion and database utl
require('./models/models')//this contain the schema

app.use(express.json())   //converting to json
app.use(require("./routes/auth"))//middleware to connect api ,  doing changes 
mongoose.connect(mongourl);//conncet database with mongoose


mongoose.connection.on("connected",()=>{
    console.log("succeefully connceted to mongodb database")
})
mongoose.connection.on("error",()=>{
    console.log("not connceted to mongooese")
})


app.listen(Port,()=>{
    console.log("server is running on 5000")
})