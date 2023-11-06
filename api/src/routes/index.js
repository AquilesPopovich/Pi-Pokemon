const router = require('express').Router();
const getAllPokemons = require('../handlers/getAllPokemons')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)

router.get(' /pokemons/:idPokemon')

router.get(' /pokemons/name?="..."')

router.post('/pokemons')

router.get('/types')




module.exports = router;
