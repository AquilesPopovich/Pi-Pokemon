const axios = require('axios');
const mapProperys = require('../helpers/mapPropertys');
const {getPokemonById} = require('../controllers/getInDb');

const getPokemon = async(req, res) =>{
    try {
        const {idPokemon} = req.params;

        const pokemon = await getPokemonById(idPokemon)
        
        //if (pokemon) {
          //  return res.status(200).json(pokemon[0]);
          //}
    
        
          return res.status(200).json(pokemon)
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = getPokemon