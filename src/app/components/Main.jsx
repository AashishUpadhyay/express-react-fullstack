import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedTaskDetail } from './TaskDetail'
import { ConnectedDashboard } from './Dashboard'
import { ConnectedNavigation } from './Navigation'
import { store } from '../store';
import { history } from '../store/history';

export const Main = ()=>(
    <Router history={history}>
        <Provider store={store}>
            <div className="container mt-3">
                <ConnectedNavigation/>
                <Route exact
                       path="/dashboard"
                       render={()=>(<ConnectedDashboard/>)}/>

                <Route exact
                       path="/task/:id"
                       render={({match})=>(<ConnectedTaskDetail match={match}/>)} />
            </div>
        </Provider>
    </Router>
);