const apiGames = require('./apiGames')
const dbGames = require('./bdGames')

const getAllGames = async () => {
    const apiInfoGames = await apiGames();
    const dbInfoGames = await dbGames();
    const totalGames = [...apiInfoGames, ...dbInfoGames];
    return totalGames;  
}

module.exports = getAllGames