const mongoose =require('mongoose')

const routeSchema=new mongoose.Schema(
    {
        Destination:{
            type:String,
            required:true,
        },

        Origin:{
            type:String,
            required:true,
        },
        Driver:{
            type:String,
            required:true
        }

    })
    const routes=mongoose.model("ROUTES",routeSchema)
    module.exports= routes;