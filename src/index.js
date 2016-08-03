import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const saga = createSagaMiddleware();

import rootSaga from 'sagas';


import { Router, Route, hashHistory } from 'react-router'

import App from './containers/App'
import Admin from './containers/Admin'
import Login from './containers/Login'
import Word from './containers/Word'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk, saga ] :
  [ thunk, saga ]

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
        <Route path="admin" component={Admin}/>
        <Route path="login/:user_id/:next" component={Login}/>
        <Route path="word/:title" component={Word}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
