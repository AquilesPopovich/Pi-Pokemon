const router = require('express').Router();
const getAllPokemons = require('../handlers/getAllPokemons');
const getPokemon = require('../handlers/getPokemon');
const getPokemonByName = require('../handlers/getPokemonByName');
const getTypes = require('../handlers/getTypes')
const postPokemons = require('../handlers/postPokemons')
const deletePokemon = require("../handlers/deletePokemon")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)

router.get('/name', getPokemonByName)

router.get('/pokemons/:idPokemon', getPokemon)

router.post('/pokemons', postPokemons)

router.get('/types', getTypes)

router.delete('/pokemons', deletePokemon)




module.exports = router;
