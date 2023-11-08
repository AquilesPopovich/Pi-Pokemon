const {addPokemon} = require('../controllers/addInDb')

const postPokemons = async (req, res) => {
    try {
        const { name, sprites, hp, atk, def, spAtk, spDef, spd, height, weight, type } = req.body;

        const pokemon = await addPokemon(name, sprites, hp, atk, def, spd, spAtk, spDef, height, weight, type);

        console.log(pokemon)
        if (pokemon) {
            return res.status(200).json(pokemon);
        } 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postPokemons;