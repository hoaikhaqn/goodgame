import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Layouts
import MainLayout from './containers/layouts/MainLayout';
// Views
import Home from './containers/views/Main/Home';
import User from './containers/views/Main/User';
import NotFound from './containers/views/Main/NotFound';
import Login from './containers/views/Pages/SignIn';

const routeMain = [{
    path: '/',
    main: (props) => <Home  {...props} />
}, {
    path: '/user',
    render: () => <Redirect to="/user/profile" />
}, {
    path: '/user/profile',
    main: (props) => <User  {...props} />
}, {
    path: '/user/list-game',
    main: (props) => <User  {...props} />
}, {
    path: '*',
    main: () => <NotFound />
}]

const routePages = [{
    path: '/login',
    main: (props) => <Login  {...props} />
}]

const RenderRouterPages = () => {
    return routePages.map((route, index) => {
        return <Route key={index} path={route.path} exact component={props => route.main(props)} />
    })
}

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
                {RenderRouterPages()}
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
