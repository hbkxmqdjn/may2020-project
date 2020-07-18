import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter,Switch,Route} from 'react-router-dom'
import Compare from './containers/compare/compare'
import Grid from './containers/grid/grid'
import Main from './containers/main/main'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/compare' component={Compare}></Route>
                <Route path='/grid' component={Grid}></Route>
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>
),document.getElementById('root'));