import React, { useState, useEffect, useContext } from 'react';

import Dropdown from '../../components/Dropdown';

import Category from './Category.jsx';
import ItemCard from './ItemCard.jsx'
import ItemDetail from './ItemDetail.jsx';

import { KeywordContext } from '../../contexts/KeywordContext';
import db from '../../database/controller';

export default function Home() {
    const [dataGames, setDataGames] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [categoryActived, setCategoryActived] = useState();
    const [itemActived, setItemActived] = useState();
    const { keyword } = useContext(KeywordContext);

    const onOpenDetailPopup = (dataItem) => {
        setItemActived(dataItem)
    }
    const onClosePopup = () => {
        setItemActived(null)
    }
    const onActiveCategory = (id) => {
        setCategoryActived(id)
    }

    useEffect(() => {
        // Get Data 
        (async function fetchData() {
            let res = await db.genres.getDataGenres();
            setDataCategory(res)
        })()
    }, [])

    useEffect(() => {
        // Get games by Genres
        let idCategory = categoryActived;
        (async function fetchData() {
            if (categoryActived) {
                var res = await db.games.getGamesByCategory(idCategory);
            } else {
                var res = await db.games.getDataGames();
            }
            setDataGames(res)
        })()
    }, [categoryActived])

    useEffect(() => {
        (async function fetchData() {
            if (keyword || keyword == '') {
                let idCategory = categoryActived;
                var res = await db.games.getGamesByName(keyword, idCategory);
                setDataGames(res)
            }
        })()
    }, [keyword])

    return (
        <div className="home_page" >
            <Category data={dataCategory} idActive={categoryActived} onActiveClick={onActiveCategory} />
            <div className="product_list">
                <div className="container">
                    <div className="top-panel">
                        <Dropdown />
                    </div>
                    <div className="product_list__wrapper">
                        <div className="row">
                            {
                                dataGames.length > 0 && dataGames.map((item, key) =>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
                                        <ItemCard onOpenDetailPopup={onOpenDetailPopup} index={key} dataItem={item} />
                                    </div>
                                )
                                ||
                                <div>Not found game!</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                itemActived && <ItemDetail dataItem={itemActived} onClosePopup={onClosePopup} /> || null
            }
        </div>
    )
}
