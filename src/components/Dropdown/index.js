import React, { useState, useEffect, useRef } from 'react';


export default function Dropdown({ items, onChange }) {
    const [active, setActive] = useState(false);
    const [selection, setSelection] = useState();
    const wrapperRef = useRef();

    const onShowList = (e) => {
        setActive(!active)
    }
    const handleClickOutside = (e) => {
        if (wrapperRef && !wrapperRef.current.contains(e.target)) {
            setActive(false)
        }
    }
    const handleChange = (value) => {
        setSelection(value)
        onChange(value);
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.addEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <div className="dropdown-wrapper" ref={wrapperRef}>
            <div className="dropdown-header" onClick={() => onShowList()}>
                <div className="dropdown-header__heading">
                    <p className="dropdown-header__icon">
                        <span className="material-icons">
                            sort
                        </span>
                    </p>
                </div>
            </div>
            <ul className={`dropdown-list ${active ? 'dropdown--open' : ''}`}>
                <li className={`dropdown-list__item ${!selection ? 'selected' : ''}`} onClick={() => handleChange()}>
                    Default
                </li>
                {
                    items.length > 0 && items.map((item, key) =>
                        <li key={key} className={`dropdown-list__item ${selection == item.value ? 'selected' : ''}`} onClick={() => handleChange(item.value)}>
                            {item.label}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
