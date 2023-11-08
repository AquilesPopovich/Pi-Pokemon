const {Pokemon, Type} = require('../db');
const mapProperys = require('../helpers/mapPropertys')
const axios = require('axios')


const getPokemonById = async(idPokemon)=>{
    
  console.log(idPokemon)
    if(isNaN(idPokemon)){ 
    return await Pokemon.findOne({
      where: { id: idPokemon },
      include: {
        model: Type,
        attributes: {
          exclude: ["id"]
        },
        through: {
          attributes: []
        }
      }
    });
    
  }else{
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    
    if(data.name){
      const mappedPokemon = mapProperys(data)
     return mappedPokemon
  }
  }
    
  
}

const getPokemonsByName = async(namePokemon) =>{
   
        const dbPokemon = await Pokemon.findAll({
            where: { name: namePokemon },
            include: {
              model: Type,
              attributes: {
                exclude: ["id"]
              },
              through: {
                attributes: []
              }
            }
          });
          

          if(dbPokemon.length === 0){
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
           return mapProperys(data)
          }
        return dbPokemon;
}

module.exports = {

 getPokemonById,
 getPokemonsByName

}