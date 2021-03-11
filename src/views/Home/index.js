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

    const ListSort = [{ label: "New Game", value: "release_date" }, { label: "Title A->Z", value: "name_asc" }, { label: "Title Z->A", value: "name_desc" }]

    const onOpenDetailPopup = (dataItem) => {
        setItemActived(dataItem)
    }
    const onClosePopup = () => {
        setItemActived(null)
    }
    const onActiveCategory = (id) => {
        setCategoryActived(id)
    }
    const handleChangeSort = (sort) => {
        var objSort = {}
        if (sort == "release_date") {
            objSort[sort] = "desc";
        }
        if (sort == "name_asc") {
            objSort.name = "asc";
        }
        if (sort == "name_desc") {
            objSort.name = "desc";
        }
        setCurrentSort(objSort);
    }

    useEffect(() => {
        (async function fetchData() {
            let res = await db.genres.getDataGenres();
            setDataCategory(res);
        })()
    }, [])

    useEffect(() => {
        let idCategory = categoryActived;
        (async function fetchData() {
            let res = await db.games.getGames({ name: keyword, idCategory, orderBy: currentSort });
            setDataGames(res)
        })()
        
    }, [categoryActived, keyword, currentSort])

    return (
        <div className="home_page" >
            <Category data={dataCategory} idActive={categoryActived} onActiveClick={onActiveCategory} />
            <div className="product_list">
                <div className="container">
                    <div className="top-panel">
                        <Dropdown items={ListSort} onChange={(sort) => handleChangeSort(sort)} />
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
