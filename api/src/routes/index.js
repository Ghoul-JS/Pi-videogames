const { use } = require('chai');
const { Router } = require('express');
const genres = require('./genres.routes')
const videogames = require('./videogames.routes')
const platforms = require('./platforms.routes')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(videogames)
router.use(genres)
router.use(platforms)

module.exports = router;
