const fetch = require("cross-fetch")
const { API_KEY } = process.env;
//&page_size=3
const apiInfo = async() => {
    const games = []
    for(let i=0; i<=5; i++){
        let count = 1
        await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
            .then((response) => response.json())
            .then((data) => {
                return data.results?.map(game=> {
                    games.push({
                        id : game.id,
                        name: game.name,
                        description: game.description,
                        platforms: game.platforms.map((e) => e.platform.name).join(' | '),
                        released: game.released,
                        background_image: game.background_image,
                        rating: game.rating,
                        genres: game.genres.map(e => e.name).join(' | '),
                        count: count++
                    })
                })
        }).catch(error => console.log(error, "err"));
    }
    return games
}

module.exports = apiInfo