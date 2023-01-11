const { Videogame, Genre } = require("../../db");

//Encuentra todos los juegos e incluye los generos asociados por cada videjuego
const dbInfo = async() => {
    const data = await Videogame.findAll({
        include: {
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