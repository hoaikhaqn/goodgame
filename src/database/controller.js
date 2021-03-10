import Data from './data.json';

const db = {
    genres: {
        getDataGenres: () => {
            return new Promise((resolve, reject) => {
                try {
                    resolve(Data.genres);
                } catch (error) {
                    reject(error);
                }
            })
        }
    },
    games: {
        getDataGames: () => {
            return new Promise((resolve, reject) => {
                try {
                    resolve(Data.games);
                } catch (error) {
                    reject(error);
                }
            })
        },
        getGamesByCategory: (idCategory) => {
            return new Promise((resolve, reject) => {
                try {
                    const games = Data.games.filter(game => {
                        let genres = game.genres;
                        if (genres.find(genre => genre.id == idCategory))
                            return true
                        else
                            return false
                    })
                    resolve(games);
                } catch (error) {
                    reject(error);
                }
            })
        },
        getGamesByName: (name, idCategory) => {
            return new Promise((resolve, reject) => {
                try {
                    const games = Data.games.filter(game => {
                        let titleGame = game.name.toLowerCase();
                        if (idCategory) {
                            let genres = game.genres;
                            return (titleGame.includes(name.toLowerCase()) && genres.find(genre => genre.id == idCategory))
                        } else return titleGame.includes(name.toLowerCase())
                    })
                    resolve(games);
                } catch (error) {
                    reject(error);
                }
            })
        }
    }
}

export default db;