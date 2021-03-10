import React from 'react'

export default function Category(props) {
    const { data, idActive, onActiveClick } = props;
    return (
        <div id="NavBar">
            <div className="container">
                <nav className="nav_bar category_wrapper">
                    {
                        data && data.length > 0 ?
                            (
                                <ul className="category__list clear_fix">
                                    <li className={`category__item ${idActive ? '' : 'active'}`} onClick={() => onActiveClick(null)}>Random</li>
                                    {data.map(item =>
                                        <li key={item.id} className={`category__item ${idActive == item.id ? 'active' : ''}`} onClick={() => onActiveClick(item.id)}>{item.name}</li>
                                    )}
                                </ul>
                            )
                            : null
                    }
                </nav>
            </div>
        </div>


    )
}
