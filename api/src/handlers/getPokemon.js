const axios = require('axios');
const mapProperys = require('../helpers/mapPropertys');
const {getPokemonById} = require('../controllers/getInDb');





const getPokemon = async(req, res) =>{
    try {
        const {idPokemon} = req.params;

        const idPokemonLower = idPokemon.toLowerCase()

        const pokemon = await getPokemonById(idPokemonLower)
        console.log('holi' + pokemon)
        if (pokemon) {
            return res.status(200).json(pokemon);
          }
    
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemonLower}`)
    
        if(data.name){
            const mappedPokemon = mapProperys(data)
            return res.status(200).json(mappedPokemon)
        }
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = getPokemon