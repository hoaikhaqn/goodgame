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
    const [itemActived, setItemActived] = useState();

    const [categoryActived, setCategoryActived] = useState();
    const [currentSort, setCurrentSort] = useState(null);
    const { keyword } = useContext(KeywordContext);

    const ListSort = [{ label: "New Game", value: "release_date" }, { label: "Title A->Z", value: "name_asc" }]

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
        let idCategory = categoryActived;
        (async function fetchData() {
            Promise.all([db.genres.getDataGenres(), db.games.getGames({ name: keyword, idCategory, orderBy: currentSort })]).then(result => {
                setDataCategory(result[0]);
                setDataGames(result[1]);
            })
        })()
    }, [])

    useEffect(() => {
        // Get games by Genres
        let idCategory = categoryActived;
        (async function fetchData() {
            let res = db.games.getGames({ name: keyword, idCategory, orderBy: currentSort });
            setDataGames(res)
        })()
    }, [categoryActived])

    useEffect(() => {
        (async function fetchData() {
            if (keyword || keyword == '') {
                let idCategory = categoryActived;
                var res = await db.games.getGames({ name: keyword, idCategory, orderBy: currentSort });
                setDataGames(res)
            }
        })()
    }, [keyword])

    // useEffect(() => {
    //     if (currentSort) {
    //         var objSort = {}
    //         if (currentSort == "release_date") {
    //             objSort[currentSort] = "desc";
    //         }
    //         if (currentSort == "name_asc") {
    //             objSort.name = "asc";
    //         }
    //         (async function fetchData() {
    //             let idCategory = categoryActived;
    //             var res = await db.games.getGames({ name: keyword, idCategory, orderBy: objSort });
    //             setDataGames(res)
    //             setCurrentSort(objSort)
    //         })()
    //     }
    // }, [currentSort])

    return (
        <div className="home_page" >
            <Category data={dataCategory} idActive={categoryActived} onActiveClick={onActiveCategory} />
            <div className="product_list">
                <div className="container">
                    <div className="top-panel">
                        <Dropdown items={ListSort} onChange={(sort) => setCurrentSort(sort)} />
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
