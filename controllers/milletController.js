import Millet from "../models/Millet.js";

export const createMillet = async (req, res) => {
  try {

    const {
      nameEnglish,
      nameHindi,
      type,
      location,
      price,
      quantity,
      harvestDate,
      minOrder,
      description,
      organic
    } = req.body;

    // Validation
    if (!nameEnglish || !price || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Name, Price and Quantity are required"
      });
    }

    // Handle uploaded images
    let photos = [];

    if (req.files && req.files.length > 0) {
      photos = req.files.map(file => file.filename);
    }

    // Create Millet
    const millet = new Millet({
      nameEnglish,
      nameHindi,
      type,
      location,
      price,
      quantity,
      harvestDate,
      minOrder,
      description,
      organic,
      photos,
      farmer: req.user._id
    });

    const savedMillet = await millet.save();

    console.log(savedMillet);

    res.status(201).json({
      success: true,
      message: "Millet Added Successfully",
      data: savedMillet
    });

  } catch (error) {

    console.log("Add Millet Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }
};



// GET ALL MILLETS
export const getMillets = async (req, res) => {

  try {

    const millets = await Millet
      .find()
      .populate("farmer", "name phone")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: millets.length,
      data: millets
    });

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch millets"
    });

  }

};



// GET SINGLE MILLET
export const getMilletById = async (req, res) => {

  try {

    const millet = await Millet
      .findById(req.params.id)
      .populate("farmer", "name phone location");

    if (!millet) {
      return res.status(404).json({ message: "Millet not found" });
    }

    res.json(millet);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching millet"
    });

  }

};



// DELETE MILLET
export const deleteMillet = async (req, res) => {

  try {

    const millet = await Millet.findById(req.params.id);

    if (!millet) {
      return res.status(404).json({ message: "Millet not found" });
    }

    if (millet.farmer.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await millet.deleteOne();

    res.json({ message: "Millet deleted" });

  } catch (error) {

    res.status(500).json({
      message: "Delete failed"
    });

  }

};