const mongoose=require('mongoose');


const database= process.env.DB;
mongoose.connect(database,{
                useNewUrlParser:true,
                useUnifiedTopology: true
}).then(()=>{
    console.log("Connection established Successfully");
}).catch((err)=>
    console.log('Connection Failed to established')
);