import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Home from './modules/Home'

import { Router, Route, hashHistory, IndexRoute} from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {/* add it here, as a child of `/` */}
            <IndexRoute component={Home}/>
            {/* make them children of `App` */}
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))