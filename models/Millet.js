import mongoose from "mongoose";

const milletSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true
  },

  description:{
    type:String,
    required:true
  },

  category:{
    type:String,
    enum:[
      "Ragi",
      "Jowar",
      "Bajra",
      "Foxtail Millet",
      "Little Millet",
      "Kodo Millet",
      "Barnyard Millet"
    ]
  },

  price:{
    type:Number,
    required:true
  },

  quantity:{
    type:Number,
    required:true
  },

  unit:{
    type:String,
    default:"kg"
  },

  images:[
    {
      type:String
    }
  ],

  location:{
    type:String
  },

  organic:{
    type:Boolean,
    default:false
  },

  rating:{
    type:Number,
    default:0
  },

  farmer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }

},{timestamps:true});

export default mongoose.model("Millet",milletSchema);