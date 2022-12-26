const { Platform } = require("../db.js");

const getPlatforms = async (req, res) => {
  try {
    const allPlatforms = await Platform.findAll()
    console.log(allPlatforms)
    // if (!allPlatforms.length)
    //   return res.status(404).send("No se encontraron plataformas :C");

    res.status(200).json(allPlatforms);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getPlatforms,
};