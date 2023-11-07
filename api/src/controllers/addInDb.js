
const { Type } = require('../db');

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

module.exports = {
    addTypesInDb
}