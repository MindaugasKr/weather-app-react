import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';

import history from './history';
import App from './components/App';
import IEfallback from './components/fallback/IEfallback';
import reducers from './redux/reducers';

import './scss/main.scss';


const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");

const rootElement = document.getElementById('root');

// if IE
if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
  ReactDOM.render(
    <IEfallback />,
    rootElement
  );
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
          <App />
      </Router>
    </Provider>,
    rootElement
  );
}





