const mapProperys = require('../helpers/mapPropertys')
const mapTypes = require('../helpers/mapTypes')
const {getPokemonsByName} = require('../controllers/getInDb')
const { default: axios } = require('axios')


const getPokemonByName = async(req, res) =>{
    try {
        const {name} = req.query
    
        const namePokemon = name.toLowerCase()

        const pokemonsByDb = await getPokemonsByName(namePokemon)



        return res.status(200).json(pokemonsByDb);
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports =getPokemonByName