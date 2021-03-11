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
                        }
                        if (params.name) {
                            games = games.filter(game => {
                                let titleGame = game.name.toLowerCase();
                                return titleGame.includes(params.name.toLowerCase())
                            })
                        }
                        if (params.orderBy) {
                            if (params.orderBy.release_date) {
                                games.sort((a, b) => {
                                    if(params.orderBy.releaseDate == 'asc')
                                    return new Date(a.releaseDate) - new Date(b.releaseDate);
                                    else
                                    return new Date(b.releaseDate) - new Date(a.releaseDate);
                                })
                            }
                            if (params.orderBy.name) {
                                games.sort((a, b) => {
                                    if(params.orderBy.name == 'asc'){
                                        return (a.name < b.name) ? -1 : 1;
                                    }
                                    else{
                                        return (a.name > b.name) ? -1 : 1;
                                    }
                                    
                                })
                            }
                        }
                    }
                    resolve(games)
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
        }
    }
}

export default db;