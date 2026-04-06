import User from "../models/User.js";
import bcrypt from "bcryptjs";

/* =========================
   Get Logged In User
========================= */

export const getUserProfile = async (req, res) => {

try {

const user = await User.findById(req.user._id).select("-password");

if (!user) {
return res.status(404).json({ message: "User not found" });
}

res.json(user);

} catch (error) {

res.status(500).json({ message: error.message });

}

};


/* =========================
   Update User Profile
========================= */

export const updateUserProfile = async (req, res) => {

try {

const user = await User.findById(req.user._id);

if (!user) {
return res.status(404).json({ message: "User not found" });
}

user.name = req.body.name || user.name;
user.email = req.body.email || user.email;

if (req.body.password) {

const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(req.body.password, salt);

}

const updatedUser = await user.save();

res.json({
_id: updatedUser._id,
name: updatedUser.name,
email: updatedUser.email,
role: updatedUser.role
});

} catch (error) {

res.status(500).json({ message: error.message });

}

};


/* =========================
   Get All Users
========================= */

export const getAllUsers = async (req, res) => {

try {

const users = await User.find().select("-password");

res.json(users);

} catch (error) {

res.status(500).json({ message: error.message });

}

};