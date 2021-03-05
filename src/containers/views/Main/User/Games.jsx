import React from 'react'

export default function Games() {
    return (
        <div className="games">
            <div className="games__bar">
                <div className="bar__grid">
                    <input type="text" className="form-control bar__search" />
                    <select name="" id="" className="form-control bar-selector">
                        <option value="0">All </option>
                    </select>
                    <select name="" id="" className="form-control bar-selector">
                        <option value="0">All </option>
                    </select>
                    <select name="" id="" className="form-control bar-selector">
                        <option value="0">All </option>
                    </select>
                </div>
                <div className="games__labels">
                    <div>Game title</div>
                    <div>Genres</div>
                    <div>Platforms</div>
                    <div>Release date</div>
                    <div>Developed by</div>
                </div>
                <div className="games__wrapper">
                    <div className="game-row">
                        <div className="game-row__image">
                            <img src="" alt="" />
                        </div>
                        <div className="game-row__title">
                            Title game
                        </div>
                        <div className="game-row__genres">
                            Action, RPG
                        </div>
                        <div className="game-row__genres">
                            PC, XBOX
                        </div>
                        <div className="game_date">
                            20 JAN 25
                        </div>
                        <div className="game-row__develop-by">
                            Mon studios
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
