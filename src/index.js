import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import App from './components/App';
import reducers from './redux/reducers';

import './scss/main.scss';


const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");

// if IE
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
  
  ReactDOM.render(
    <div style={{width: "100vw", height: "100vh", position: "relative"}}>
      <span style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)"}}>
        Browser not supported. Please use modern browser.
      </span>
    </div>,
    document.getElementById('root')
  )

} else {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/:lat?/:lon?" exact component={App} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
  )

}





