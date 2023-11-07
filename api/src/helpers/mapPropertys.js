const mapProperys = (data) =>{
    const { id, name, weight, height, stats, sprites, types } = data;

    const mapStats = {};

    for(const stat of stats){
        mapStats[stat.stat.name] = stat.base_stat
    }

    const hp = mapStats["hp"];
    const atk = mapStats["attack"];
    const def = mapStats["defense"];
    const spAtk = mapStats["special-attack"];
    const spDef = mapStats["special-defense"];
    const spd = mapStats["speed"];

    return{
    id,
    name,
    weight,
    height,
    hp,
    atk,
    def,
    spAtk,
    spDef,
    spd,
    types: types.map((type) => ({name: type.type.name})),
    }
}

module.exports = mapProperys