const mongoose = require("mongoose");

function connectDB(){
// mongoose.connect('mongodb+srv://amine:marco123@miniproject.6qhyg5p.mongodb.net/car_rental', {useUnifiedTopology: true, useNewUrlParser:true}) 
mongoose.connect('mongodb+srv://katregunjan21:GunjanID$$9876@cluster0.d5io4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {useUnifiedTopology: true, useNewUrlParser:true}) 

const connection = mongoose.connection
connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull')
})
    connection.on('error', ()=>{
    console.log('Mongo DB Connection Error')
    })
}
connectDB()
module.exports = mongoose