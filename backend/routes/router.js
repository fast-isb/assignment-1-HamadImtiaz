const express=require('express')
const route=express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
require('../database/connection');
const User=require("../models/userSchema")

route.get('/', (req, res)=> {
    res.send('Hello World from the server')
  })



  // By using promises method

// route.post('/register',(req,res)=>{
//     const{Firstname, Lastname, email, phoneNumber, Password, ConfirmPassword}=req.body;
//     if(!Firstname || !Lastname || !email || !phoneNumber || !Password || !ConfirmPassword){
//     return res.status(422).json({error:"Give input to all the fields"});
// }

//     User.findOne({email:email})
//         .then((userExists)=>{
//         if(userExists){
//             return res.status(422).json({error:"Email Already exist"})
//         }

//         const user =new User({Firstname, Lastname, email, phoneNumber, Password, ConfirmPassword})
//         user.save().then(()=>{
//             return res.status(201).json({message:"User Registered Successfully"})
//         }).catch((err)=>{
//             return res.status(500).json({error:"User Failed to Registered"})
//         })
//     }).catch((err)=>{
//         console.log(err);
//     })
// })




// By using Async method 

route.post('/register',async (req,res)=>{
    const{Firstname, Lastname, email, phoneNumber, Password, ConfirmPassword}=req.body;
    if(!Firstname || !Lastname || !email || !phoneNumber || !Password || !ConfirmPassword){
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
            const user =new User({Firstname, Lastname, email, phoneNumber, Password, ConfirmPassword})
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
module.exports=route;