import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="topbar">
                <div className="topbar__wrapper container">
                    <div className="topbar--left">
                        <h6 className="topbar__phone">Tel: <span>(+84) 86 554 7870</span></h6>
                    </div>
                    <div className="topbar--center">
                        <Link to="/"><img src="http://planetshine.net/demo/goodgame/wp-content/uploads/2016/11/logo.png" alt=""/></Link>
                    </div>
                    <div className="topbar--right">
                        <div className="topbar__item topbar__account">
                            <Link to="/"><span className="account__icon material-icons">account_circle</span> SignIn</Link>
                        </div>
                        <div className="topbar__item topbar__account">
                            <Link to="/"><span className="account__icon material-icons">search</span> Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

