import React from 'react'
import Profile from './Profile.jsx';
import ListGame from './Games.jsx';

export default function User() {
    return (
        <div id="User">
            <div className="container">
                <div className="vertical-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link " data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#games" role="tab" aria-controls="games">Games</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane " id="profile" role="tabpanel">
                            <Profile />
                        </div>
                        <div className="tab-pane active" id="games" role="tabpanel">
                            <ListGame />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
