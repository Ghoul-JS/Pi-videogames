const { Videogame, Genre } = require("../../db");

/**
 * Find all videogames and include the genres associated with each videogame.
*/
const dbInfo = async() => {
    const data = await Videogame.findAll({
        includes: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })
    return data
}
module.exports = dbInfo