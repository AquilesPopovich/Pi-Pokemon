const router = require('express').Router();
const getAllPokemons = require('../handlers/getAllPokemons')
const getTypes = require('../handlers/getTypes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)

router.get('/pokemons/name')

router.get('/pokemons/:idPokemon')

router.post('/pokemons')

router.get('/types', getTypes)




module.exports = router;
