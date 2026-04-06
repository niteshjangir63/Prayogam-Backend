import User from "../models/User.js";
import {generateOTP} from "../utils/generateOTP.js";
import generateToken from "../utils/generateToken.js";

export const sendOTP = async (req,res)=>{

const {phone,name,role} = req.body;

if(!phone){
return res.status(400).json({message:"Phone is required"});
}

let user = await User.findOne({phone});

if(!user){

user = await User.create({
phone,
name: name || "User",
role: role || "customer"
});

}

const otp = generateOTP();

user.otp = otp;
user.otpExpiry = Date.now() + 5 * 60 * 1000;

await user.save();

/* DEV ONLY */
console.log("OTP:",otp);

res.json({
success:true,
message:"OTP sent successfully"
});

};




export const verifyOTP = async (req,res)=>{

const {phone,otp} = req.body;

const user = await User.findOne({phone});

if(!user){
return res.status(404).json({message:"User not found"});
}

if(String(user.otp) !== String(otp)){
return res.status(400).json({message:"Invalid OTP"});
}

if(user.otpExpiry < Date.now()){
return res.status(400).json({message:"OTP expired"});
}

generateToken(res,user._id);

user.otp = null;
user.otpExpiry = null;

await user.save();

res.json({
success:true,
_id:user._id,
name:user.name,
phone:user.phone,
role:user.role
});

};


export const logout = async (req,res)=>{

res.cookie("token","",{
httpOnly:true,
expires:new Date(0)
});

res.json({
success:true,
message:"Logged out successfully"
});

};