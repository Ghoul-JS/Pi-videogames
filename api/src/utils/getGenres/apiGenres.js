const fetch = require("cross-fetch");
const { Genre } = require("../../db");


const apiGenres = async () => {
  const response = await fetch(`https://api.rawg.io/api/genres?key=ae355ce3d1634faebcc9a6be72c035e8`);
  const json = await response.json();
  console.log(json);
  let genres = json.results;
  let genresArray = [];

  genres?.map(genre => {
      genresArray.push({
          name: genre.name
      });
  });
  // Guardamos los géneros en nuestra base de datos
  for(let i = 0; i<genres.length; i++) {
    const {name, id} = genres[i]

    await Genre.findOrCreate({
      where: {id:id, name:name}
    })
  }
  return genresArray;
};

module.exports = apiGenres;
