import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


import { getAllProducts } from './actions'


import { Router, Route, hashHistory } from 'react-router'

import App from './containers/App'
import Butt from './containers/Butt'
import Login from './containers/Login'

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk ]

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login/:user_id" component={Login}/>
        <Route path="butt" component={Butt}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
