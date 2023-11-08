const router = require('express').Router();
const getAllPokemons = require('../handlers/getAllPokemons');
const getPokemon = require('../handlers/getPokemon');
const getPokemonByName = require('../handlers/getPokemonByName');
const getTypes = require('../handlers/getTypes')
const postPokemons = require('../handlers/postPokemons')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)

router.get('/pokemons/name', getPokemonByName)

router.get('/pokemons/:idPokemon', getPokemon)

router.post('/pokemons', postPokemons)

router.get('/types', getTypes)




module.exports = router;
