const mapProperys = require('../helpers/mapPropertys')
const {getPokemonsByName} = require('../controllers/getInDb')
const { default: axios } = require('axios')


const getPokemonByName = async(req, res) =>{
    try {
        const {value} = req.query
    
        const namePokemon = value.toLowerCase()

        const pokemonsByDb = await getPokemonsByName(namePokemon)

        try {
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
            const pokemonsByApi = mapProperys(data)
        } catch (error) {
            throw new Error('not found by api')
        }

        const pokemonsTotales = [...pokemonsByDb.flat(),pokemonsByApi]

        return res.status(200).json(pokemonsTotales);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports =getPokemonByName