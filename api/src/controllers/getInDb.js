const {Pokemon, Type} = require('../db');
const mapTypes = require('../helpers/mapTypes')

const getPokemonById = async(idPokemon)=>{
  
        const dbPokemon = await Pokemon.findOne({
            where: { id: idPokemon },
            include: [
              {
                model: Type,
                attributes: ["name", "id"],
              },
            ],
          });
          console.log("holi" + dbPokemon)
          const pokemon = mapTypes(dbPokemon);
          return pokemon;
  
}

const getPokemonsByName = async(value) =>{
    try {
        const dbPokemon = await Pokemon.findAll({
            where: { id: value },
            include: [
              {
                model: Type,
                attributes: ["name", "id"],
              },
            ],
          });
          const pokemon = mapTypes(dbPokemon);
          return pokemon;
        
    } catch (error) {
        throw new Error('no se encontro el ID')
    }
}

module.exports = {

 getPokemonById,
 getPokemonsByName

}