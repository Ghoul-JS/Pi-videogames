const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      // Use UUID - Diferenciar entre ambas DB'S
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },  
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.STRING, 
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING
    },
    dbCreated: { //sirve para distinguir entre la api y DB
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  }, {timestamps: false});
};

/*
 * Propiedades dle videojuego:
 * ID*
 * Nombre*
 * Descripción*
 * Fecha de lanzamiento
 * Rating
 * Plataformas*
 */