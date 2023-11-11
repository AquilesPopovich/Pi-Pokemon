const { Type, Pokemon } = require('../db');

const addTypesInDb = async(data) =>{
    try {
        const typesMap = data.map(type => ({
            where: { name: type.name }, 
            defaults: { id: Number(type.url.split('/').filter(Boolean).pop()) } 
        }));
    
        for (const typeData of typesMap) {
            await Type.findOrCreate(typeData);
        }
    
        const dbTypes = await Type.findAll();

        

        return dbTypes
        
    } catch (error) {
        throw new Error('No se pudo agregar el Type')
    }
}

const addPokemon = async (name, sprites, hp, atk, def, spd, spAtk, spDef, height, weight, type) => {
    const nameLower = name.toLowerCase();
    if (!name || !sprites || !hp || !atk || !def || !spAtk || !spDef) {
        throw Error('Faltan datos');
    }

   
    if (type.length > 0 && type.length <= 2) {
        const [pokemon, create] = await Pokemon.findOrCreate({
            where: { name: nameLower },
            defaults: {
                name, sprites, hp, atk, def, spd, spAtk, spDef, height, weight
            }
        });
        
        if (create) {
            const addTypes = await Type.findAll({
                where: { name: type }
            });
         return await pokemon.addType(addTypes);
        }

        return pokemon
    }

   
}


module.exports = {
    addTypesInDb, 
    addPokemon
}