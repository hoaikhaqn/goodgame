import React from 'react'

export default function Dropdown() {
    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-header">
                <div className="dropdown-header__heading">
                    <p className="dropdown-header__icon">
                        <span className="material-icons">
                            sort
                        </span>
                    </p>
                </div>
            </div>
            <ul className="dropdown-list">
                <li className="dropdown-list__item">
                    <button>Item 1</button>
                </li>
                <li className="dropdown-list__item">
                    <button>Item 2</button>
                </li>
                <li className="dropdown-list__item">
                    <button>Item 3</button>
                </li>
            </ul>
        </div>
    )
}
