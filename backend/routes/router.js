const express=require('express')
const route=express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('../database/connection');
const User=require("../Models/userSchema")
const Routes=require("../Models/routeSchema")





// By using Async method 

route.post('/register',async (req,res)=>{

    const{name, email, phoneNumber, Password, ConfirmPassword}=req.body;
    if(!name || !email || !phoneNumber || !Password || !ConfirmPassword){
    return res.status(422).json({error:"Give input to all the fields"});
}

try{
    const userExists= await User.findOne({email:email});
        if(userExists){
            return res.status(422).json({error:"Email Already exist"})
        }
        else if(Password != ConfirmPassword){
            return res.status(422).json({error:"Password doesn't Match"})
        }
        else{
            const user =new User({name, email, phoneNumber, Password, ConfirmPassword})
            const userRegistered=await user.save();
                if(userRegistered){
                    return res.status(201).json({message:"User Registered Successfully"})
                }
                else{
                    return res.status(500).json({error:"User Failed to Registered"})
                }
        }
  

}catch(err){
    console.log(err);
}

})
route.post('/login',async(req,res)=>{
    try{
        const {email, Password}=req.body;

        if(!email||!Password){
            return res.status(422).json({error:"Give input to all the fields"});
        }

        const userLogin=await User.findOne({email:email});
        if(userLogin){
            const passwordCheck=await bcrypt.compare(Password,userLogin.Password)
              token =userLogin.generateAuthToken();
              res.cookie("JWToken",token,{
                expires:new Date(Date.now()+2589200000),
                httpOnly:true})
            if(!passwordCheck){
                res.status(400).json({error:"Invalid Password"});
            }
            else{
                res.json({message:"User Login Successfully"});
            }
        }else{
            res.status(400).json({error:"Invalid Crendentials"});
        }
      
    }
    catch(err){
        console.log(err);
    }

})


 route.post('/addRoutes', async (req, res) => {

    try{

    const{Destination, Origin, Driver}=req.body;
        if(!Destination||!Origin|| !Driver){
        return res.status(422).json({error:"Give input to all the fields"});
        }
        const routes =new Routes({Destination, Origin, Driver})
            const RouteAdded=await routes.save();
                if(RouteAdded){
                    return res.status(201).json({message:" Route Added Successfully"})
                }
                else{
                    return res.status(500).json({error:"Route Failed to be added"})
                }
    }
    catch(err){
        console.log(err)
    }
  
  });

  route.put('/updateRoutes/:id',async(req,res)=>{
 try{ 
    const {id}=req.params
    const response=await Routes.findByIdAndUpdate(id,req.body,{new:true});
    if(response){
      return res.status(201).json({message:" Route has been Updated"})
  }
  else{
      return res.status(500).json({error:"Unable to update the Route"})
  }
  
}catch(err){
    console.log(err)
}
 
});

route.delete("/deleteRoutes/:id", async (req, res) => {
    const{id}=req.params;
    const responses=await Routes.findByIdAndDelete({_id:id})

    if(responses){

        try{
            const response = await Routes.find({})
            if(response){
                return res.json({response})
            }
            else{
                return res.status(500).json({error:"Route name does not match"})
            }
        }catch(err){
            console.log(err)
        }
        return res.status(201).json({message:" Route deleted Successfully"})
    }
    else{
        return res.status(500).json({error:"Destination Name does not match"})
    }
  });
route.get('/displayRoutes', async(req, res) => {
    
    const response = await Routes.find({})
    
    if(response){
       return res.json({response})
   }
   else{
       return res.status(500).json({error:"Route name does not match"})
   }
    });
route.get('/getRoutes/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const individualRoutes=await Routes.findById({_id:id});
        res.status(201).json(individualRoutes)

    }catch(err){
        res.status(422).json(err)
    }
})
