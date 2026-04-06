import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

phone:{
type:String,
required:true,
unique:true
},

role:{
type:String,
enum:["farmer","customer"],
default:"customer"
},

otp:String,
otpExpiry:Date

},{timestamps:true});

export default mongoose.model("User",userSchema);