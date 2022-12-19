const {Router} = require('express')
const {getVideogames, getVideogameById, createtVideogames, updateVideogame} = require('../controllers/videogames.controllers.js')
const router = Router()

router.get("/videogames", getVideogames)    
router.get("/videogames/:id", getVideogameById)
router.post("/videogames", createtVideogames)
router.put("/videogames/:id", updateVideogame)

module.exports = router