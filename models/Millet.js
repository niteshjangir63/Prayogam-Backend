import mongoose from "mongoose";

const milletSchema = new mongoose.Schema({

    nameEnglish: {
        type: String,
        required: true
    },

    nameHindi: String,

    type: String,

    location: String,

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    harvestDate: Date,

    minOrder: Number,

    description: String,

    organic: {
        type: Boolean,
        default: false
    },

    photos: [
        {
            type: String
        }
    ],

    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

export default mongoose.model("Millet", milletSchema);