const fetch = require("cross-fetch");
const { Platform } = require("../../db");


const apiPlatforms = async () => {
  const response = await fetch(`https://api.rawg.io/api/platforms?key=ae355ce3d1634faebcc9a6be72c035e8`);
  const json = await response.json();

  let platforms = json.results;

  let platformsArray = [];

  platforms?.map(genre => {
      platformsArray.push({
          name: genre.name
      });
  });
  // Guardamos las plataformas en nuestra base de datos
  for(let i = 0; i<platforms.length; i++) {
    const {name, id} = platforms[i]

    await Platform.findOrCreate({
      where: {id, name}
    })
  }
  return platformsArray;
};

module.exports = apiPlatforms;