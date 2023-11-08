const {addPokemon} = require('../controllers/addInDb')

const postPokemons = async(req, res)=>{
    try {
        const { name, sprites, hp, atk, def, spAtk, spDef , spd, height, weight, type } = req.body;

       

        const newPokemon = await addPokemon(name, sprites, hp, atk, def, spAtk, spDef, spd, height, weight, type);
        

        if (newPokemon) {
            
            const responsePokemon = {
                name: newPokemon.name,
                sprites: newPokemon.sprites,
                hp: newPokemon.hp,
                atk: newPokemon.atk,
                def: newPokemon.def,
                spAtk: newPokemon.spAtk,
                spDef: newPokemon.spDef,
                spd: newPokemon.spd,
                height: newPokemon.height,
                weight: newPokemon.weight,
                type: newPokemon.type
                
            };


            return res.status(200).json(responsePokemon);
        } else {
            res.status(404).send('No se pudo crear al Pokémon');
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports= postPokemons