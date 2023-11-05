const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const pokemon = sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sprites: {
      type: DataTypes.STRING,
      allowNull: true
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spAtk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spDef: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spd: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },{ timestamps: false });

  return {pokemon}
};
