import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { KeywordContext } from '../../contexts/KeywordContext';

export default function Header() {
    const [activeSearchBar, setActiveSearchBar] = useState(false);
    const [inputText, setInputText] = useState("");
    const { keyword, setKeyword } = useContext(KeywordContext);

    const onSubmitForm = (e) => {
        e.preventDefault();
        setKeyword(inputText);
    }

    const onHandleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const onClearKeyword = (e) => {
        setActiveSearchBar(false)
    }

    return (
        <header>
            <div className="topbar">
                <div className="topbar__wrapper container" data-active={activeSearchBar}>
                    <div className="topbar--left">
                        <h6 className="topbar__phone">Tel: <span>(+84) 86 554 7870</span></h6>
                    </div>
                    <div className="topbar--center">
                        <Link to="/"><img src="http://planetshine.net/demo/goodgame/wp-content/uploads/2016/11/logo.png" alt="" /></Link>
                    </div>
                    <div className="topbar--right">
                        <div className="topbar__item search_button">
                            <p onClick={() => setActiveSearchBar(true)}><span className="search_button__icon material-icons">search</span> Search</p>
                        </div>
                    </div>
                </div>
                <div className="topbar__searchbar container" data-active={activeSearchBar}>
                    <form onSubmit={(e) => onSubmitForm(e)}>
                        <input type="text" placeholder="Search game title..." defaultValue={keyword || ''} onChange={(e) => onHandleInputChange(e)} />
                    </form>
                    <button onClick={() => onClearKeyword()} className="btn__close"><span className="searchbar__icon material-icons">close</span></button>
                </div>
            </div>
        </header>
    )
}

