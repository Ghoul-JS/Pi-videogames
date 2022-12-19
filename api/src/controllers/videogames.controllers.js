const fetch = require("cross-fetch");
const { Videogame, Genre } = require("../db.js");
// const { conn } = require('../db.js');
const getAllGames = require("../utils/getGames/getAllGames");
const { API_KEY } = process.env;

const getVideogames = async (req, res) => {
  try {
    const { name } = req.query;
    let allGames = await getAllGames();

    if (name) {
      let gameName = allGames.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
      );
      gameName.length
        ? res.status(200).json(gameName)
        : res.status(404).send("No se encuentra el videojuego :c");
    } else {
      return res.status(200).json({ succes: true, game: allGames });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getVideogameById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isNaN(id)) {
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      const json = await response.json();
      const detail = json;
      const gameApiDetail = {
        background_image: detail.background_image,
        name: detail.name,
        genres: detail.genres?.map((g) => g.name),
        description: detail.description_raw,
        released: detail.released,
        rating: detail.rating,
        platforms: detail.platforms?.map((p) => p.platform.name).join(" | ").toString(),
      };
      res.status(200).json(gameApiDetail);
    } else {
      const gameDbId = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.status(200).json(gameDbId);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createtVideogames = async (req, res) => {
  try {
    const {
      name,
      description,
      released,
      rating,
      platforms,
      background_image,
      genres,
    } = req.body;
    if (!name || !description || !platforms)
      return res.status(404).send("Falta enviar datos obligatorios");

    const newGame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      background_image,
      genres,
    });
    const genresDb = await Genre.findAll({
      where: {
        name: genres,
      },
    });
    newGame.addGenres(genresDb);
    res.status(200).send(newGame);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateVideogame = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      platforms,
      rating,
      background_image,
      released,
      genres,
    } = req.body;

    if (id) {
      const game = await Videogame.update(
        {
          name,
          description,
          platforms,
          rating,
          background_image,
          released,
          genres: genres[0].name,
        },
        { where: { id } }
      );
      res.status(200).json(game);
    } else {
      return res.status(404).send("No existe ese juego con ID: ", id);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVideogames,
  getVideogameById,
  createtVideogames,
  updateVideogame,
};

