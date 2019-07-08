import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../redux/reducers';
import { middlewares } from '../configureStore';

import {
  render,
} from '@testing-library/react';

/**
 * Creates redux store to be used in testing
 * 
 * ToDo replace with store used to actual components.
 * 
 * @param {object} initialState - used as initil state when creating store.
 */
export const storeFactory = initialState => applyMiddleware(...middlewares)(createStore)(rootReducer, initialState);

/**
 * Wrapper for react-testing-library render method, to make complicated render setups simpler.
 * 
 * @param {Class / function} Component - React component
 * @param {object} initialState - for creating redux store.
 * @param {object} props - initial components props
 */
export const createRender = (Component, initialState = {}, props = {}) => {
  const store = storeFactory(initialState);
  return render(<Provider store={store}><Component {...props} /></Provider>);
}