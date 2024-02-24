let express= require('express');
let mysql= require('mysql');
let cors= require('cors');
let connection= require('./Db/db')
let baseServices=require('../Server/Routes/BaseServices')

let app=express();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use('/', baseServices)
connection.connect((err)=>{
    if(err){
        console.log("Unable to connect")
    }
    else{
        console.log("connected")
    }

})

app.listen(4444,()=>{
    console.log("listening to port 4444")
})