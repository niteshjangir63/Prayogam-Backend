import Millet from "../models/Millet.js";


// CREATE MILLET (Farmer only)

export const createMillet = async (req,res) => {

try{

const {name,description,category,price,quantity,location,organic} = req.body;

if(!name || !price || !quantity){
return res.status(400).json({message:"Required fields missing"});
}

const millet = await Millet.create({

name,
description,
category,
price,
quantity,
location,
organic,
images:req.body.images || [],
farmer:req.user._id

});

res.status(201).json({
success:true,
data:millet
});

}catch(error){

res.status(500).json({
message:"Failed to create millet",
error:error.message
});

}

};



// GET ALL MILLETS

export const getMillets = async (req,res) => {

try{

const millets = await Millet
.find()
.populate("farmer","name phone")
.sort({createdAt:-1});

res.json({
success:true,
count:millets.length,
data:millets
});

}catch(error){

res.status(500).json({
message:"Failed to fetch millets"
});

}

};



// GET SINGLE MILLET

export const getMilletById = async (req,res) => {

try{

const millet = await Millet
.findById(req.params.id)
.populate("farmer","name phone location");

if(!millet){
return res.status(404).json({message:"Millet not found"});
}

res.json(millet);

}catch(error){

res.status(500).json({
message:"Error fetching millet"
});

}

};



// DELETE MILLET (Only Farmer Owner)

export const deleteMillet = async (req,res) => {

try{

const millet = await Millet.findById(req.params.id);

if(!millet){
return res.status(404).json({message:"Millet not found"});
}

if(millet.farmer.toString() !== req.user._id.toString()){
return res.status(403).json({message:"Not authorized"});
}

await millet.deleteOne();

res.json({message:"Millet deleted"});

}catch(error){

res.status(500).json({
message:"Delete failed"
});

}

};