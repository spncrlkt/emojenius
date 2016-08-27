import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'middleware/logger';
import auth from 'middleware/auth';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const saga = createSagaMiddleware();

import rootSaga from 'sagas';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './containers/App'

import Home from './containers/Home';
import Search from './containers/Search'
import Login from './containers/Login'
import Word from './containers/Word'

// available middleware
// [ thunk, saga, logger ]
const middleware = process.env.NODE_ENV === 'production' ?
  [ auth, thunk, saga ] :
  [ auth, thunk, saga ]

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

saga.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="search" component={Search}/>
        <Route path="login/:userId/:authToken/:next" component={Login}/>
        <Route path="word/:title" component={Word}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
