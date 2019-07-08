import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './history';
import configureStore from './configureStore';
import App from './components/app';
import IEfallback from './components/fallback/IEfallback';

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
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
          <App />
      </Router>
    </Provider>,
    rootElement
  );
}





