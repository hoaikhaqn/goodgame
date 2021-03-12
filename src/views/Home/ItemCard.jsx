import React, { useRef, useState, useEffect } from 'react'

export default function ItemCard({ dataItem, onOpenDetailPopup }) {
    const [itemLoaded, setItemLoaded] = useState(false);

    const handlePlayVideo = (e) => {
        let vid = e.target.nextSibling
        if (vid) {
            vid.currentTime = 0;
            vid.play()
        }
    }

    const handleStopVideo = (e) => {
        let vid = e.target
        vid.pause()
    }

    return (
        <div className="card_game" data-loading={true}>
            <div className="card_game__wrapper">
                <div className="card_game__preview">
                    <div className="preview_inner">
                        <div className="release_date">
                            {`${(new Date(dataItem.releaseDate)).getMonth() + 1 < 10 ? `0${(new Date(dataItem.releaseDate)).getMonth() + 1}` : (new Date(dataItem.releaseDate)).getMonth() + 1}/${(new Date(dataItem.releaseDate)).getFullYear()}`}
                        </div>
                        <img className="card_game__preview--front" onLoad={() => setItemLoaded(true)} src={`./assets/images/${dataItem.image}`} alt="image" onMouseEnter={(e) => { handlePlayVideo(e) }} />
                        <video className="card_game__preview--back video_preview" src={`./assets/videos/${dataItem.clipPreview}`} alt="clip" muted loop onMouseLeave={(e) => { handleStopVideo(e) }}></video>
                    </div>
                </div>
                <ul className="card_game__platforms">
                    {
                        dataItem && dataItem.platforms.map((platform_item, key) =>
                            <li key={key} className="platform__item"><span>{platform_item}</span></li>
                        )
                    }
                </ul>
                <h4 className="card_game__name" title={dataItem.name} onClick={() => { onOpenDetailPopup(dataItem) }}>
                    {dataItem.name}
                </h4>
                <ul className="card_game__developers items-inline">
                    {
                        dataItem && dataItem.developers.map((developer_item, key) =>
                            <li key={key} className="developer__item">{key > 0 ? ', ' : ''}<span>{developer_item}</span></li>
                        )
                    }
                </ul>
                <ul className="card_game__genres items-inline">
                    {
                        dataItem && dataItem.genres.map((genre_item, key) =>
                            <li key={genre_item.id} className="genre__item">{key > 0 ? ', ' : ''}<span>{genre_item.name}</span></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
