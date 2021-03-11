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
        getGames: (params) => {
            return new Promise((resolve, reject) => {
                try {
                    var games = [...Data.games];
                    if (params) {
                        if (params.idCategory) {
                            games = games.filter(game => {
                                let genres = game.genres;
                                return genres.find(genre => genre.id == params.idCategory)
                            })
                            console.log("Cate", games);
                        }


                        if (params.name) {
                            games = games.filter(game => {
                                let titleGame = game.name.toLowerCase();
                                return titleGame.includes(params.name.toLowerCase())
                            })
                            console.log("Name", games);
                        }


                        if (params.orderBy) {
                            if (params.orderBy.releaseDate) {
                                games.sort((a, b) => {
                                    return new Date(b.releaseDate) - new Date(a.releaseDate);
                                })
                            }
                            console.log("Order By", games);
                        }
                    }
                    console.log(games);

                    resolve(games)
                } catch (error) {
                    reject(error);
                }
            })
        },
        getGamesByCategory: (idCategory, sort) => {
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
        getGamesByName: (name, params) => {
            return new Promise((resolve, reject) => {
                try {
                    const games = Data.games.filter(game => {
                        let titleGame = game.name.toLowerCase();
                        if (params.idCategory) {
                            let genres = game.genres;
                            return (titleGame.includes(name.toLowerCase()) && genres.find(genre => genre.id == params.idCategory))
                        } else return titleGame.includes(name.toLowerCase())
                    })
                    resolve(games);
                } catch (error) {
                    reject(error);
                }
            })
        },
    }
}

export default db;