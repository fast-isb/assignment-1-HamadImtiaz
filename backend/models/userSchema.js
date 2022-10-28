const mongoose =require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema(
    {
        Firstname:{
            type:String,
            required:true
        },
        Lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        }, 
        phoneNumber:{
            type:Number,
            required:true
        },
        Password:{
            type:String,
            required:true
        }, 
        ConfirmPassword:{
            type:String,
            required:true
        },
        tokens:[
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    })
 
    userSchema.pre('save',async function(next){
        if(this.isModified('Password')){
            this.Password= await bcrypt.hash(this.Password,12);
            this.ConfirmPassword=await bcrypt.hash(this.ConfirmPassword,12);
        }
        next();
});
userSchema.methods.generateAuthToken=async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.secretKey)
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err)
    }
}
const User=mongoose.model("USER",userSchema)
module.exports= User;
