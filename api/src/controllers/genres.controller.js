const {apiGenres} = require('../utils/getGenres/apiGenres.js');

const getGenres = async (req, res) => {
  try {
    const allGenres = await apiGenres()
    if (!allGenres.length)
      return res.status(404).send("No se encontraron géneros :C");

    res.status(200).json(allGenres);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGenres,
};
