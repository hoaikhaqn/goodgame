import React, { useState } from 'react'

import Nav from '../../../../components/Nav';
import ItemCard from './ItemCard.jsx'
import ItemDetail from './ItemDetail.jsx';

import listData from '../../../../data/data.json';

export default function Home() {
    const [itemActived, setItemActived] = useState();
    const onOpenDetailPopup = (dataItem) => {
        setItemActived(dataItem)
    }
    const onClosePopup = () => {
        setItemActived(null)
    }
    return (
        <div className="home_page" >
            <Nav />
            <div className="product_list">
                <div className="container">
                    <div className="product_list__wrapper">
                        <div className="row">
                            {
                                listData.map((item, key) =>
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={key}>
                                        <ItemCard onOpenDetailPopup={onOpenDetailPopup} index={key} dataItem={item} />
                                    </div>
                                )
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
