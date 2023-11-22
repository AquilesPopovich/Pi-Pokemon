const axios = require('axios');
const { Type } = require('../db');
const {addTypesInDb} = require('../controllers/addInDb')

const getTypes = async (req, res) => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type");
        const typeList = data.results;

        const addTypes = await addTypesInDb(typeList);

        res.status(200).json(addTypes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = getTypes;
