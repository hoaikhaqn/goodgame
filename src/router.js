import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Layouts
import MainLayout from './containers/MainLayout';
// Views
import Home from './views/Home';
import NotFound from './views/NotFound';

const routeMain = [{
    path: '/',
    main: (props) => <Home  {...props} />
}, {
    path: '*',
    main: () => <NotFound />
}]

const RenderRouteMain = () => {
    return routeMain.map((route, index) => {
        if (route.render) {
            return <Route key={index} path={route.path} exact render={route.render} />
        }
        return <Route key={index} path={route.path} exact component={props => route.main(props)} />
    })
}

export default function routes(props) {
    return (
        <Router basename={'/'} >
            <Switch>
                <Route>
                    <MainLayout>
                        <Switch>
                            {RenderRouteMain()}
                        </Switch>
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
    )
}
