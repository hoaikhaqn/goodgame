import React from 'react';
import Routers from './router';

import './assets/styles/all.scss';

function App(props) {
    return (
        <div className="main_wrapper">
            <Routers />
        </div>
    );
}

export default App;